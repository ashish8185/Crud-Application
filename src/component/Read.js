import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Read = () => {
    const [apiData, setApiData] = useState([]);//usesate is used for  return an array of data and a function to update that data


    function getData() { // create  a function  to retive the data from  the local storage and parse into Json format

        axios.get('https://65e5a22dd7f0758a76e6e828.mockapi.io/crud')
            .then((response) => { //response is used to handle the response that come from server
                setApiData(response.data) // 
            }).catch((err) => {
                console.log(err);
            })
    }
    function handledelete(id){
        axios.delete(`https://65e5a22dd7f0758a76e6e828.mockapi.io/crud/${id}`)
        .then(()=>{
            // alert('delete successfully')
            getData();
            // window.location.reload() //refress the page after deleting the data 
        }).catch((err) => {
            console.log(err);
        })
    }

    function setDataStorage  (id,name,age,email){
        localStorage.setItem("id",id )
        localStorage.setItem("name",name )
        localStorage.setItem("age",age )
        localStorage.setItem("email",email )
        
    }

    //when we  get data from api  its called sideeffect  then we use  useEffect hook for handle this side effect 
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="row">
            <div className="col-md-12" >
            <div className="mb-2 mt-5">
                <Link to='/create' className="btn btn-primary">Createn New Data</Link>
                
            </div>

                <table className="table table-bordered table-striped table-dark table-hover" >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Email</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apiData.map((item) => {
                                return (
                                    <>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.e_name}</td>
                                            <td>{item.e_age}</td>
                                            <td>{item.e_email}</td>
                                          
                                            <td>
                                                <Link to='/edit' className="btn btn-primary" onClick={()=>setDataStorage(item.id,item.e_name,item.e_age,item.e_email)}  >Edit</Link>
                                            </td>
                                            <td><button className="btn btn-danger" onClick={()=>{if(window.confirm('Are You Sure to Delete Data ??')){handledelete(item.id)}}}>Delete</button></td>
                                        </tr>
                                    </>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default Read;