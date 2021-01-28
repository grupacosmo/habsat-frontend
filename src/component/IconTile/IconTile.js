import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './IconTile.css';


const IconTile = (props) =>{
    return(
        <div className={'IconTile'}>
            <FontAwesomeIcon className="AwesomeIcon" icon={props.data.icon}/>
            <h1>{props.data.title}</h1>
            <h2>{props.data.description}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue facilisis augue, eu
                consequat magna rhoncus in. Etiam tincidunt eros vitae ultricies efficitur
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue facilisis augue, eu
                consequat magna rhoncus in. Etiam tincidunt eros vitae ultricies efficitur
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue facilisis augue, eu
                consequat magna rhoncus in. Etiam tincidunt eros vitae ultricies efficitur</p>
        </div>
    );
}

export default IconTile;