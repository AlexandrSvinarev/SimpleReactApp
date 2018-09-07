import * as React from 'react';
import '../styles/styles.css';
import Header from './Header';
import Search from './Search';

const API_KEY = "a7ab45710f91f90bdb525f3825f7db7f";

interface IState {
  city: string,
  country: string,
  error: string,
  isRaining: boolean,
  submitted: boolean
}

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      city: "",
      country: "",
      error: "",
      isRaining: false,
      submitted: false
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

      if (data.cod === "404") {
        // Location not found
        this.setState({
          city: "", // lazy fix to clear city
          error: "Location not found",
        })
      } else {
        // API call works properly!
        // Use weather condition code to figure out if it is raining
        const code : number = data.list[0].weather[0].id
        this.setState({
          city: data.city.name,
          country: data.city.country,
          error: "",
          isRaining: code < 600 ? true : false
        })
      }
    } else {
      this.setState({
        // Form not submitted correctly
        city: "", // lazy fix to clear city
        error: "Please enter a location"
      })
    }
    this.setState({
      submitted: true
    })
  }

  public getWeatherComponent() : any {
    if(this.state.submitted){
      if (this.state.error) {
        return (<p>{this.state.error}</p>)
      } else {
        return (this.state.isRaining ? <p>It's raining</p> : <p>It's not raining</p>)
      }
    }
  }

  public render() {
    return (
      <div className="wrapper">
        <Header />
        <Search getWeather={this.getWeather} />
        {this.getWeatherComponent()}
      </div>
    );
  }
}

export default App;
