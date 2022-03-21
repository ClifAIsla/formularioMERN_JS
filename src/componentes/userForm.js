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
                    <input type="text" onChange={ (e)=>setFirstName(e.target.value) } ></input>
                    {
                        firstName.length < 0 ?       
                        <p>El campo de nombre es necesario.</p> : (firstName.length < 3 ) ? 
                        <p>El campo de nombre tiene que tener al menos 2 caracteres.</p> : null
                    }
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={ (e)=>setLastName(e.target.value)} ></input>
                    {
                        lastName.length < 0 ?
                        <p>El campo de apellido es necesario.</p> : (lastName.length < 3 ) ? 
                        <p>El campo de apellido tiene que tener al menos 2 caracteres.</p> : null
                    }
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" onChange={ (e)=>setEmail(e.target.value)} ></input>
                    {
                        email.length < 0 ?
                        <p>El campo de email es necesario.</p> : (email.length < 5 ) ? 
                        <p>El campo de email tiene que tener al menos 5 caracteres.</p> : null
                    }
                </div>
                <div>
                    <label>Password:</label>
                    <input type="text" onChange={ (e)=>setPassword(e.target.value)} ></input>
                    {
                        password.length < 0 ?
                        <p>El campo de password es necesario.</p> : (password.length < 8 ) ? 
                        <p>El campo de password tiene que tener al menos 8 caracteres.</p> : null
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