import React from 'react'
import './The_print.css'
import Library from './Library.jsx'

function The_print() {
  return (
    <>
    <div className="news-section"> 
    <div className="u-padding1">
        <div className="news-content-left">
            <div className="learning-cards-v2-title is-large"><br/>Backed by marquee <br/>
                <span className="stricked">investors</span> members<br/><br/>
            </div>
            <div className="gilroy-body-text is--grey is--left">
                <span className="is--white">In our last funding round, 65% of the total funds came from GrowthX
                    members</span>
                along with CXOs from marquee internet companies to help us in our mission.
            </div>
        </div>
    </div>
    <div className="div-block-102">
        <div className="u-padding2">
            <div className="news-content-right">
                <div className="gilroy-body-text is--grey"><span className="is--black">
                        <center>July 6, 2022</center><br/>
                    </span></div>
                <div className="learning-cards-v2-title is-large is--center"><span className="is--black">
                        <center> “With 212 investors, GrowthX completes the largest-ever community-led seed round,
                            raising $1.5 million.”</center>
                    </span>
                </div><br/><br/><img
                    src="https://assets-global.website-files.com/63a49822ee2304acc9455a42/657ae48c4729f8a38e40b135_new-img.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 40vw, (max-width: 991px) 42vw, (max-width: 1439px) 44vw, (max-width: 1919px) 38vw, 693px"
                    
                    alt=""/>
            </div>
        </div>
    </div>
    </div> 
    <Library />
    </>
  )
}

export default The_print
