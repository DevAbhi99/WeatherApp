
import './App.css';
import Heading from './Components/Heading.jsx';
import Card from './Components/Card.jsx';
import Api from './Components/Api.jsx';

function App() {
  return (
    <>
    <div className="weather-app">
    <Heading/>
   
<div className="content-main">   
<div className="card-content">
  <h1>Weather Information</h1>
<Card imglink="https://i.pinimg.com/originals/56/8e/0f/568e0f11f82998a71458f00a75d409d0.jpg" link="https://in.pinterest.com/pin/415457134375577898/" name="Important weather signs"/>
<Card imglink="https://i.ytimg.com/vi/_xa8JqWaEYQ/hqdefault.jpg" link="https://weather.com/en-IN/weather/today/l/28.54,77.39?par=google" name="Check for daily weather reports"/>
<Card imglink="https://media.rff.org/images/ND_Cover.2e16d0ba.fill-620x800.png" link="https://ourworldindata.org/natural-disasters" name="Natural calamity reports"/>

</div>
<div className="api">
  <Api/>
  </div>
</div>

  
      

    </div>
    </>
  );
}

export default App;
