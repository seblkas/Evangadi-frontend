import React from 'react'

const SignUp = ({setcurrentPage}) => {
  return (
    <div className='col card p-5 text-center'>
      <div>
        <h3 className='m-3'>Join the network</h3>
        <p className='mb-5'>
          Already have an account?
           <a href='#' onClick={()=>setcurrentPage("login")} className='fw-semibold text-decoration-none text-warning' > Sign in </a>
        </p>
      </div>
      <form action=''>
        <div className='d-flex flex-column gap-3'>
          <input
          type='email'
          className='form-control p-3'
          placeholder='Email Adress'/>
          <div className='d-flex gap-4'>
            <input
          type='text'
          className='form-control p-3'
          placeholder='First Name'/>
             <input
          type='text'
          className='form-control p-3'
          placeholder='Last Name'/>

          </div>
           <input
          type='password'
          className='form-control p-3'
          placeholder='password'/>
        </div>
        <div className='p-3'>
          <small>I agree to the privacy policy and terms oof service. </small>
        </div>
        
        <div className='d-grid'>
          <button type='submit' className='btn btn-primary action-btn fs-5 fw-semibold'>
           Agree and join
          </button>
          <div className='mt-3'>
          <p className='d-flex justify-content-center'>
            <a
             href="#" 
            className='fw-semibold text-decoration-none text-warning'
            onClick={()=>setcurrentPage("login")}
            >
             Already have an account?
            </a>
          </p>
        </div>
        </div>

      </form>

    </div>
  )
}

export default SignUp