import React from 'react';
import Styled from '@emotion/styled';

const Location = (props) => {

    const Container = Styled.div`
    text-align: center;
    `;
    const City = Styled.h1`
    font-family: 'merriweather',sans-serif;
    font-size: 1.6rem;
    
    `;
    const Country = Styled.h3`
    
    `;
    return ( 

        <Container>
        <City>Sydney</City>
        <Country>AU</Country>
    </Container>
     );
}
 
export default Location;