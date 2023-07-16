import React, { useRef } from 'react'
import '../CascadingStyleSheet/memories.css'
import logoImg from '../Images/icons8-male-user-50.png'
import cross from '../Images/icons8-cross-50.png'
import { useNavigate } from 'react-router'

const Memories = ({datam,userName,func,comment,func2}) => {

    const ref = useRef();
    const navigate = useNavigate();

    function handleClick(){
        let ind = datam.index;
        func({
            index: ind,
            data: ref.current.value
        })
    }

    function handleCrossClick(){
        func2(false);
    }

   

  return (
    <div className='memories-container'>
    <img src={cross} alt='cross-img' onClick={handleCrossClick} className='crossImage'/>
        <div>
            <img src={datam.data} alt='ind-image' className='indImage'/>
        </div>
        <div className='right-ind-container'>
            <div>
                <div>
                    <img src={logoImg} alt='logo-image' className='logo-indImage'/>
                    <h6>{userName}</h6>
                </div>
                <div>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."</div>
            </div>
            <hr/>
            <div>
                <div>
                {
                    comment[datam.index].length>0?
                    <h5>{
                        comment[datam.index].map((item)=>{
                            return <div>{item}</div>
                        })
                    }</h5>:
                    <h6>Start the Conversation</h6>
                }
                </div>
            </div>
            <hr/>
            <div>
                <div>
                    <h7>Like: </h7>
                    <h7>comments: </h7>
                </div>
                <div>
                    <div>
                        <input type='text' placeholder='Comments...' ref={ref}/>
                        <button onClick={handleClick}>comment</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Memories