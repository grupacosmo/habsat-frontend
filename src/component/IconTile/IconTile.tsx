import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

import './IconTile.css';
import { ITileDataItem } from 'container/IconsSection/IconsSection';
import { FC } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
    data: ITileDataItem
}

const IconTile: FC<Props> = (props) =>{
    return(
        <div className={'IconTile'}>
            <FontAwesomeIcon className="AwesomeIcon" icon={props.data.icon as IconProp}/>
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