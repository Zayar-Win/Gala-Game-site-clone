import React from 'react'
import "./Games.scss"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
const Games = () => {
  return (
    <>
    <Navbar />
    <div className='game__container'>
        <div className='game__detail'>
          <div className='image__container'>
            <img
              src='https://static.gala.games/images/spider-tanks/st_gamebanner.png'
              alt=''
            />
          </div>
          <div className='content__container'>
            <h2>Spider Tank</h2>
            <div className='details'>
              <div>
                <p>Gender</p>
                <h4>PvP Brawler</h4>
              </div>
              <div>
                <p>Developer</p>
                <h4>GAMEDIA</h4>
              </div>
              <div>
                <p>developemnt status</p>
                <h4>Beta</h4>
              </div>
              <div>
                <p>Platform</p>
                <h4>PC</h4>
              </div>
            </div>
            <div className="buttons">
                <button>Visit Store</button>
                <button className='window'><span>Download Launcher</span><img src="https://app.gala.games/_nuxt/img/win-logo.b259916.png" alt="" /></button>
            </div>
          </div>
        </div>
      </div>
    <Footer />
    </>
  )
}

export default Games