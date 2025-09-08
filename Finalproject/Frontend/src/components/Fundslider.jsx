import React from 'react'
import { Carousel } from 'react-bootstrap';
const Fundslider = () => {
     const funddata = [
        { id: 1, name: "Equlity Growth Fund", desc:"high growth rqulity power" },
        { id: 2, name: "Balanced Fund", desc:"high growth rqulity power"  },
        { id: 3, name: "Debt Fund", desc:"high growth rqulity power"  },
        { id: 4, name: "Stock Fund", desc:"high growth rqulity power"  },

    ];

  return <>
    <Carousel>
        {funddata.map(x=>(
            <Carousel.Item>
                <div className='d-flex flex-column justify-content-center align-items-center' style={{height:"300px" , background:"#7ca580ff"}}>
                    <h3>{x.name}</h3>
                    <p>{x.desc}</p>
                </div>
            </Carousel.Item>
        ))}
    </Carousel>
  </>
}

export default Fundslider