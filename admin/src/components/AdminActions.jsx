import{ useState, useRef, useEffect } from 'react';

const AdminActions = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const menuRef = useRef(null);
  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  const handleMenuToggle = () => setShowMenu(!showMenu);

  const handleEditClick = () => {
    setShowMenu(false);
    setShowPopup(true);
  };

  const handleClosePopup = () => setShowPopup(false);

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      popupRef.current &&
      !popupRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setShowMenu(false);
      setShowPopup(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left">
      {/* Action Menu Trigger (Three Dots) */}
      <button
        onClick={handleMenuToggle}
        className="p-2"
        ref={buttonRef}
      >
        ⋮
      </button>

      {/* Dropdown Menu */}
      {showMenu && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg"
          ref={menuRef}
        >
          <button
            onClick={handleEditClick}
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
          >
            Edit
          </button>
          <button
            className="block w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100"
          >
            Remove admin
          </button>
        </div>
      )}

      {/* Popup Modal */}
      {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          ref={popupRef}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-semibold mb-4">Edit Admin</h2>
            <input
              type="text"
              placeholder="Enter new admin info"
              className="w-full px-4 py-2 border rounded-md mb-4"
            />
            <div className="flex justify-end">
              <button
                onClick={handleClosePopup}
                className="px-4 py-2 bg-gray-200 rounded-md mr-2"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminActions;
