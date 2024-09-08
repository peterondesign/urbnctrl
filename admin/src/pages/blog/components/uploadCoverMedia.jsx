import classNames from "classnames";

const UploadCoverMedia = ({ preview, onChange }) => {
  return (
    <div
      className={classNames(
        "w-full h-[328px] relative overflow-hidden rounded-2xl",
        {
          "border border-[#0000004c]": !preview,
        }
      )}
    >
      {preview && (
        <span
          className=" absolute top-3 right-3 grid z-[3] place-items-center w-9 h-9 rounded-full bg-white cursor-pointer text-2xl"
          onClick={() => onChange(null)}
        >
          x
        </span>
      )}
      {!preview ? (
        <label className="flex flex-col justify-center items-center w-full relative z-[2] h-full text-center text-xl font-medium cursor-pointer">
          <input
            type="file"
            name="myImage"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const url = URL.createObjectURL(file);
                onChange({ url, file });
              }
            }}
          />

          <div className="grid place-items-center pt-8">
            <Gallery />
          </div>
          <p className=" mt-[30px] mb-2">Cover Image</p>
        </label>
      ) : (
        <div className="rounded-[20px] w-full h-full overflow-hidden bg-[#D9D9D9] ">
          <img src={preview} alt="" className="w-full h-full object-contain" />
        </div>
      )}
    </div>
  );
};

const Gallery = () => (
  <svg
    width="176"
    height="176"
    viewBox="0 0 176 176"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="176" height="176" rx="20" fill="#D9D9D9" />
    <path
      d="M122.375 53.625H53.625C51.9674 53.625 50.3777 54.2835 49.2056 55.4556C48.0335 56.6277 47.375 58.2174 47.375 59.875V116.125C47.375 117.783 48.0335 119.372 49.2056 120.544C50.3777 121.717 51.9674 122.375 53.625 122.375H122.375C124.033 122.375 125.622 121.717 126.794 120.544C127.967 119.372 128.625 117.783 128.625 116.125V59.875C128.625 58.2174 127.967 56.6277 126.794 55.4556C125.622 54.2835 124.033 53.625 122.375 53.625ZM122.375 59.875V100.012L112.191 89.832C111.611 89.2515 110.922 88.791 110.164 88.4768C109.405 88.1627 108.592 88.0009 107.771 88.0009C106.951 88.0009 106.138 88.1627 105.379 88.4768C104.621 88.791 103.932 89.2515 103.352 89.832L95.5391 97.6445L78.3516 80.457C77.1796 79.2858 75.5905 78.6279 73.9336 78.6279C72.2767 78.6279 70.6876 79.2858 69.5156 80.457L53.625 96.3477V59.875H122.375ZM53.625 105.188L73.9375 84.875L105.188 116.125H53.625V105.188ZM122.375 116.125H114.027L99.9648 102.062L107.777 94.25L122.375 108.852V116.125ZM94.25 77.0625C94.25 76.1354 94.5249 75.2291 95.04 74.4583C95.5551 73.6874 96.2871 73.0866 97.1437 72.7318C98.0002 72.377 98.9427 72.2842 99.852 72.4651C100.761 72.6459 101.597 73.0924 102.252 73.7479C102.908 74.4035 103.354 75.2387 103.535 76.148C103.716 77.0573 103.623 77.9998 103.268 78.8563C102.913 79.7129 102.313 80.4449 101.542 80.96C100.771 81.4751 99.8646 81.75 98.9375 81.75C97.6943 81.75 96.502 81.2561 95.6229 80.3771C94.7439 79.498 94.25 78.3057 94.25 77.0625Z"
      fill="#888783"
    />
  </svg>
);

export default UploadCoverMedia;
