import * as React from 'react';

interface IProps {
    city: string,
    country: string,
    error: string,

    // Weather info:
    temp: number,
    condition: string,
    description: string,
    wind: number
}

class WeatherDisplay extends React.Component<IProps,{}> {
    public render() {
        let display;
        if (this.props.error) {
            // Form submitted with error
            display = <p className="errorMessage">{this.props.error}</p>
        } else if (this.props.city) {
            // Form has been submitted
            display = 
                <div>
                    <p>{this.props.city}, {this.props.country} </p>
                    {this.props.condition && this.props.description && <p> {this.props.condition}, {this.props.description} </p>}
                    {this.props.temp && <p>Temp: {this.props.temp}</p>}
                    {this.props.wind && <p>Wind speed: {this.props.wind}</p>}
                </div>
        }
        return (
            <div>
                {display}
            </div>
        );
    }
}

export default WeatherDisplay;