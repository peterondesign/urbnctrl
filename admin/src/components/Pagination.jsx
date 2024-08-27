
// const Pagination = ({ totalPosts, postsPerPage, seteCurrentPage}) => {
//     let pages = [];

//     for(let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
//         pages.push(i);
//     }
//   return (
//     <div>
//       {pages.map((page, index) => {
//         return <button key={index} onClick={() => seteCurrentPage(page)}>{page}</button>
//       })}
//     </div>
//   )
// }

// export default Pagination


const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const renderPagination = () => {
    if (totalPages <= 7) {
      // Display all pages if 7 or fewer
      return pages.map((page, index) => (
        <button key={index} onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ));
    } else {
      // Show first 6 pages, then ..., then the last page
      return (
        <>
          {pages.slice(0, 6).map((page, index) => (
            <button key={index} onClick={() => setCurrentPage(page)}>
              {page}
            </button>
          ))}
          <span>...</span>
          <button onClick={() => setCurrentPage(totalPages)}>
            {totalPages}
          </button>
        </>
      );
    }
  };

  return <div>{renderPagination()}</div>;
};

export default Pagination;
