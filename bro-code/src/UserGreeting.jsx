function UserGreeting(props){

    const welcomeMessage = <h2 className="welcome-message" >Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt" >Please log in to continue {props.username}</h2>

    return(props.isLoggedIn ? welcomeMessage : loginPrompt);
}
export default UserGreeting
// UserGreeting.propTypes = {
//     username: PropTypes.string,
//     isLoggedIn: PropTypes.bool,
// }

UserGreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
}
/*
1st way
if(props.isLoggedIn){
        return <h2>Welcome {props.username}</h2>
    }
    else{
        return <h2>Please log in</h2>
    }
2nd way
return(props.isLoggedIn ? <h2 className="welcome-message" >Welcome {props.username}</h2>:<h2 className="login-prompt" >Please log in to continue {props.username}</h2>);
*/ 