// import React, {useState, useEffect} from "react";

// function Width() {

//     const [width, setWidth] = useState (window.innerWidth);
//     const [height, setHeight]  = useState (window.innerHeight);

//     useEffect(() => 
//         window.addEventListener("resize", handlelesize),
//         console.log("EVENT LISTENER ADDED"))

        
//     } [] ;

//     function handleResize(){
//         setWidth (window.innerwidth); 
//         setHeight (window.innerHeight);
//     }

//     return(<>
//         <p>window Width: {width}px</p>
//         <p>Window Height: {height} px</p>
//     </>)

    

// export default Width;
import React, { useState, useEffect } from "react";

function Width() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect will only run once after the initial render

  return (
    <>
      <p>Window Width: {width}px</p>
      <p>Window Height: {height}px</p>
    </>
  );
}

export default Width;
