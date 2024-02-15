import "../styles/Hero.css"
import photogrid from '../assets/Group 77.png';
export default function Hero(){
    return(
        <section className="hero">
           <img className="hero--photo" src={photogrid} alt="pic"></img>
           <h1 className="hero--header">Online Experiences</h1>
           <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.
</p>
        </section>
    )
}