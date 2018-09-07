import * as React from 'react';
import '../styles/styles.css';

class Header extends React.Component {
    public render() {
        return (
            <div>
                <header className="header">
                    <h1 className="title">Weather App</h1>
                </header>
            </div>
    );
    }
}

export default Header;

