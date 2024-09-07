import Pagination from "rc-pagination";

/**
 *
 * @param {object} props
 * @param {number} props.current - Current page
 * @param {number} props.totalPage - The number of items rendered in a page
 * @param {number} props.totalItem -The complete total number of item
 * @param {Function} props.onChange - A function that set the current page
 * @returns {JSX.Element}
 */
const Paginate = ({ current, totalPage, totalItem, onChange }) => {
  return (
    <div className="paginate">
      <Pagination
        onChange={onChange}
        current={current}
        total={totalItem}
        pageSize={totalPage || 1}
        nextIcon={() => <Nevt />}
        prevIcon={() => <Prev />}
        jumpNextIcon={() => <More />}
        showLessItems
        jumpPrevIcon={() => <More />}
      />
    </div>
  );
};

const Prev = () => (
  <svg
    width="13"
    height="20"
    viewBox="0 0 13 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.51 1.86961L10.73 0.0996094L0.839966 9.99961L10.74 19.8996L12.51 18.1296L4.37997 9.99961L12.51 1.86961Z"
      fill="#4C4C4C"
    />
  </svg>
);

const Nevt = () => (
  <svg
    width="13"
    height="20"
    viewBox="0 0 13 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.48999 18.1296L2.25999 19.8996L12.16 9.99961L2.25999 0.0996094L0.48999 1.86961L8.61999 9.99961L0.48999 18.1296Z"
      fill="#4C4C4C"
    />
  </svg>
);

const More = () => (
  <svg
    width="36"
    height="10"
    viewBox="0 0 36 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="31" cy="5" r="5" transform="rotate(90 31 5)" fill="#FEDDA4" />
    <circle cx="18" cy="5" r="5" transform="rotate(90 18 5)" fill="#FEDDA4" />
    <circle cx="5" cy="5" r="5" transform="rotate(90 5 5)" fill="#FEDDA4" />
  </svg>
);
export default Paginate;
