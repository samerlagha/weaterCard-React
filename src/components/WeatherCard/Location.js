import React from 'react';
import Styled from '@emotion/styled';

const Location = ({city, country}) => {

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
            <City>{city}</City>
            <Country>{country}</Country>
    </Container>
     );
}
 
export default Location;