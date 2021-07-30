import './Card.css';

function Card(props){
    console.log(props);
    return(
<>

<div className="card">
<img src={props.imglink} height="200" width="400"/>
<a href={props.link}><button id="infobtn">{props.name}</button></a>
    </div>
</>
    );
}

export default Card;