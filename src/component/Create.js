import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Create = () => {

const[name,setName]=useState('');
const[age,setAge]=useState('');
const[email,setEmail]=useState('');
const navigate=useNavigate();

const  handle=(e)=>{
    e.preventDefault();
    axios.post('https://65e5a22dd7f0758a76e6e828.mockapi.io/crud',{
    e_name:name,
    e_age:age,
    e_email:email
    })
    .then(()=>{
        navigate('/');
    }).catch((err) => {
        console.log(err);
    })
    

}

    return (

        <div className="row">
            <div className="col-md-4">
                <div className="bg-primary p-4 text-center">
                    <h1>Create Data</h1>
                </div>
                <form onSubmit={handle} >
                    <div className="form-group">
                        <label> Enter Name:</label>
                        <input type="text" placeholder="name" className="form-control"  onChange={(e)=>setName(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label> Enter age:</label>
                        <input type="number" placeholder="age" className="form-control" onChange={(e)=>setAge(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <label> Enter email:</label>
                        <input type="email" placeholder="Email" className="form-control" onChange={(e)=>setEmail(e.target.value)}></input>
                    </div>
                    <br />
                    <div className="d-grid">
                        <input type='submit' value='Submit' className="btn btn-primary" />
                    </div>
                </form>
            
           
            {/* {name}
            <br/>
            {age}
            <br/>
            {email} */}

            </div>

        </div>

    );
}

export default Create;