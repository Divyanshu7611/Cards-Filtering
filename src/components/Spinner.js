import React from "react";
import "./Spinner.css"

const Spinner = () =>{
     
     return(
        <div>
            <div className="custom-loader left-10 bottom-5"></div>
            <p className="text-3xl font-bold text-white leading-5 ">Loading...</p>
        </div>
     )


}
export default Spinner