
import { useEffect, useState } from "react";

const Books = () => {

    const [books, setBooks]= useState([])

    useEffect(()=>{
        fetch('/public/bookData.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])

    return (
       <div>
         <div>
            <h2 className="text-center py-10 text-[#131313] font-bold text-[40px]">Books : {books.length}</h2>
        </div>

        <div>
            {
               
            }
        </div>
       </div>
    );
};

export default Books;