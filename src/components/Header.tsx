import * as React from 'react';
import { Helmet } from 'react-helmet';
import '../styles/sky.css';

interface IProps {
  isRaining: boolean
}

function Header(props: IProps) {
  let sky;
  let bgColour: string;
  if (props.isRaining) {
    sky = Raindrops();
    bgColour = 'rgb(44,62,80)';
  } else {
    sky = <Clouds />
    bgColour = '#87d37c';
  }
  return (
    <header className={props.isRaining ? 'rainy-sky' : 'sunny-sky'}>
      <Helmet bodyAttributes={{ style: 'background-color : ' + bgColour }} />
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
      <div className="cloud" />
    </div>

    <div className="x2">
      <div className="cloud" />
    </div>

    <div className="x3">
      <div className="cloud" />
    </div>

    <div className="x4">
      <div className="cloud" />
    </div>

    <div className="x5">
      <div className="cloud" />
    </div>
  </React.Fragment>
);

// Generate random number in range
function randRange(minNum: number, maxNum: number) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// Get raindrops
function Raindrops() {
  const raindrops = [];
  for (let i = 1; i < 200; i++) {
    const dropLeft = randRange(0, 2000);
    const dropTop = randRange(-1000, -200);
    const delay = randRange(0, 6);
    raindrops.push(<div className="drop" id={'drop' + i.toString()}
                        style={{ animationDelay: delay + 's', left: dropLeft, top: dropTop }} />);
  }
  return raindrops
}

export default Header;