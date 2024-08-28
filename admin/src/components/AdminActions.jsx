import { useState, useRef, useEffect } from 'react';

const AdminActions = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    access: {
      eventsManagement: false,
      blogManagement: false,
    },
  });

  const menuRef = useRef(null);
  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  const handleMenuToggle = () => setShowMenu(!showMenu);

  const handleEditClick = () => {
    setShowMenu(false);
    setShowPopup(true);
    // Populate the form with existing user data if editing.
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (either add new admin or edit existing one).
    setShowPopup(false);
  };

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

      {/* Sidebar Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div
            className="fixed inset-y-0 right-0 bg-white w-80 p-6 rounded-l-lg shadow-lg z-50"
            ref={popupRef}
          >
            <h2 className="text-lg font-semibold mb-4">Edit Admin</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col space-y-1">
                <label className="font-medium">Admin Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter admin name"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  className="w-full px-4 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label className="font-medium">Role</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md"
                  required
                >
                  <option value="">Select a role</option>
                  <option value="Super Admin">Super Admin</option>
                  <option value="Admin">Admin</option>
                  <option value="User">User</option>
                </select>
              </div>
              <div className="flex flex-col space-y-2">
                <label className="font-medium">Grant Access</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="eventsManagement"
                    checked={formData.access.eventsManagement}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label>Events Management</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="blogManagement"
                    checked={formData.access.blogManagement}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label>Blog Management</label>
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={handleClosePopup}
                  className="px-4 py-2 bg-gray-200 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminActions;
