
function ComponentD(props) {
    return(
        <div className="box" >
            <h1>ComponentD</h1>
            <h2>{`Byee ${props.user}`}</h2>
        </div>
    )
}

export default ComponentD

/* Props drilling => passing down of props 
    we use useContext hook for eAse
*/