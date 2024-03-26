import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  const { bookId } = useParams();
  const bookIdInt = parseInt(bookId);
  const book = books.find((book) => book.bookId === bookIdInt);
  console.log(book);
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl p-5">
      <figure>
        <img
          src={book.image}
          alt="Album"
        />
      </figure>
      <div className="card-body space-y-2">
        <h2 className="card-title text-[#131313]
        text-[40px] font-bold">{book.bookName}</h2>
        <p className="text-[#131313CC] text-[20px] font-medium">By : {book.author}</p>
        <hr className="border-dashed"/>
        <p className="text-[#131313CC] text-[20px] font-medium">{book.category}</p>
        <hr className="border-dashed"/>
        <p className="text-[#131313B3] text-[16px]"><span className="text-[#131313] text-[16px] font-bold">Review : </span>{book.review}</p>
        <h3 className="text-[#23BE0A] text-[16px] font-medium"><span className="text-[#131313] text-[16px] font-bold">Tags </span>{book.tags}</h3>
        <hr className="border-dashed"/>
        <div className="space-y-2 text-[#131313B3] text-[16px]">
        <p>Number of Pages: <span className="text-[#131313] text-[16px] font-bold">{book.totalPages}</span></p>
        <p>Publisher: <span className="text-[#131313] text-[16px] font-bold">{book.publisher}</span></p>
        <p>Year of Publishing: <span className="text-[#131313] text-[16px] font-bold">{book.yearOfPublishing}</span></p>
        <p>Rating: <span className="text-[#131313] text-[16px] font-bold">{book.rating}</span></p>
        </div>





        <div className="card-actions">
          <button className="btn text-[#131313] font-semibold text-[18px]">Read</button>
          <button className="btn bg-[#50B1C9] text-[#FFF] font-semibold text-[18px]">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
