import React, { useState } from "react";
import './Accordian.css'
function Accordian(){

    const options = [
        {
            id:1,
            label: 'Why should I join GrowthX?',
            data:[
                {
                  id  : '1',
                  question: "What is CRAFT at GrowthX?",
                  answer:
                    "CRAFTs are specialised programs that help you go from point A to point B in your career. If you want to achieve exponential outcomes, it's non-negotiable to build depth, proof of work and connect with the right people. That's exactly what CRAFT allows you to do. Taught by the best in the industry, they're in depth modules, that help you build actionable craft that achieve real outcomes..",
                },
                {
                  id  : '2',
                  question: "What is pricing for CRAFT?",
                  answer:
                    "CRAFT is offered as a part of the whole GrowthX membership. Apply for a membership",
                },
                {
                  id  : '3',
                  question: "Who is eligible for CRAFT?",
                  answer:
                    "Exclusively available for GrowthX members who have completed the 8 week immersion.",
                },
                {
                  id  : '4',
                  question: "Can I apply if I am not a member?",
                  answer:
                    "The event led growth learning sprint is part of the GrowthX membership. To get access, you will need to",
                },
                {
                  id  : '5',
                  question: "Do I need to pay to attend partnership led growth?",
                  answer:
                    "If you’re not a GrowthX member, you will have to sign up to the membership",
                },
                {
                  id  : '6',
                  question: "How do I become a member?",
                  answer:
                    "You can apply for a membership here",
                },
                {
                  id  : '7',
                  question: "Will I have access to the program director?",
                  answer:
                    "Ashutosh Cheulkar will be doing a live session to answer all questions and to break down & give feedback on two member built case studies.",
                },
                {
                  id  : '8',
                  question: "Will have access to recordings?",
                  answer:
                    "There will be no access to recordings post the sessions.",
                },
                {
                  id  : '9',
                  question: "Are these sessions live?",
                  answer:
                    "The sessions are hybrid. Some sessions will be live, while others will be async. All sessions will be accessible for only a limited time period.",
                },
              ]
        },
        {
            id:2,
            label: 'Learning experience related',
            data:[
                {id  : '1',
                  question: "How advanced is GrowthX content/programs?",
                  answer:
                    "Jargon is the weapon of the dumb. Revenue growth is not rocket science. Put the user at the center, and everything becomes a logical sequence. This experience is designed to enable you to nail product building, distribution & leadership. Throughout the membership, you will dive deep into strategies, frameworks, and the best tools to help you excel as a growth leader."},
                    {
                        id:2,
                        question:"Is this relevant if I work in B2B / B2C company?",
                        answer:"Absolutely. We have built the GrowthX membership from various business models across B2B, B2C, and even marketplaces. Please note, the business models that we do not cover include offline business models that do not want to open up digital distribution                        "
                    },
                    {
                        id:3,
                        question:"Are there any prerequisites for the learning programs?",
                        answer:" No, and we believe you will find our frameworks applicable on a Monday morning with your team at work. We understand that career or product development doesn’t happen in a straight line, which is why CRAFTs have been designed to help you solve the challenges you face today.Only new members must complete our popular 8-week immersion program as a prerequisite. Whether you want to build muscle in a specific function or become more strategic, transition from an IC to a leader, or lead your company, all our products are designed to help you make an impact at your company."
                    },
                    {
                        id:4,
                        question:"Is this full time? What’s the time commitment?",
                        answer:"No. Over 95% of our members are full time professionals & every experience is designed to cater to someone with a watertight work schedule. Most experiences happen post working hours (8PM onwards on weekdays) & intense learning experiences are on weekends (typically 9 AM - 1 PM)."
                    },
                    {
                        id:5,
                        question:" have a full-time job; how much time will I need to spare? Is this for me?",
                        answer:" 95% of GrowthX members have an intense full-time job. 35% of members are founders & leaders. If they can pull this off, you can too. We will help you plan your week & give you tools to manage your time. You will spend 15 hours every week in the first 5 weeks & 20 hours every week in the next 3 weeks, majorly on weekends and sometimes on weekdays post working hours. Think of it this way, if 2,500+ GrowthX members have done it why can't you?"
                    },
                    {
                        id:6,
                        question:"What is the 8-week immersion program?",
                        answer:"Our popular 8-week immersion program kicks you off with the fundamentals of growth to help you build muscle in scaling internet-first/tech-enabled products. The first five weeks take you through Acquisition, Onboarding, Engagement and Retention, Monetization, and growth teams/modeling. The next three weeks are the coveted GrowthX Capstone project. Read more about it here.This is the best place to start if you are new to growth or are getting a senior growth leadership role who will be responsible for a lot of different parts of product growth, or a founder trying to figure the right growth strategy. The immersion program helps you build a solid structured approach to growth."
                    },
                    {
                        id:7,
                        question:"What is Capstone that I keep hearing from current members?",
                        answer:" Think of it like this - if you were part of a real growth team, this is as real as it gets. At the end of the first five weeks, you would have made real connections with at least 50% of the cohort through breakout rooms (networking sessions on steroids)You will be put into a balanced team with people from the product, marketing, strategy, and founder's office. You will get a curated tech product and all the raw materials to solve growth for the product problem statement.For example, take Airmeet from $1 million in revenue to $5 million in under 12 months. You will conduct user research, speak to the founders/product folks at Airmeet & create a comprehensive growth strategy that the real Airmeet Growth team can apply. More in-depth details about the capstone here."
                    },
                  
            ]
        },
        {
            id:3,
            label: 'Membership fee related',
            data:[
                {
                    id:1,
                    question:"Do you provide low-cost EMI/ financing options?",
                    answer:"You can use credit card EMI from all the leading banks, debit cards, UPI, and Internet banking or if you would like to pay by wire transfer, please contact apply@growthx.club. We do offer a 3 month no cost EMI on most credit cards."
                },
                {
                    id:2,
                    question:"I require a GST invoice. Do you provide it?",
                    answer:"Yes, we do. Upon completing your purchase you can send us your GST details to apply@growthx.club or generate a GST invoice from within the portal as well."
                },
                {
                    id:3,
                    question:"Are there any additional costs to attend GrowthX events & programs?",
                    answer:"All learning programs, (access to one 8-week immersion program, access to CRAFTs) are included in the membership fees. There is a price for each offline community event, as the charges from the venue are passed on to every member attending the event. This will be available on the event page the community team shares with the members."
                },
            ]
        }
    ]
    
    const [selected,setSelected] = useState('')
    const handleClick= (Id) =>{
       console.log(Id);
       setSelected(Id===selected?null:Id)
       
    }
    const [selectedOption, setSelectedOption] = useState(1);

    const handleOptionClick = (optionId) => {
        setSelectedOption(optionId === selectedOption ? null : optionId);
    };
    return(
        <>
          <div className="FAQ-container">
                <div className="options-Btns">
                {options.map(option => (
                    <button 
                        key={option.id}
                        className={`option-button ${option.id === selectedOption ? 'selected' : ''}`}
                        onClick={() => handleOptionClick(option.id)}
                    >
                        {option.label}
                    </button>
                    ))}
                </div>
                
                {selectedOption !== null && (
                    <div className="FAQ-text">
                        {options.find(option => option.id === selectedOption)?.data.map(dataitem=> (
                        <div className="FAQ-item">
                            <div onClick={()=>handleClick(dataitem.id)} className="FAQ-title">
                                <h3>{dataitem.question}</h3>
                                <span> + </span>
                            </div>
                            {
                                selected===dataitem.id?
                                <div className="FAQ-content">
                                    <p>{dataitem.answer}</p>
                                </div>
                                :""
                            }
                        </div>    
                        ))}
                    </div>
                )}
            </div>
        </> 
    );
}

export default Accordian;
            




{/* <div className="accordian">
                    { data.map(dataitem=> (
                        <div className="item">
                            <div onClick={()=>handleclick(dataitem.id)} className="title">
                                <h3>{dataitem.question}</h3>
                                <span> + </span>
                            </div>
                            {
                                selected===dataitem.id?
                                <div className="content">
                                    <p>{dataitem.answer}</p>
                                </div>
                                :""
                            }
                        </div>
                    ))
                }
            </div> */}