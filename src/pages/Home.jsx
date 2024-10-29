import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import './css/Home.css'
const Home =()=>{
    const navigate=useNavigate();
    return(
        <div>
            <Button onClick={()=>navigate('/login')} type="primary"> Login </Button>
            <Button onClick={()=>navigate('/register')} type="primary"> Register </Button>
        </div>
    )
}

export default Home;