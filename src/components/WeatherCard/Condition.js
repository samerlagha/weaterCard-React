import React from 'react';

import Styled from '@emotion/styled';

const Condition = (props) => {
    const Temp = Styled.h1` font-family:'Fira Sans',sans-serif ;
    font-size: 2rem;
    font-weight: 200;`;

    const State = Styled.h3`
    font-family: 'merriweather',sans-serif;
    font-size: 1.2rem;
    `;
    return (
        <>
            <Temp>20 °C</Temp>
            <State>Clouds</State>
            </>
    )
}

export default Condition;