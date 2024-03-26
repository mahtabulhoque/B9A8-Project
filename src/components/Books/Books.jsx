import { useEffect, useState } from "react";
import SingleBook from "../SingleBook/SingleBook";

const Books = () => {

    const [books, setBooks]= useState([])
    console.log(books);

    useEffect(()=>{
        fetch('/bookData.json')
        .then(res => res.json())
        .then(data => setBooks(data));
    },[])

    return (
       <div>
         <div>
            <h2 className="text-center py-10 text-[#131313] font-bold text-[40px]">Books : {books.length}</h2>
        </div>

      
       <div className="grid grid-cols-3 gap-7">
            {
               books.map(book => <SingleBook key={book.id} book={book}></SingleBook> )
            }
        </div>
       </div>

    );
};

export default Books;