import '../styles/Navbar.css';
import airbnb from '../assets/airbnb 1.png';
export default function Navbar(){
    return(
        <div className="nav">
          <img src={airbnb} alt='logo'/>
        </div>
    )
}