import React from 'react'

const SignUp = () => {
  return (
    <div className='col card p-5 text-center'>
      <div>
        <h3 className='m-3'>Join the network</h3>
        <p className='mb-5'>
          Don’t have an account?
           <a href='' className='fw-semibold text-decoration-none text-warning' > Sign in </a>
        </p>
      </div>
      <form action=''>
        <div className='d-flex flex-column gap-3'>
          <input
          type='email'
          className='form-control p-3'
          placeholder='Email Adress'/>
           <input
          type='password'
          className='form-control p-3'
          placeholder='password'/>
        </div>
        <div className='mt-3'>
          <p className='d-flex justify-content-end'>
            <a href="" className='fw-semibold text-decoration-none text-warning'>Forgot Password</a>
          </p>
        </div>
        <div className='d-grid'>
          <button type='submit' className='btn btn-primary action-btn fs-5 fw-semibold'>Log In</button>
        </div>

      </form>

    </div>
  )
}

export default SignUp