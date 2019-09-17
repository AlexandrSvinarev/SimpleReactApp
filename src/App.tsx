import * as React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import WeatherDisplay from './components/WeatherDisplay';
import './styles/styles.css';

const API_KEY = '1e1efc856851226e132faca6fa01cf81';

interface IState {
  city: string,
  country: string,
  error: string,
  description: string,
  isRaining: boolean,
  temp: number,
  weatherCode: number;
  wind: number,
}

class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      city: '',
      country: '',
      description: '',
      error: '',
      isRaining: true,
      temp: 0,
      weatherCode: 0,
      wind: 0,
    }
  }

  public getWeather = async (event: any) => {
    event.preventDefault();

    // construct API call from the information we got
    const city: string = event.target.elements.city.value;
    const country: string = event.target.elements.country.value;
    if (city && country) {
      const API_CALL: string = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${API_KEY}&units=metric`;
      // tslint:disable-next-line:no-console
      console.log(API_CALL)
      // get weather data
      const call: any = await fetch(API_CALL);
      const data: any = await call.json();

      if (data.cod === '404') {
        this.setState({
          city: '', // lazy fix to clear city
          error: 'Location not found',
        })
      } else {
        const code: number = data.list[0].weather[0].id
        this.setState({
          city: data.city.name,
          country: data.city.country,
          description: data.list[0].weather[0].description,
          error: '',
          isRaining: code < 600,
          temp: data.list[0].main.temp,
          weatherCode: code,
          wind: data.list[0].wind.speed,
        })
      }
    } else {
      this.setState({
        city: '',
        error: 'Please enter a location',
      })
    }
  }

  public render() {
    return (
      <div className={'wrapper ' + (this.state.isRaining ? 'rainy' : 'sunny')}>
        <Header isRaining={this.state.isRaining} />
        <div className="main">
          <Search getWeather={this.getWeather} />
          <WeatherDisplay {...this.state} />
        </div>
      </div>
    );
  }
}

export default App;