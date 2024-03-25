
const Banner = () => {
    return (
     <div className="bg-[#1313130D] rounded-3xl my-10 p-16">
           <div className="flex justify-between items-center space-y-10">
           <div className="p-16">
           <h2 className="text-[#131313] text-[56px]">Books to freshen up your bookshelf</h2>

{/* function button */}
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-[#23BE0A] text-[#FFFFFF] text-[20px] font-bold">View The List</button>


           </div>
           <div>
            <img src="/public/bannerbook.png" alt="" />
           </div>
        </div>
     </div>
    );
};

export default Banner;