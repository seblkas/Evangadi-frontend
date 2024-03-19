import React,{useState} from 'react';
import Header from '../../Components/Header/Header'
import bg from "../../asset/images/bg-svg-f.svg"
import Login from '../../Components/Login/Login'
import SignUp from '../../Components/SignUp/SignUp'

const LandingLayOut = () => {
   const [currentPage, setcurrentPage] = useState("signUp")
  return (
    <section>
      <Header />
      <main 
      className='landing bg-body-tertiary'
       style={{
        background:`url(${bg}`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover" }}>
          <section className='container d-md-flex pt-5 gap-5'>
             {/* form login/sign-up */}
          {/* <div className='col'> */}
           {currentPage === "login" && <Login setcurrentPage={setcurrentPage}/> } 
           {currentPage === "signUp" &&  <SignUp setcurrentPage={setcurrentPage} /> }
             
            
            
          
          {/* welcome message */}
          <div className='col mt-5'>
           <p className='text-warning fw-semibold'>About</p>
           <h1 className='fw-bold'>Evangadi Networks Q&A</h1>
           <div className='d-flex flex-column gap-4 fs-5 '>
            <p>
              No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.
            </p>
            <p>
              Wheather you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.

            </p>
           </div>
           <div>
            <button 
            className='btn btn-warning text-white fw-bold py-2 px-5 mt-3'
            style={{ background: "#fe8402 "}}
             >
              How It Works</button>
           </div>
          </div>
          </section>
         

      </main>
    </section>
  )
}

export default LandingLayOut