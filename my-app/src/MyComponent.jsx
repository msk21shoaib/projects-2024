import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("GUEST");
    const [age, setAge] = useState(0);
    const [isEmployed, setisEmployed] = useState(true);



    const updateName = () => {
        setName("msk");
    }

    const incrementAge = ()=>{
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setisEmployed(!isEmployed);
    }


    return( <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increment Age</button>
                
                <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmployedStatus}>Toggle status</button>

            </div>);

}

export default MyComponent