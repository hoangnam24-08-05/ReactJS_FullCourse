import React from 'react';
import './UserForm.css';
import { useState } from 'react';


const UserForm = () => {
    const [userIF, setUserIF] = useState({
        fullname:'',
        email:'',
        age:''
    });


    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserIF((prevIF) =>({
            ...prevIF, [name]: value
        }))
    }

    return (
        <div className='user-profile-form'>
            <h3 style={{textAlign: 'center'}}>Thông Tin Cá Nhân</h3>
            <form action="">
                <div className='form-field'>
                    <label htmlFor="">Họ Và Tên</label>
                    <input type="text" name="fullname" value={userIF.fullname} onChange={handleChange} placeholder='Alert Nguyen' />
                </div>

                <div className='form-field'>
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" value={userIF.email} onChange={handleChange} placeholder='alert.nguyen@example.com' />
                </div>

                <div className='form-field'>
                    <label htmlFor="">Tuổi</label>
                    <input type="text" name="age" value={userIF.age} onChange={handleChange} placeholder='30' />
                </div>
            </form>
            <div className='live-preview'>
                <h4>Dữ Liệu State</h4>
                <pre>{JSON.stringify(userIF, null, 2)}</pre>
            </div>
        </div>

                                                                           
    )

}

export default UserForm
