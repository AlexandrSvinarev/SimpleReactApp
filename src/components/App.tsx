// tslint:disable:no-console
import * as React from 'react';
import '../styles/styles.css';
import Header from './Header';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';

const API_KEY = "a7ab45710f91f90bdb525f3825f7db7f";

interface IState {
  city: string,
  country: string,
  error: string,

  // Weather info:
  temp: number,
  condition: string,
  description: string,
  wind: number,
  rain: any // rain is either an empty object or contains the rainfall in last 3 hours
}

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      city: "",
      condition: "",
      country: "",
      description: "",
      error: "",
      rain: undefined,
      temp: 0,
      wind: 0
    }
  }

  public getWeather = async (event: any) => {
    event.preventDefault();

    // construct API call from the information we got
    const city: string = event.target.elements.city.value;
    const country: string = event.target.elements.country.value;
    if (city && country) {
      const API_CALL: string = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=metric`;

      // get weather data
      const call: any = await fetch(API_CALL);
      const data: any = await call.json();

      console.log(data);

      if (data.cod === "404") {
        this.setState({
          city: "", // lazy fix to clear city
          error: "Location not found",
        })
      } else {
        this.setState({
          city: data.city.name,
          condition: data.list[0].weather[0].main,
          country: data.city.country,
          description: data.list[0].weather[0].description,
          error: "",
          rain: data.list[0].rain,
          temp: data.list[0].main.temp,
          wind: data.list[0].wind.speed
        })
      }
    } else {
      this.setState({
        city: "", // lazy fix to clear city
        error: "Please enter a location"
      })
    }


  }

  public render() {
    return (
      <div className="wrapper">
        <Header />
        <Search getWeather={this.getWeather} />
        <WeatherDisplay
          city={this.state.city}
          country = {this.state.country}
          error = {this.state.error}
          temp = {this.state.temp}
          rain = {this.state.rain}
          condition = {this.state.condition}
          description = {this.state.description}
          wind = {this.state.wind}
        />
      </div>
    );
  }
}

export default App;
