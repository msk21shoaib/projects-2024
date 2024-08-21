import React, {useState , useEffect} from "react";

function MyComponent6() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect (() => {
        document.title = `Count : ${count} ${color}`;
        return () =>{
            //some cleanup code
        }
    },[count,color]);

    function addCount(){
        setCount(c=> c+1);
    }
    function subtractCount(){
        setCount(c=> c-1);
    }
    function colorChange(){
        if(color==="red")
            setColor(c=>  "green" );
        else
            setColor(c=>  "red" );
    }

    return (<>
        <p>Count: {count}</p>
        <button onClick={addCount}> Add</button>
        <button onClick={subtractCount}> Subtract</button>
        <button onClick={colorChange}> Color</button>
    </>);

    }

export default MyComponent6