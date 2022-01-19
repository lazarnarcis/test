import React, { useRef } from "react";
import axios from "axios";

export default function RegisterForm() {
    const username = useRef();
    const email = useRef();
    const password = useRef();

    const createAccount = (e) => {
        e.preventDefault();
        const new_username = username.current.value;
        const new_email = email.current.value;
        const new_password = password.current.value;

        if (new_username === "") {
            alert("Please enter a username!");
            return;
        } else if (new_email === "") {
            alert("Please enter an email!");
            return;
        } else if (new_password === "") {
            alert("Please enter a password!");
            return;
        }
        
        const user_data = {
            username: new_username,
            email: new_email,
            password: new_password
        }
        
        axios.post('/register', user_data)
            .catch(err => console.error(err));
    }

    return (
        <>
            <form onSubmit={createAccount}>
                <input type="text" placeholder="Username" ref={username} />
                <input type="email" placeholder="Email" ref={email} />
                <input type="password" placeholder="Password" ref={password} />
                <input type="submit" value="Create Account" />
            </form>
        </>
    )
}