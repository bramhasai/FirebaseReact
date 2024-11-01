import React,{useState } from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import {auth} from '../firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import './css/Login.css'
import { useNavigate } from "react-router-dom";
const Login =()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () =>{
        signInWithEmailAndPassword(auth,email,password).then((userCredentials)=>{
            console.log(userCredentials);
            navigate('/');
        }).catch(err=>{
            console.log(err)
        })
    }


    return(
        <div className="login_div">
            <div className="login_form">
                <h2>Login page</h2>
                <Input  placeholder="Enter email address" onChange={(e)=>setEmail(e.target.value)}/>
                <Space direction="vertical">
                    <Input.Password
                        onChange={(e)=>setPassword(e.target.value)}
                        placeholder="input password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Space>

                <Button onClick={handleLogin} type="primary">Login</Button>
            </div>
        </div>
    )
}

export default Login;