import React from 'react'
import './Application.css'

function Application() {
  return (
    <>
    <div className='Application'>
    <div>
    <div className='Application_about_you'><i className="fa-solid fa-check-to-slot"></i>About You</div>
    <div className='Application_Jamming'><i className="fa-solid fa-2"></i>Next step: Attend the jamming session</div>
    </div>
    <div className='Application_last_div'>
    <div className='Application_left_part'>
       <div><i className="fa-solid fa-ellipsis"></i></div>
       <div><button className='Application-btn'>Continue Your Application to TEN</button></div>
       <div><h2>Why we do the jamming session</h2></div>
       <div><p>Curation is at the core of GrowthX experience. The session help us identify applicants who have the right intent, showcase curosity and are extremely empathetic</p></div>
       <div><button className='Application-btn'>What to expect <i className="fa-solid fa-greater-than"></i></button></div>
    </div>
    <div className='Application_right_part'><img src="https://community.growthx.club/_next_public/images/insights-jamming-session.svg"></img>
    </div>
    </div>
    </div>
    </>
  )
}

export default Application
