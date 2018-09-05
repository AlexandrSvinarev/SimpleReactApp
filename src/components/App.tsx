import * as React from 'react';
import '../styles/styles.css';
import Header from './Header';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Search />
        <WeatherDisplay />
      </div>
    );
  }
}

export default App;
