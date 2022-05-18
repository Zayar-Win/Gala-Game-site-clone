import React, { useState } from 'react'
import "./Careers.scss"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
const Careers = () => {

    const [active,setActive] = useState("");

    const activeOption = (name) => {

        if(active === "first" || active === "second"){
            setActive("")
        }else{
            setActive(name)
        }
        

    }

  return (
        <>
        <Navbar />
        <main className='career'>
            <div className="header__container">
                <div className="header">
                    <h1>Careers at Gala Games</h1>
                </div>
                <div className="selections">
                    <div className="first">
                        <div className="select" onClick={() => activeOption('first')}>
                            <span>Who we are</span>
                            <span className='arrow'>^</span>
                        </div>
                        <div className={`options ${active === "first" ? 'active' : ""}`} >
                            <div className="option">Gala Smart Contract</div>
                            <div className="option">Decentralization</div>
                        </div>
                    </div>
                    <div className="second">
                        <div className="select" onClick={() => activeOption('second')}>
                            <span>Jobs available</span>
                            <span className='arrow'>^</span>
                        </div>
                        <div className={`options ${active === "second" ? 'active' : ''}`}>
                            <div className="option">Engineering</div>
                            <div className="option">Gala Labs</div>
                            <div className="option">Gala Music</div>
                            <div className="option">Mirandus</div>
                            <div className="option">Operations</div>
                            <div className="option">Partner Gaming</div>
                            <div className="option">StoryTellers</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner">
                <div className="content">
                <h1>Join the Gaming Revolution</h1>
                <p>From a founder of Zynga and some of the creative minds that brought us 'FarmVille' and 'Words With Friends', comes a team ready to unleash blockchain for gamers.</p>
                <button>Work with us</button>
                </div>
            </div>
            <div className="ourmission">
               <div className="content">
               <h2>Our Mission</h2>
                <p>To change gaming for good, unleashing the power of blockchain to give more to you, the players.</p>
               </div>
            </div>

            <div className="disciplines">
                <h2>Our Disciplines</h2>
                <div className="cards__container">
                    <div className="card">
                        <img src="	https://static.gala.games/images/careers-page/operations.png" alt="" />
                        <div className="content">
                        <h3>Operations</h3>
                        <p>If you want to make an impact on a small team that's growing fast, on the experiences of huge numbers of gamers, on the future of our industry itself -- then keep an eye out for roles in the team.</p>
                        <button>See available position</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://static.gala.games/images/careers-page/design.png" alt="" />
                        <div className="content">
                        <h3>Design</h3>
                        <p>We are committed to continually iterating, releasing, and improving our gaming features and player experiences. We've got some of the brightest and best creatives helping to make that happen.</p>
                        <button>See available position</button>
                        </div>
                    </div>
                    <div className="card">
                        <img src="https://static.gala.games/images/careers-page/engineering.png" alt="" />
                        <div className="content">
                        <h3>Engineering</h3>
                        <p>Building games on the blockchain is what we do. Our team of talented developers are reshaping and recoding the way that games are played and rewards are made so that everyone can win.</p>
                        <button>See available position</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="intro">
                <div className="left">
                    <h1>Be a player on the Gala Games team</h1>
                    <p>There are over 2.5 billion people in the world that play games. That means there are 2.5 billion people exposed to the potential of blockchain and crypto currencies. We believe gaming can change the world of players.</p>
                    <button>See all open positions</button>
                </div>
                <div className="right">
                    <img src="https://static.gala.games/images/careers-page/be_a_player.png" alt="" />
                </div>
            </div>
            <div className="team">
                <div className="left">
                    <div className="image__container">
                        <img src="https://static.gala.games/images/careers-page/careers_team.png" alt="" />
                    </div>
                </div>
                <div className="right">
                    <h3>Our Global, Remote Team</h3>
                    <p>Gala Games has brought together a highly skilled team. Those who have founded, scaled, and exited high-value, high-volume games combined with those who have deep expertise in emerging technology and digital currencies. Culturally, we value flexibility and creativity in the workspace. For that reason, we all work remotely, full time. Gone are the days of long commutes and cubicles. We believe our workforce thrives from that freedom and outputs even more creativity and inventiveness due to the lack of physical constraints on their work flow.</p>
                </div>
            </div> 
            <div className="values">
                <h2>Our values</h2>    
                <div className="values__container">
                    <div className="vlaue">
                        <h4>Play on</h4>
                        <span>We will keep improving experience by:</span>
                        <ul>
                            <li>Being agile</li>
                            <li>Ask questions,get feedback</li>
                            <li>Getting immersed(in the space)</li>
                            <li>Using our initiative</li>
                        </ul>
                    </div>
                    <div className="vlaue">
                        <h4>Speak up</h4>
                        <span>We will be transparent at all times by:</span>
                        <ul>
                            <li>Having honest conversations</li>
                            <li>Leveling with players</li>
                            <li>Staying true to our vision</li>
                            <li>Being bold and showing courage</li>
                        </ul>
                    </div>
                    <div className="vlaue">
                        <h4>Break out</h4>
                        <span>We will allow players to create change by:</span>
                        <ul>
                            <li>Empowering others</li>
                            <li>Sharing success</li>
                            <li>Promoting equality</li>
                            <li>Delivering equity</li>
                        </ul>
                    </div>
                </div>
            </div> 
        </main>
        <Footer />
        </>
    )
}

export default Careers