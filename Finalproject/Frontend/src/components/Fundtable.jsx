import React from 'react'
import { Table } from 'react-bootstrap'
const Fundtable = () => {
    const funddata = [
        { id: 1, name: "Equlity Growth Fund", price: "$670.00", risk: "High" },
        { id: 2, name: "Balanced Fund", price: "$67.00", risk: "Medium" },
        { id: 3, name: "Debt Fund", price: "$670.00", risk: "High" },
        { id: 4, name: "Stock Fund", price: "$670.00", risk: "High" },

    ];


    return <>
        <div className='mt-5'>
            <Table className='table table-dark'>

                <tr>
                    <th>ID</th>
                    <th>Fund Name</th>
                    <th>Price</th>
                    <th>Risk</th>
                </tr>
                {
                    funddata.map(x => (
                        <tr>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.price}</td>
                            <td>{x.risk}</td>
                        </tr>
                    ))
                }
            </Table>
        </div>
    </>
}

export default Fundtable