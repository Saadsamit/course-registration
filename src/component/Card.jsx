import PropTypes from 'prop-types';
import { BiDollar } from 'react-icons/bi';
import { BsBook } from 'react-icons/bs';
const Card = ({Course, handleClick}) => {
    const {img,title,description,price,credit} = Course
  return (
    <div className="card bg-base-100 shadow-xl p-4">
      <figure className='rounded-sm'>
        <img
          src={img}
          alt="course"
        />
      </figure>
      <div className="card-body p-0">
        <h2 className="card-title text-header text-lg font-semibold">{title}</h2>
        <p className='text-para text-sm font-normal'>{description}</p>
        <p className='flex items-center justify-between text-base font-normal text-para'><span className='text-header'><BiDollar/></span> <span>Price : {price}</span><span className='text-header'><BsBook/></span><span>Credit : {credit}hr</span></p>
        <div className="card-actions w-full">
          <button className="btn btn-primary bg-btn border-none text-white text-base font-semibold hover:bg-btn w-full" onClick={()=>handleClick(Course)}>Select</button>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
    Course : PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default Card;
