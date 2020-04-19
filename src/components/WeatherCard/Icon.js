import React from 'react';
import Styled from '@emotion/styled';
const Icon = (props) => {

    const Icon = Styled.img`
    width: 40%;
    `;
    return ( 
        

        <Icon src="./img/partly-cloudy-day--v1.png" alt="weather icon"/>
     );
}
 
export default Icon;