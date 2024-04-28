    import './Home.css'
    import Threeoutcomes from './Components/ThreeOutcomes/Threeoutcomes'
    import Threepillors from './Components/ThreePillors/Threepillors'
    import Community2 from './Components/Community2-section/components/Community2'
    import Member from './Components/Community2-section/components/Member'
    import AnnualRetreatSection from './Components/annual-retreat-section/components/AnnualRetreatSection'
    import ExHeadTestimonialSection from './Components/annual-retreat-section/components/ExHeadTestimonialSection'
    import App from './Components/task/App'
    import Cred from './Components/Cred/Cred'
    import DataLedpart4 from './Components/DataLed/DataLedpart4'
    import The_print from './Components/The_Print/The_print'
    import Accordian from './Components/Home_Page_FAQ/Accordian'
    import PhotoSlider from './Components/Community2-section/components/Photoslider'
    import In_person_lunches from './Components/In-Person-Lunches/In_person_lunches'
    import {Link }from 'react-router-dom'

    function Home(){
        return(
              <div className=' home-div'>
              <div className='home_body'>
              <h1 className='first_heading'>The Entrepreneurship Network Membership</h1>
              <p className="first_line">Structured learning, curated community & orbit<br/>changing outcomes – in one membership.</p>
              
              {/* <button className='btn1_landing_page'><Link to='/login'></Link>Become a Member</button> */}
              <h3>Join leaders at marquee internet companies</h3>
              <img src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/65842ad7fd3d64853ccdf1a7_homapge_logos%20(4)-p-1080.png" className="Homeimg"/>
              </div>
              <App/>
              
             <Threepillors/>
              <Member/>
          <Community2/>
          <PhotoSlider />
          <Threeoutcomes/>
          <In_person_lunches/>
          <AnnualRetreatSection/>
          <ExHeadTestimonialSection/>
            <Cred/>  
          <DataLedpart4/>
          <The_print/>
          <Accordian/>
              </div >
        )
    }
    export default Home