import profilePic from './assets/ken.jpg'
function Card(){
    return(
        <div className="card">
            <img className="card-image"src={profilePic} alt="Profile Pic"></img>
            <h2 className='card-title'>I'm jus Ken</h2>
            <p className='card-text'>I Drive</p>
        </div>
    );
}
export default Card