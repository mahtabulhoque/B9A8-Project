const SingleBook = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src=""
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body">
            <div className="flex text-[#23BE0A] text-[16px] font-medium">
                <p>Young Adult</p>
                <p>Identity</p>
            </div>
          <h2 className="card-title text-[#131313] text-[24px] font-bold">The Catcher in the Rye</h2>
           <h2 className="text-[#131313CC] text-[16px] font-medium">By : Awlad Hossain</h2>
           <hr className="border-dashed"/>
          <div className="flex text-[#131313CC] text-[16px] font-medium">
            <p>Fiction</p>
            <div className="flex justify-center items-center gap-2">
            <p>5.00</p>
             <img src="/public/Frame(1).png" alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
