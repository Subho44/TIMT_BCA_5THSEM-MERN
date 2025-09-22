import React, { useState } from 'react'
import axios from 'axios'

const Fundform = ({ onAdd }) => {
    const [form, setForm] = useState({ name: "", type: "", amount: "", risklevel: "medium" });

    const hc = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const hs = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:5600/api/funds', { ...form, amount: Number(form.amount) })
            onAdd(data)
            setForm({ name: "", type: "", amount: "", risklevel: "medium" })
        } catch (err) {
            console.error(err);
            
        }
    }
    return <>
        <form onSubmit={hs}>
            <div className='form-group'>
                <label>Name: </label>
                <input
                    name='name'
                    value={form.name}
                    onChange={hc}
                    placeholder='Enter fund name'
                    className='form-control'
                />
            </div>
            <div className='form-group'>
                <label>Type: </label>
                <input
                    name='type'
                    value={form.type}
                    onChange={hc}
                    placeholder='Enter fund type'
                    className='form-control'
                />
            </div>
            <div className='form-group'>
                <label>Amount: </label>
                <input
                    name='amount'
                    value={form.amount}
                    onChange={hc}
                    placeholder='Enter fund amount'
                    className='form-control'
                />
            </div>
            <div className='form-group'>
                <label>Risklevel: </label>
                <select name='risklevel' value={form.risklevel} onChange={hc} className='form-select'>
                    <option>low</option>
                    <option>medium</option>
                    <option>high</option>
                </select>
            </div>

         <div className='mt-2'>
          <button className='btn btn-dark'>Add Fund</button>
         </div>
        </form>
    </>
}

export default Fundform