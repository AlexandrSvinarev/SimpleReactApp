import * as React from 'react';
import '../styles/sky.css';
interface IProps {
    isRaining : boolean
}

function Header(props:IProps) {
    let sky;
    if(props.isRaining){
        sky = Raindrops();
    } else {
        sky = <Clouds />
    }
    return(
        <header className={props.isRaining ? "rainy-sky" : "sunny-sky"}>
            <div className="sky">
                {sky}
            </div>
            <h1 className="title hidden">Weather App</h1>
        </header>
    );
}

const Clouds = () => (
    <React.Fragment>
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
</React.Fragment>
);

// Generate random number in range
function randRange( minNum : number, maxNum : number) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// Get raindrops
function Raindrops() {
    const raindrops = [];
	for(let i = 1; i < 750; i++) {
        const dropLeft = randRange(0,2000);
        const dropTop = randRange(-2000,1000);
        raindrops.push(<div className="drop" id={"drop" + i.toString()} style={{left: dropLeft, top: dropTop}}/>);
    } 
    return raindrops
}
export default Header;