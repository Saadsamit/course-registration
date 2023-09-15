import PropTypes from 'prop-types';
const Aside = ({course, Hour, remainingCredit, totalPrice}) => {
    return (
        <div className="card bg-base-100 shadow-xl p-5">
           <h1 className="border-b pb-4 text-btn text-lg font-bold border-para">Credit Hour Remaining {remainingCredit} hr</h1>
           <div className="py-4 border-b border-para">
            <h4 className="text-header text-xl font-bold pb-4">Course Name</h4>
            {
                course.map((obj,idx) =>(<p key={obj.id} className='text-para text-base font-normal'>{idx + 1} {obj.title}</p>))
            }
           </div>
           <p className="py-4 text-[#1C1B1BCC] text-base font-semibold border-b border-para">Total Credit Hour : {Hour}</p>
           <p className="py-4 text-[#1C1B1BCC] text-base font-semibold">Total Price : {totalPrice} USD</p>
        </div>
    );
};
Aside.propTypes = {
    course: PropTypes.array.isRequired, 
    Hour: PropTypes.number.isRequired,
    remainingCredit: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired
}
export default Aside;