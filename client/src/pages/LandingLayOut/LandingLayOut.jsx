import React from 'react'
import Header from '../../Components/Header/Header'
import bg from "../../asset/images/bg-svg-f.svg"

const LandingLayOut = () => {
  return (
    <section>
      <Header />
      <main 
      className='landing bg-body-tertiary'
       style={{
        background:`url(${bg}`,
        backgroundRepeat: "no-repeat",
        backgroundSize:"cover" }}>
          <section className='container d-md-flex'>
             {/* form login/sign-up */}
          <div className='col'>
            <h1>
              The Form
            </h1>
          </div>
          {/* welcome message */}
          <div className='col'>
           <h1>The message</h1>
          </div>
          </section>
         

      </main>
    </section>
  )
}

export default LandingLayOut