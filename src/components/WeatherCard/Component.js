import React from 'react';

import Styled from '@emotion/styled';
import Location from './Location';

import Icon from './Icon';
import Condition from './Condition';


const WeatherCard = (props) => {
  let hightColor = 0;
  let lwoColor = 0;
  let bg = null;
  if (props.temp > 12) {
    
   hightColor = (1 - (props.temp - 12) / 28) * 255;
    lwoColor = hightColor - 150;
    bg = `linear-gradient(to top,rgb(255,${hightColor},0),rgb(255,${lwoColor},0))`;
    
  } else if (+props.temp <= 12) {
       hightColor = (1 - (props.temp +20) / 32) * 255;
    lwoColor = hightColor - 150;
    bg = `linear-gradient(to top,rgb(0,${hightColor},255),rgb(0,${lwoColor},255))`;
  }
  const Card = Styled.div`
margin: 0 auto;
  background: ${bg};
  width: 200px;
  height: 240px;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
`;
    return ( 
        <Card>
           <Location />
            <Icon />
            <Condition />
       </Card>

     );
}
 
export default WeatherCard;