import React from 'react'
import Header from '../../Components/Header/Header'
import { LiaUserCircle, LiaAngleRightSolid  } from "react-icons/lia";
import Question from '../../Components/Question/Question';


const Home = () => {
  return (
    <>
     <Header />
    <section className='bg-body-tertiary'>
     
      <div className='d-flex justify-content-around mt-5 '>
        <button className='btn-primary action-btn px-5' >
          Ask Question
        </button>
        <p className='fw-semibold'> 
        <span className='text-warning'>Welcome,</span> Evangadi students
        </p>   

      </div>

      <div className='container mt-5'>
        <h2>Questions</h2>
        <Question />
        <Question />  
        <Question />
          <Question />
            <Question />


        
      </div>
    </section>
    </>
  );
};

export default Home