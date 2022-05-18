import React from 'react'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import "./Gala.scss"
const Gala = () => {
  return (
    <>  
    <Navbar />
    <main className="gala">
      <section className="first">
        <div className="first__container">
          <div className="left__container">
            <h2>Get GALA</h2>
            <p>There are many ways to get and use GALA within the Gala Games ecosystem. The central focus of Gala Games is…well…GAMES. However, we do know that people want to know how to get GALA to use in-game and to purchase items.</p>
          </div>
          <div className="image__container">
              <div className="background__check">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 300 200'>
                            <path storke-width="1" d='M1,1 V199 H57 L299,1 h-63 L40,155 V1z' style={{ stroke: "rgb(37,215,248)", fill: "rgb(37,215,248)" }}>

                            </path>
                        </svg>
               </div>
               <img src="https://static.gala.games/images/get-gala/getGala_banner.png" alt="" />
          </div>
        </div>
      </section>
      <section className="second">
        <h2>Tow Ways to Get Gala</h2>
        <div className="first__way">
          <div className="image__container">
            <img src="https://static.gala.games/images/get-gala/icon_getnode.png" alt="" />
          </div>
          <div className="content__container">
            <h3>Own and Operate a Node</h3>
            <p>Gala Game Nodes help to secure the Gala Games network. As a node operator, you will receive points in the Daily Distribution, which are items and GALA which have been added to your treasure chest and are awaiting minting. This is one of the best ways to support the Gala Games project!</p>
            <button>Get a Node</button>
          </div>
        </div>
        <div className="second__way">
          <div className="header__container">
            <div className="header__image">
              <img src="	https://static.gala.games/images/get-gala/icon_exchange.png" alt="" />
            </div>
            <div className="header__content">
              <h2>Buy from an Exchange</h2>
              <p>We are currently listed for purchase on the following exchanges:</p>
            </div>
          </div>
          <div className="currency">
            <img src="https://app.gala.games/_nuxt/img/logo_binance.028fe03.png" alt="" />
            <button>GALA/BNB</button>
          </div>
          <div className="currency">
            <img src="https://static.gala.games/images/get-gala/logo_coinbase.png" alt="" />
            <button>GALA/BNB</button>
          </div>
          <div className="currency">
            <img src="https://static.gala.games/images/get-gala/logo_cryptocom.png" alt="" />
            <button>GALA/BNB</button>
          </div>
          <div className="currency">
            <img src="https://app.gala.games/_nuxt/img/logo_okex.9ae2765.png" alt="" />
            <button>GALA/BNB</button>
          </div>
          <div className="currency">
            <img src="https://app.gala.games/_nuxt/img/logo_kucoin.26c5c7e.png" alt="" />
            <button>GALA/BNB</button>
          </div>
          <div className="currency">
            <img src="https://app.gala.games/_nuxt/img/gateio.0dfadcc.png" alt="" />
            <button>GALA/BNB</button>
          </div>
          <div className="currency">
            <img src="https://app.gala.games/_nuxt/img/uniswap-logo.1e66f39.png" alt="" />
            <button>GALA/BNB</button>
          </div>
          <div className="currency">
            <img src="https://static.gala.games/images/get-gala/bithumb-logo.png" alt="" />
            <button>GALA/BNB</button>
          </div>
          <div className="currency">
            <img src="https://app.gala.games/_nuxt/img/logo_FTX.5cbff58.png" alt="" />
            <button>GALA/BNB</button>
          </div>
        </div>
        
      </section>
    </main>
    <Footer />
    </>
    )
}

export default Gala