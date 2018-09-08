import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import * as React from "react";

interface IProps {
    getWeather : any;
}

const Search = (props : IProps) => (
    <div className="question">
        <form onSubmit={props.getWeather}>
            <label>
                Do I need an umbrella in
                <Input
                    className="lineInput"
                    placeholder="Auckland"
                    name="city"
                />,
                <Input
                    className="lineInput"
                    placeholder="New Zealand"
                    name="country"
                />?
            </label>
            <div className="questionButton">
                <Button type='submit' variant='outlined' >Well, do I?</Button>
            </div>
        </form>
    </div>
);

export default Search