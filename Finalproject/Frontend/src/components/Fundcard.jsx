import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Fundcard = ({ title, price, risk }) => {

    return <>
        <Card>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <b>PRICE:</b> {price} <br />
                    <b>Risk:</b> {risk}

                </Card.Text>
                <Button variant='primary'>Invest Now</Button>
            </Card.Body>
        </Card>

    </>
}

export default Fundcard