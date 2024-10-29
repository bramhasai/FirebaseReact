import React from "react";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Button, Input, Space } from 'antd';
import './css/Login.css'

const Register =()=>{
    return(
        <div className="login_div">
            <div className="login_form">
                <h2>Register Form</h2>
                <Input  placeholder="Enter email address"/>
                <Space direction="vertical">
                    <Input.Password
                        placeholder="input password"
                        iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                    />
                </Space>

                <Button type="primary">Login</Button>
            </div>
        </div>
    )
}

export default Register;