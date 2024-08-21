function Pic(){

    const imageUrl = './src/assets/ken.jpg';
    const handleClick = (e) => e.target.style.display = "none";

    return (<img onClick={(e) => handleClick(e)} src={imageUrl} ></img>)
}
export default Pic