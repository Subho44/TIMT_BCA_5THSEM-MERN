import React from 'react'
import axios from 'axios'

const Fundlist = ({ funds, setFunds }) => {
    const hd = async (id) => {
        if (!confirm('Delete this fund?')) return
        try {
            await axios.delete(`http://localhost:5600/api/funds/${id}`)
            setFunds((prev) => prev.filter((x) => x._id !== id))
        } catch (err) {
            console.error(err);
        }
    }
    const hedit = async (fund) => {
        const newname = prompt('New name', fund.name)
        if (newname === null) return
        const newamount = prompt('New amount', fund.amount)
        if (newamount === null) return

        const updated = { ...fund, name: newname, amount: Number(newamount) }
        try {
            const { data } = await axios.put(`http://localhost:5600/api/funds/${fund._id}`,updated);
            setFunds((prev)=>prev.map((p)=>(p._id === fund._id ? data : p)));
        } catch (err) {
            console.error(err);

        }
    }
    return <>
     <ul className='list-group'>
     {funds.map(x=>(
        <li className='list-group-item d-flex justify-content-between align-items-center '>
            <div>
             <h1>{x.name}</h1>
             <p>Type: {x.type} </p>
             <p>Amount: ${x.amount} </p>
             <p>Risk: {x.risklevel} </p>
             <div>
             {x.image && <img src={`http://localhost:5600/${x.image}`} alt="img" width={70} height={70}/>
}
             </div>
            </div>
            <div>
                <button onClick={()=>hedit(x)} className='btn btn-info'>Edit</button>
                <button onClick={()=>hd(x._id)} className='btn btn-danger'>Delete</button>
            </div>
        </li>
     ))}

     </ul>
    </>
}

export default Fundlist