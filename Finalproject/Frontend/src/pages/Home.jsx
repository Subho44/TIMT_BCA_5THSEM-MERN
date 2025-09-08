import React from 'react'
import Fundslider from '../components/Fundslider'

import { Container,Row,Col } from 'react-bootstrap'
import Fundcard from '../components/Fundcard';
const Home = () => {
    const funddata = [
        { id: 1, name: "Equlity Growth Fund", price: "$670.00", risk: "High" },
        { id: 2, name: "Balanced Fund", price: "$67.00", risk: "Medium" },
        { id: 3, name: "Debt Fund", price: "$670.00", risk: "High" },
        { id: 4, name: "Stock Fund", price: "$670.00", risk: "High" },

    ];

    return <>
        <Fundslider />
        <Container className='p-3'>
        <Row>
            {
                funddata.map(x=>(
                    <Col md={3} >
                     <Fundcard title={x.name} price={x.price} risk={x.risk} />
                    </Col>
                ))
            }
        </Row>
        </Container>
       
    </>
}

export default Home