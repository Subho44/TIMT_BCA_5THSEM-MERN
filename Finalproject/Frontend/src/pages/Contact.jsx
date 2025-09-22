import React,{useState,useEffect} from 'react'
import Fundform from '../components/Fundform'
import Fundlist from '../components/Fundlist'
import axios from 'axios';

const Contact = () => {
  const [funds,setFunds] = useState([]);
  useEffect(
    ()=>{
      const load = async ()=>{
        try {
          const {data} = await axios.get('http://localhost:5600/api/funds');
          setFunds(data);
        } catch(err) {
          console.error(err);
        }
      }
      load()
    },[]);
  return <>
    <Fundform/>
    <Fundlist funds={funds} setFunds={setFunds}/>
  </>
}

export default Contact