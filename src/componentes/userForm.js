import React, {useState} from 'react';

const UserForm = (props) => {
    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("")

    const crearUsuario = (e) => {
        e.preventDefault();
        const nuevoUsuario = { firstName,lastName,email,password };
        console.log("Bienvenido "+nuevoUsuario);
    }

    return(
        <div>
        <form onSubmit={crearUsuario}>

                <div>
                    <label>First Name:</label>
                    <input type="text" onChange={ (e)=>setFirstName(e.target.value)} ></input>
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={ (e)=>setLastName(e.target.value)} ></input>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={ (e)=>setEmail(e.target.value)} ></input>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" onChange={ (e)=>setPassword(e.target.value)} ></input>
                </div>

                <input type="submit" value="Crear usuario" ></input>
            
            </form>

            <h1> YOUR FORM DATA </h1>

            <p> First name: {firstName} </p>
            <p> Last name: {lastName} </p>
            <p> Email: {email} </p>
            <p> Password: {password} </p>

        </div>
    )
}
export default UserForm;