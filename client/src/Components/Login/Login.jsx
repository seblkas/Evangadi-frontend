import React, { useRef } from "react";
import axios from "../../axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setcurrentPage }) => {

  const notify = () => toast("login successfull.");

  const navigate = useNavigate();
  const emailDom = useRef();
  const passwordDom = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;
    if (!emailValue || !passValue) {
      alert("please provide all required information ");
      return
    }

    // so let us send request to the database
    try {
      const { data } = await axios.post("/users/login", {
        email: emailValue,
        password: passValue,
      });
      // alert("login successful.  ");
      localStorage.setItem("token", data.token);
      
      navigate('/');
      window.location.reload()
    } catch (error) {
      // alert(error?.response?.data?.msg);
      console.log(error.response.data);
    }
  }

  return (
    <div className="col card mt-3 p-4 text-center">
      <div>
        <h4 className="m-3">Login to your account</h4>
        <p className="mb-2">
          Don’t have an account?
          <a
            href=""
            onClick={() => setcurrentPage("signup")}
            className="fw-semibold text-decoration-none text-warning"
          >
            Create a new account
          </a>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="d-flex flex-column gap-3">
          <input
            type="email"
            placeholder="Email Address"
            className="form-control p-3"
            ref={emailDom}
          />

          <input
            type="password"
            placeholder="Password"
            className="form-control p-3"
            ref={passwordDom}
          />
        </div>

        <div className="mt-3">
          <a
            href=""
            className="text-decoration-none text-warning d-flex justify-content-end"
          >
            Forgot Password
          </a>
        </div>

        <div className="d-grid mt-2">
          <button
            className="btn btn-primary fw-bold px-5 action_btn"
            type="Submit"
            onClick={notify}
          >
            <ToastContainer />
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;











// import React, { useState, useContext } from 'react';
// import { AuthContext } from "../Authv1/AuthContext";
// import { Link, useNavigate } from 'react-router-dom';
// import axios from '../../axiosConfig';

// const Login = ({setcurrentPage}) => {
//   const[email, setEmail] = useState("")
//   const[password, setPassword] = useState("")
//   const { login } = useContext(AuthContext)

//   const submitHandler = (e)=>{
//     e.preventDefault()
//   }
//   return (
//     <div className='col card p-5 text-center'>
//       <div>
//         <h3 className='m-3'>Login to your account</h3>
//         <p className='mb-5'>
//           Don’t have an account?
//            <a href='#' 
//            onClick={()=>setcurrentPage("signUp")} className='fw-semibold text-decoration-none text-warning' >
//              Create a new account </a>
//         </p>
//       </div>
//       <form onSubmit={submitHandler}>
//         <div className='d-flex flex-column gap-3'>
//           <input
//           type='email'
//           className='form-control p-3'
//           placeholder='Email Adress'
//           onChange={(e)=>setEmail(e.target.value)}/>
//             <input
//           type='password'
//           className='form-control p-3'
//           placeholder='password'
//           onChange={(e)=>setPassword(e.target.value)}

//           />
//         </div>
//         <div className='mt-3'>
//           <p className='d-flex justify-content-end'>
//             <a href="" className='fw-semibold text-decoration-none text-warning'>Forgot Password</a>
//           </p>
//         </div>
//         <div className='d-grid'>
//           <button type='submit' className='btn btn-primary action-btn fs-5 fw-semibold'>Log In</button>
//         </div>

//       </form>

//     </div>
//     );
  
// }

// export default Login