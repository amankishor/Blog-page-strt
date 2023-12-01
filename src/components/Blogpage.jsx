import React, { useEffect, useState } from 'react'
import Blogcard from './Blogcard';
import Pagination from './Pagination';
import CategorSelection from './CategorSelection';
import Sidebar from './Sidebar';

const Blogpage = () => {

    const[blogs,SetBlogs] =useState([]);

    const[currentPage, setCurrentPage] =useState(1);
    const pagesize = 12//no .of blocks
    const [selectedCategory ,setSelectedCategory] =useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(()=> {
        async function fetchBlogs(){
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pagesize}`;

            if(selectedCategory){
                url +=`&category=${selectedCategory}`;
            }

            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            SetBlogs(data);

        }
        fetchBlogs();

    },[currentPage,pagesize,selectedCategory])

//pagechanging btn
    const handlepageChange= (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleCategoryChange = (category) =>{
        setSelectedCategory(category);
        setCurrentPage(1);
        setActiveCategory(category);

    }

  return (
    <div>
        <div>
            <CategorSelection onSelectcatogery ={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
        </div>
        <div className='flex flex-col lg:flex-row gap-10'>
            <Blogcard blogs ={blogs} currentPage={currentPage}
            selectedCategory={selectedCategory} pagesize={pagesize}/>
{/* sidebar */}
            <div>
                <Sidebar/>
            </div>
        </div>
        <div>
            <Pagination onPageChage={handlepageChange} currentPage={currentPage} blogs={blogs} pagesize={pagesize}/>
        </div>
    </div>
  )
}

export default Blogpage
