import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import LoginForm from './components/LoginForm';
import { logout } from './features/userSlice'

function App() {
  
  const adminUser = {
    email:"admin@admin.fr",
    password:"admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const Login = details => {
    if ((details.email == adminUser.email) || (details.password == adminUser.password)) {
      setUser({name: details.name, email: details.email})
      console.log(user.name)
    }
  }

  const Logout = () => {
    setUser({
      name: "",
      email: ""
    })
    dispatch(logout({
      user:null
    }))
  }
  return (
    <div>
      {(user.email != "") ? (
        <div className="welcome">
          <h2>welcome <span>{user.name}</span></h2>
          <button className="logout" onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} adminUser={adminUser}/>
      )}
    </div>
  );
}

export default App;
