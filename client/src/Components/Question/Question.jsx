import React from 'react'
import { LiaUserCircle, LiaAngleRightSolid  } from "react-icons/lia";

const Question = () => {
  return (
 <a className=' text-decoration-none text-dark' href="#">
          <hr />
          <div className='d-flex justify-content-between'>
            <div className='d-md-flex align-items-center'>
              <div className='user d-flex flex-column align-items-center'>
                 {/* ?user */}
                 <div>
                  <LiaUserCircle />
                 </div>
                 <div>
                  Evangadi student
                 </div>

              </div>
              <div>
                 {/* question */}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos magnam qui pariatur veniam odio facilis alias doloremque aliquam!
                  
                </p>

              </div>
            
            
            </div>
            <div>
              <span> <LiaAngleRightSolid /></span>
              {/* arrow */}
            </div>

          </div>



        </a>

    
  )
}

export default Question