import React, {useState} from 'react';

const UserForm = (props) => {
    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");    
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[confirm,setConfirm] = useState("")

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
                    <input type="text" onChange={ (e)=>setFirstName(e.target.value) } ></input>
                    {
                        (firstName.length != "" && firstName.length < 3) ?       
                        <p>El campo de nombre tiene que tener al menos 2 caracteres.</p> : null
                    }
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={ (e)=>setLastName(e.target.value)} ></input>
                    {
                        (lastName.length !=  "" && lastName.length < 3) ? 
                        <p>El campo de apellido tiene que tener al menos 2 caracteres.</p> : null
                    }
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={ (e)=>setEmail(e.target.value)} ></input>
                    {
                        (email.length != "" && email.length < 5) ?
                        <p>El campo de email tiene que tener al menos 5 caracteres.</p> : null
                    }
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" onChange={ (e)=>setPassword(e.target.value)} ></input>
                    {
                        (password.length != "" && password.length < 8) ?
                        <p>El campo de password tiene que tener al menos 8 caracteres.</p> : null
                    }
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type="text" onChange={ (e)=>setConfirm(e.target.value)} ></input>
                    {
                        ( password != confirm ) ?
                        <p>Lascontraseñas deben coincidir.</p> : null
                    }
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