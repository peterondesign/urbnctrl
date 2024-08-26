
const Pagination = ({ totalPosts, postsPerPage, seteCurrentPage}) => {
    let pages = [];

    for(let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i);
    }
  return (
    <div>
      {pages.map((page, index) => {
        return <button key={index} onClick={() => seteCurrentPage(page)}>{page}</button>
      })}
    </div>
  )
}

export default Pagination