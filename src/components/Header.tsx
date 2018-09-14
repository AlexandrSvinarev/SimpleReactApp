import * as React from 'react';
import '../styles/clouds.css';

const Header = () => (
    <React.Fragment>
        <header className="header-sky">
            <div className="x1">
                <div className="cloud"/>
            </div>
            
            <div className="x2">
                <div className="cloud"/>
            </div>

            <div className="x3">
                <div className="cloud"/>
            </div>

            <div className="x4">
                <div className="cloud"/>
            </div>

            <div className="x5">
                <div className="cloud"/>
            </div>

            <h1 className="title hidden">Weather App</h1>
        </header>
    </React.Fragment>
);

export default Header;