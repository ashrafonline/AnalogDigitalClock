import React, { Component } from 'react';
import SingleClock from './SingleClock';

export default class GroupClocks extends Component{
    
    displayData=[
        [
            [{hour:6,minutes:15},{hour:6,minutes:15},{hour:6,minutes:15},{hour:6,minutes:15},{hour:6,minutes:15},{hour:6,minutes:15},{hour:3,minutes:30},{hour:6,minutes:15},{hour:6,minutes:15},{hour:6,minutes:15}],
            [{hour:9,minutes:15},{hour:9,minutes:15},{hour:9,minutes:15},{hour:9,minutes:15},{hour:6,minutes:45},{hour:9,minutes:15},{hour:9,minutes:15},{hour:9,minutes:15},{hour:9,minutes:15},{hour:9,minutes:15}],
            [{hour:9,minutes:15},{hour:6,minutes:45},{hour:9,minutes:15},{hour:9,minutes:15},{hour:6,minutes:15},{hour:9,minutes:15},{hour:9,minutes:15},{hour:9,minutes:15},{hour:9,minutes:15},{hour:9,minutes:15}],
            [{hour:6,minutes:45},{hour:8,minutes:40},{hour:6,minutes:45},{hour:6,minutes:45},{hour:6,minutes:45},{hour:9,minutes:30},{hour:9,minutes:30},{hour:6,minutes:45},{hour:6,minutes:45},{hour:6,minutes:45}]
        ],
        [
            [{hour:6,minutes:0},{hour:12,minutes:15},{hour:3,minutes:0},{hour:3,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0}],
            [{hour:6,minutes:15},{hour:6,minutes:45},{hour:9,minutes:15},{hour:9,minutes:15},{hour:6,minutes:0},{hour:6,minutes:15},{hour:6,minutes:15},{hour:6,minutes:15},{hour:6,minutes:15},{hour:6,minutes:15}],
            [{hour:6,minutes:45},{hour:6,minutes:0},{hour:6,minutes:45},{hour:6,minutes:45},{hour:6,minutes:0},{hour:9,minutes:15},{hour:9,minutes:15},{hour:6,minutes:45},{hour:6,minutes:45},{hour:6,minutes:45}],
            [{hour:6,minutes:0},{hour:8,minutes:40},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:9,minutes:0},{hour:9,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0}]
        ],
        [
            [{hour:6,minutes:0},{hour:8,minutes:40},{hour:6,minutes:15},{hour:6,minutes:15},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:3,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0}],
            [{hour:6,minutes:0},{hour:6,minutes:0},{hour:9,minutes:15},{hour:9,minutes:15},{hour:3,minutes:0},{hour:3,minutes:0},{hour:3,minutes:0},{hour:9,minutes:0},{hour:3,minutes:0},{hour:3,minutes:0}],
            [{hour:6,minutes:0},{hour:6,minutes:0},{hour:9,minutes:0},{hour:9,minutes:0},{hour:9,minutes:0},{hour:9,minutes:15},{hour:9,minutes:15},{hour:6,minutes:0},{hour:9,minutes:0},{hour:9,minutes:0}],
            [{hour:6,minutes:0},{hour:8,minutes:40},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:9,minutes:30},{hour:6,minutes:45},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0}]
        ],
        [
            [{hour:6,minutes:0},{hour:8,minutes:40},{hour:6,minutes:0},{hour:3,minutes:0},{hour:3,minutes:0},{hour:3,minutes:0},{hour:6,minutes:0},{hour:8,minutes:40},{hour:6,minutes:0},{hour:3,minutes:0}],
            [{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:15},{hour:9,minutes:15},{hour:9,minutes:15},{hour:9,minutes:15},{hour:6,minutes:15},{hour:8,minutes:40},{hour:6,minutes:15},{hour:9,minutes:15}],
            [{hour:6,minutes:0},{hour:6,minutes:0},{hour:9,minutes:15},{hour:6,minutes:45},{hour:6,minutes:45},{hour:6,minutes:45},{hour:6,minutes:45},{hour:6,minutes:0},{hour:6,minutes:45},{hour:6,minutes:45}],
            [{hour:6,minutes:0},{hour:8,minutes:40},{hour:9,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0}]
        ],
        [
            [{hour:6,minutes:0},{hour:6,minutes:15},{hour:6,minutes:0},{hour:6,minutes:15},{hour:8,minutes:40},{hour:6,minutes:15},{hour:6,minutes:0},{hour:8,minutes:40},{hour:6,minutes:0},{hour:8,minutes:40}],
            [{hour:3,minutes:0},{hour:9,minutes:0},{hour:3,minutes:0},{hour:9,minutes:15},{hour:8,minutes:40},{hour:9,minutes:15},{hour:3,minutes:0},{hour:8,minutes:40},{hour:3,minutes:0},{hour:8,minutes:40}],
            [{hour:9,minutes:0},{hour:3,minutes:0},{hour:9,minutes:15},{hour:9,minutes:0},{hour:6,minutes:0},{hour:9,minutes:0},{hour:9,minutes:0},{hour:6,minutes:0},{hour:9,minutes:0},{hour:6,minutes:0}],
            [{hour:6,minutes:0},{hour:6,minutes:45},{hour:9,minutes:30},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0},{hour:6,minutes:0}]
        ],   
        [
            [{hour:3,minutes:0},{hour:3,minutes:0},{hour:3,minutes:0},{hour:3,minutes:0},{hour:8,minutes:40},{hour:3,minutes:0},{hour:3,minutes:0},{hour:8,minutes:40},{hour:3,minutes:0},{hour:8,minutes:40}],
            [{hour:9,minutes:15},{hour:9,minutes:15},{hour:9,minutes:15},{hour:9,minutes:15},{hour:8,minutes:40},{hour:9,minutes:15},{hour:9,minutes:15},{hour:8,minutes:40},{hour:9,minutes:15},{hour:8,minutes:40}],
            [{hour:9,minutes:15},{hour:9,minutes:15},{hour:9,minutes:15},{hour:9,minutes:15},{hour:3,minutes:0},{hour:9,minutes:15},{hour:9,minutes:15},{hour:3,minutes:0},{hour:9,minutes:15},{hour:3,minutes:0}],
            [{hour:9,minutes:0},{hour:9,minutes:0},{hour:9,minutes:0},{hour:9,minutes:0},{hour:9,minutes:0},{hour:9,minutes:0},{hour:9,minutes:0},{hour:9,minutes:0},{hour:9,minutes:0},{hour:9,minutes:0}]
        ],     
    ]

    render (){
        const hCount=4;
        const vCount=6;
        let width=this.props.width;
        let singleSize=width/hCount;
        let clocks = []
        for(let i=0;i<vCount;i++){
            
            for(let j=0;j<hCount;j++){
                
                let hour = this.displayData[i][j][this.props.number].hour;
                let minutes = this.displayData[i][j][this.props.number].minutes;
                clocks.push(<SingleClock key={i*10+j} size={singleSize} hour={hour} minutes={minutes} />)
            }
        }
        return (
            <div style={{width:width}} className='group'>
                {clocks}
            </div>
        )
    }
}