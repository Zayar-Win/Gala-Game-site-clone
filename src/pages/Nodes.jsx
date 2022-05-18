import React from 'react'
import "./Node.scss"
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const Nodes = () => {
  return (
    <>
    <Navbar />
    <main className='nodes'>
        <section className='first'>
          <div className='container'>
            <div className='content__container'>
              <h2>Gala Nodes</h2>
              <p>
                Open up opportunities to receive
                rewards like GALA, limited edition
                NFT's and the chance to help the
                Gala Games ecosystem grow.
              </p>
            </div>
            <div className='right__container'>
                <div className="background__check">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox='0 0 300 200'>
                        <path storke-width="1" d='M1,1 V199 H57 L299,1 h-63 L40,155 V1z' style={{ stroke: "rgb(37,215,248)", fill: "rgb(37,215,248)" }}>

                        </path>
                    </svg>
                </div>
              <div className='circle'>
                <img src='https://app.gala.games/_nuxt/img/icon_gala_cube.a0b796d.png' alt='' />
                <span>0</span>
                <p>Total GALA <br /> Earned May 11th</p>
              </div>
            </div>
          </div>
        </section>
        <div className="second">
            <div className="second__container">
                <div className="image__container">
                    <img src="https://static.gala.games/images/nodes/open-laptop.png" alt="" />
                </div>
                <div className="content__container">
                    <h2>Get a Founder's Node Today</h2>
                    <p>The Gala Network is supported by users, just like you, who operate Gala Nodes from their home computers. By buying a license to operate a Gala Node, you open up opportunities to receive rewards for your contribution to the network.</p>
                    <p className="secondpara">
                    This can include GALA, limited edition NFTs, and opportunities to help the Gala Games ecosystem grow. Have any questions?<br/><span>Chat with us on Discord.</span>
                    </p>
                    <div className="buttons">
                        <button className='filled'>Buy now</button>
                        <button className="outlined">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
        <section className="third">
            <div className="third__container">
                <div className="header">
                    <h2>Global Distribution Results - May 11th</h2>
                    <span>VIEW</span>
                </div>
                <div className="results">
                    <div className="result">
                        <div className="left">
                            <div className="circle">
                                <img src="https://app.gala.games/_nuxt/img/icon_gala_cube.a0b796d.png" alt="" />
                            </div>
                        </div>
                        <div className="right">0 GALA</div>
                    </div>
                    <div className="result">
                        <div className="left">
                            <div className="circle">
                                <img src="https://app.gala.games/_nuxt/img/icon_node_fire.d23b70c.png" alt="" />
                            </div>
                        </div>
                        <div className="right">0 Point</div>
                    </div>
                    <div className="result">
                        <div className="left">
                            <div className="circle">
                                <img src="	https://app.gala.games/_nuxt/img/icon_node_rare_items.789aa90.png" alt="" />
                            </div>
                        </div>
                        <div className="right">0 Items</div>
                    </div>
                    <div className="result">
                        <div className="left">
                            <div className="circle">
                                <img src="https://app.gala.games/_nuxt/img/icon_onlineStatus.30228c7.png" alt="" />
                            </div>
                        </div>
                        <div className="right">27,330 nodes online now</div>
                    </div>
                </div>
            </div>
        </section>
        <section className="fourth">
            <div className="fourth__container">
                <h2>Game Nodes</h2>
                <div className="gamenode__container">
                    <img src="https://static.gala.games/images/nodes/town-star-nodes/TSBanner_Node.jpg" alt="" />
                    <div className="content">
                    <p>Support the Ecosystem in a unique and empowering way by purchasing a license (when available) to receive rewards in TOWN for operating a Town Star Node.</p>
                    <div className="buttons">
                    <button className="filled">Get a Node</button>
                    <button className="outlined">More Info</button>
                    </div>
                    </div>
                </div>
            </div>
        </section>
      </main>
    <Footer />
    </>
  )
}

export default Nodes