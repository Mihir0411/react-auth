import React, { useEffect, useState } from 'react';
import Cars from '../Cars/Cars';
import FakeData from '../../FakData/FakData.json'

const Home = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        
        setData(FakeData)
       
    },[data])
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between',
    }
    
    return (
        <div className="home">
            <div style={style}>
           {
               data.map(car => <Cars car={car}></Cars>)
           }
        </div>
        </div>
    );
};

export default Home;