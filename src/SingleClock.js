import React, { Component } from 'react';
import { keyframes } from 'styled-components';


export default class SingleClock extends Component{
    
    render (){
        const clockSize={
            width:this.props.size,
            height:this.props.size,
        }

        const minuteKeyFrame=keyframes`
            to { transform: rotate(${this.props.minutes * 6}deg); }
        `
        const hourKeyFrame=keyframes`
            to { transform: rotate(${this.props.hour * 30}deg); }
        `
        const minuteStyle = {
            animation:`${minuteKeyFrame} 0.5s`,
        }

        const hourStyle = {
            animation:`${hourKeyFrame} 0.5s`,
        }


        return (
            <div className="clock" style={clockSize}>
                <div className="hour" style={hourStyle}></div>
                <div className="minute" style={minuteStyle}></div>
            </div>
        )
    }
        
}