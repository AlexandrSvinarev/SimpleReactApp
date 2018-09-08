import * as React from 'react';

interface IProps {
    city: string,
    country: string,
    description: string,
    error: string,
    isRaining: boolean,
    temp: number,
    weatherCode : number,
    wind: number
}

interface IDisplayProps {
    city: string,
    country: string,
    description: string,
    isRaining: boolean,
    weatherMessage : string,
    tempMessage: string,
    windMessage: string
}

// LOGIC TO GET WEATHER MESSAGE
function WeatherMessage(code : number, description : string) : string {
    // weather code logic
    let message : string;
    if(code >= 200 && code < 300){
        // thunderstorm
        message = "Wowzers there's a storm outside."
    } else if (code >= 300 && code < 400){
        // drizzle
        message = "It's drizzling outside :("
    } else if (code >= 500 && code < 600){
        // rain
        message = "It's raining, it's pouring."
    }
    else if (code >= 600 && code < 700){
        // snow
        message = "Its snowing!"
    }
    else if (code >= 700 && code < 800) {
        // atmosphere conditions, get from the api
        message = description
    } else if (code === 800) {
        // clear
        message = "Clear skies and happy days."
    } else if (code > 800 && code <= 804) {
        // cloudy
        message = "It's cloudy (with a chance of meatballs)."
    }
    else {
        // error
        message = "Can't seem to find weather information :(";
    }
    return message;
}

// LOGIC TO GET TEMP MESSAGE
function TempMessage(temp : number) : string {
    let message : string;
    // <p>The temperature is {props.temp}&deg;C</p>
    if(temp > 18) {
        message = "It's pretty hot, so a t-shirt is fine."
    } else if(temp < 12) {
        message = "It's pretty chilly, so wear a jacket."
    } else {
        message = "It's not to cold outside but layer up."
    }
    return message;
}

// LOGIC TO GET WIND MESSAGE
function WindMessage(wind : number, isRaining : boolean) {
    // Wind is in m/s, convert to km/h
    const windMetric : number = wind * 3.6;
    let message : string;
    if(windMetric > 20) {
        if(isRaining) {
            message = "Hold onto that umbrella tight, it's windy"
        } else {
            message = "Watch out for the wind!"
        }
    } else {
        if(isRaining) {
            message = "At least it's not too windy."
        } else {
            if (windMetric < 5) {
                message = "It's calm outside there's no wind."
            } else if (windMetric < 10) {
                message = "There's a light breeze."
            } else {
                message = "There's a gentle breeze."
            }
        }
    }
    return message;
}

function Display(props : IDisplayProps) : any {
    return(
        <div className="results">
            <div className="left">
                {props.isRaining ? <img src="http://placehold.it/350x350" alt="umbrella" /> : <img src="http://placehold.it/350x350" alt="sun" />}
            </div>
            <div className="right">
                {props.isRaining ? <p className="big">Yes.</p> : <p className="big">No.</p>}
                <p>{props.weatherMessage}</p>
                <p>{props.tempMessage}</p>
                <p>{props.windMessage}</p>
                <p>Location used was {props.city && props.city}, {props.country && props.country}</p>
            </div>
        </div>
    );
}

class WeatherDisplay extends React.Component<IProps,{}> {
    public render() {
        let display;
        if (this.props.error) {
            // Form submitted with error
            display = <p className="errorMessage">{this.props.error}</p>
        } else if (this.props.city) {
            // Form has been submitted
            display = <Display 
                city           = {this.props.city}
                country        = {this.props.country}
                isRaining      = {this.props.isRaining}
                weatherMessage = {WeatherMessage(this.props.weatherCode, this.props.description)}
                tempMessage    = {TempMessage(this.props.temp)}
                windMessage    = {WindMessage(this.props.wind, this.props.isRaining)}
            />
        }
        return (
            <div>
                {display}
            </div>
        );
    }
}

export default WeatherDisplay;