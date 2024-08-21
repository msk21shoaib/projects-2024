import React, {useContext} from "react";
import { UserContext } from "./ComponentA.jsx";

function ComponentD() {

    const user = useContext(UserContext);

    return(
        <div className="box" >
            <h1>ComponentD</h1>
            <h2>{`Byee ${user}`}</h2>
        </div>
    )
}

export default ComponentD

/* Props drilling => passing down of props 
    we use useContext hook for eAse
*/