import React from "react";
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
  let Course = props.Course;
  let LikedCourses = props.LikedCourses;
  let setLiked = props.setLiked;

  function clickHandler() {
    if (LikedCourses.includes(Course.id)) {
      setLiked((prev) => prev.filter((cid) => (cid !== Course.id)));
      toast.warning("Removed Course");
    } else {
      if (LikedCourses.length === 0) {
        setLiked([Course.id]);
      } else {
        setLiked((prev) => [...prev, Course.id]);
      }
      toast.success("Liked Course");
    }
  }

  return (
    <div className='w-[300px] bg-gray-800 bg-opacity-80 rounded-md overflow-hidden shadow-md transition duration-300 transform hover:scale-105'>
      <div className='relative'>
        <img src={Course.image.url} alt={Course.title} />
      </div>
      <div className='w-[40px] h-[40px] rounded-full bg-gray-700 right-2 top-36 grid place-items-center absolute'>
        <button onClick={clickHandler}>
          {LikedCourses.includes(Course.id) ? (
            <FcLike fontSize="1.75rem" color="#e74c3c" />
          ) : (
            <FcLikePlaceholder fontSize="1.75rem" color="#e74c3c" />
          )}
        </button>
      </div>
      <div className='p-4'>
        <p className="text-white font-bold text-xl leading-6">{Course.title}</p>
        <p className='mt-2 text-gray-300'>
          {Course.description.length > 100
            ? Course.description.substr(0, 100) + " ..."
            : Course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;

