function Button(){

    const handleClick = (e) => e.target.textContent = "ohk"

    return (<button onClick={(e) => handleClick(e)}>Click Me</button>)
}
export default Button

// to change text on click
// function Button(){

//     const handleClick = (e) => e.target.textContent = "ohk"

//     return (<button onClick={(e) => handleClick(e)}>Click Me</button>)
// }
// export default Button

// condition in event parameters function
// function Button(){
//     let count=0;
//     const handleClick = (name) => {
//         if(count<3){
//             count++;
//             console.log(`${name} you clicked me ${count} times`)
//         }
//         else{
//             console.log(`${name} stop clicking me `)
//         }
//     }
//     return (<button onClick={() => handleClick("msk")}>Click Me</button>)
// }
// export default Button



// 1st example
// function Button(){

//     const handleClick = () => console.log("Damn")

//     const handleClick2 = (name) => console.log(`${name} stop clcking me`);

//     return (<button onClick={() => handleClick("msk")}>Click Me</button>)

// }
// export default Button