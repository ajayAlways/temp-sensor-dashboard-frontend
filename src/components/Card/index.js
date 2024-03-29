import React from 'react';

// styles
import './Card.css'

// utils
import { changeToIST } from '../../utils/changeToIST';

export const Card = ({props}) => {
    const sensorName = props.sensorNo;
    const sensorReading = props.temp;
    const units = props.units;
    const timeStamp = props.timeStamp;

    return (
        <div className='card'>
            <h3>{changeToIST(timeStamp)}</h3>
            <h1>{sensorReading} {units}</h1>
            <h3>Sensor-{sensorName}</h3>
        </div>
    )
}