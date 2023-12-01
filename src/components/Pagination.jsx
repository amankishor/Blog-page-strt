import React from 'react'


const Pagination = ({onPageChage,currentPage,blogs,pagesize}) => {
    const totalpages = Math.ceil(blogs.length / pagesize);
    // console.log(totalpages)
    const renderPaginationLinks = () =>{
        return Array.from({length:totalpages},(_, i) =>i +1).map((pageNumber) =>(
            <li className={pageNumber===currentPage ? "activepagination":""}  key={pageNumber}>
                <a href="#" onClick={()=>onPageChage(pageNumber)}>{pageNumber}</a>
            </li>
        ))
    }
  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
        <li>
            <button onClick={() => onPageChage(currentPage - 1)} disabled={currentPage===1}>previous</button>
        </li>
        <div className='flex gap-1'>{renderPaginationLinks()}</div>
        <li><button  onClick={() => onPageChage(currentPage+1)} disabled={currentPage===totalpages}>Next</button></li>
    </ul>
  )
}

export default Pagination
