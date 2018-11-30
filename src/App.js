import React, { Component } from 'react';
import GroupClocks from './GroupClocks';
import './App.css';

class App extends Component {
  constructor(props){
    super()
    this.timer=this.timer.bind(this)
  }
  state={
    numbers:[0,0,0,0,0,0]
  }
  
  componentDidMount() {
    setInterval(this.timer, 1000);
  }

  timer(){
    var d = new Date();
    var h = d.getHours().toString();
    var m = d.getMinutes().toString();
    var s = d.getSeconds().toString();
    if(h<10) h="0"+h;
    if(m<10) m="0"+m;
    if(s<10) s="0"+s;

    this.setState({
      numbers:[h.substring(0,1),h.substring(1,2),m.substring(0,1),m.substring(1,2),s.substring(0,1),s.substring(1,2)]
    })

  }

  render() {
    const width=document.documentElement.clientHeight/3*8/6 - 20;
    let groups=[];
    for(let i=0;i<6;i++){
      groups.push(<GroupClocks key={i} width={width/2} number={this.state.numbers[i]} />)
    }
    return (
      <div>
        <div style={{width:width,margin:'10px auto 10px'}}>
          {groups}
        </div>
        <div style={{clear:'both'}} />
        <div className="credits">
          AnalogDigitalClock - A participation for Stackoverflow's <a href="https://meta.stackexchange.com/questions/318910/time-for-some-more-swag" target="_blank">Time for some more swag!</a>
        </div>
      </div>
    );
  }
}

export default App;
