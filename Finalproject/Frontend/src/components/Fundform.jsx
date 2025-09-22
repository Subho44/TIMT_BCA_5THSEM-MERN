import React, { useState } from 'react'
import axios from 'axios'

const Fundform = ({ onAdd }) => {
    const [form, setForm] = useState({ name: "", type: "", amount: "", risklevel: "medium" });
    const [file, setFile] = useState(null);

    const hc = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const hf = (e) => setFile(e.target.files[0] || null);
    const hs = async (e) => {
        e.preventDefault();
        try {
            const fd = new FormData()
            fd.append("name", form.name);
            fd.append("type", form.type);
            fd.append("amount", Number(form.amount));
            fd.append("risklevel", form.risklevel);

            if(file) fd.append("image",file);
            const { data } = await axios.post('http://localhost:5600/api/funds',fd, {
                headers:{"Content-Type":"multipart/form-data"}
            })
            onAdd(data)
            setForm({ name: "", type: "", amount: "", risklevel: "medium" });
            setFile(null);
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
            <div className='form-group'>
                <label>Image: </label>
                <input
                    type='file'
                    onChange={hf}
                    className='form-control'
                />
            </div>

            <div className='mt-2'>
                <button type='submit' className='btn btn-dark'>Add Fund</button>
            </div>
        </form>
    </>
}

export default Fundform