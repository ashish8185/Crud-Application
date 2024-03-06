import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Edit = () => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`https://65e5a22dd7f0758a76e6e828.mockapi.io/crud/${id}`, {
            e_name: name,
            e_age: age,
            e_email: email
        })
            .then(() => {
                navigate('/')
            }).catch((err) => {
                console.log(err);
            })


    }


    return (
        <div>
            <div className="row">
                <div className="col-md-4">
                    <div className="bg-primary p-4 text-center">
                        <h1>Update Data</h1>
                    </div>
                    <form onSubmit={handleUpdate} >
                        <div className="form-group">
                            <label> Enter Name:</label>
                            <input type="text" placeholder="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} ></input>
                        </div>
                        <div className="form-group">
                            <label> Enter age:</label>
                            <input type="number" placeholder="age" className="form-control" value={age} onChange={(e) => setAge(e.target.value)} ></input>
                        </div>
                        <div className="form-group">
                            <label> Enter email:</label>
                            <input type="email" placeholder="Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                        </div>
                        <br />
                        <div className="d-grid">
                            <input type='submit' value='Update' className="btn btn-primary" />
                        </div>
                        <div className="d-grid mt-2">
                            <Link to='/' className="btn btn-secondary">Back</Link>
                        </div>
                    </form>

                </div>

            </div>
        </div>
    );
}

export default Edit;