import * as React from "react";

interface IProps {
    getWeather : any;
}

export default class Search extends React.Component<IProps,{}> {
    public render() {
        return (
            <div className="question">
                <form onSubmit={this.props.getWeather}>
                    <label>
                        Do I need an umbrella in
                        <input
                            className="lineInput"
                            placeholder="Auckland"
                            name="city"
                        />
                    </label>
                    <div className="questionButton">
                        <p><button>Well, do I?</button></p>
                    </div>
                </form>
            </div>
        );
    }
}
