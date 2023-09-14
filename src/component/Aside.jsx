const Aside = () => {
    return (
        <div className="card bg-base-100 shadow-xl p-5">
           <h1 className="border-b pb-4 text-btn text-lg font-bold border-para">Credit Hour Remaining  hr</h1>
           <div className="py-4 border-b border-para">
            <h4 className="text-header text-xl font-bold pb-4">Course Name</h4>
           </div>
           <p className="py-4 text-[#1C1B1BCC] text-base font-medium border-b border-para">Total Credit Hour : </p>
           <p className="py-4 text-[#1C1B1BCC] text-base font-medium">Total Price :  USD</p>
        </div>
    );
};

export default Aside;