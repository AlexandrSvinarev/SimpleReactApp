// tslint:disable:no-console
import * as React from 'react';
import '../styles/styles.css';
import Header from './Header';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';

const API_KEY = "a7ab45710f91f90bdb525f3825f7db7f";

class App extends React.Component {

  public getWeather = async (event: Event) => {
    event.preventDefault();
    
    // construct API call from the information we got
    const city : string =  'Auckland'; // should get from form
    const API_CALL : string = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}`;
    console.log(API_CALL);
    // get weather data
    const call = await fetch(API_CALL);
    const data : JSON = await call.json();
    console.log(data);
  }

  public render() {
    return (
      <div>
        <Header />
        <Search getWeather={this.getWeather}/>
        <WeatherDisplay />
      </div>
    );
  }
}

export default App;
