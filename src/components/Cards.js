import React, { useState } from "react";
import Card from "./Card";


const Cards = (props) =>{
    let courses = props.courses;
    let Category = props.Category;
    const [LikedCourses,setLiked] = useState([]);

    function getCourses() {
        if(Category === "All"){
            
            let CourseArray = [];
            Object.values(courses).forEach(array => {
                array.forEach(CourseData =>{
                    CourseArray.push(CourseData);
                })
            })
            return CourseArray;
        }
        else{
            return courses[Category] || [];
        }
    }
 

    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {

            getCourses().map((Course) => (
                 <Card key={Course.id} Course = {Course}
                 LikedCourses = {LikedCourses}
                 setLiked = {setLiked}/>
            )

            )            
            };
        </div>
    );
}

export default Cards;