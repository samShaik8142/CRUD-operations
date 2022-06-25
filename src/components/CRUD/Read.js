import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Update from './Update'
import { Link } from 'react-router-dom'

export default function () {


    const [userData, setUserData] = useState([])
    const [dataFilter, setdataFilter] = useState(null);
    console.log(userData)
    useEffect(() => {
        axios.get('https://62b736f8491a19c97af0a88f.mockapi.io/Crud')
            .then(res => {
                setUserData(res.data)
            });
    },[]);


    function deleteUser(id){
        axios.delete(`https://62b736f8491a19c97af0a88f.mockapi.io/Crud/${id}`)
        .then(result =>{}).catch(error => console.error(error))
        
    }

    

    function editUser(id){
        const filterData = userData.filter((value) => id === value.id);
        setdataFilter(filterData[0]);
      localStorage.setItem('Id',id);
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr >
                        <th >Sno.</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                    {userData.map((data,id) => {
                        return (
                            <tr key={id}>
                                <td >{data.id}</td>
                                <td>{data.email}</td>
                                <td>{data.password}</td>
                                <td><Link to='/update'>{<button onClick={()=>editUser(data.id)}>Update</button>}</Link></td>
                                <td><Link to='/delete'>{<button onClick={(e)=>deleteUser(data.id)}>Delete</button>}</Link></td>
                            </tr>
                        )
                    })}
                    


                </tbody>
            </table>
            
            <div>
            {/* {dataFilter !== null ? <Update data={dataFilter} clear={setdataFilter} /> : ""} */}
            </div>

        </div>
    )
}
