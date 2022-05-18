import { CloseOutlined, SearchOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import Navbar from "../components/navbar/Navbar"
import "./Store.scss"
import Footer from "../components/footer/Footer"
const Store = () => {
    const [active,setActive] = useState('')
    const [mobileFilterActive,setMobileFilterActive] = useState(false)
  return (
    <>
    <Navbar />
    <main className='main'>
        <section className="banner">
            <img src="https://static.gala.games/images/banners/fuzzles/FUZZLE_Banner_1200x181-1.png" alt="" />
        </section>
        <section className="store">
            <div className="filter__container">
                <div className="selectbox__container">
                <select name="All Currencies" id="">
                    <option value="">All Currencies</option>
                    <option value="">All</option>
                    <option value="">ETH</option>
                    <option value="">TOWN</option>
                    <option value="">GALA</option>
                    <option value="">MTRN</option>
                    <option value="">TEST[GC]</option>
                    <option value="">BAT</option>
                </select>
                <select name="All Currencies" id="">
                    <option value="">Popurlity</option>
                    <option value="">Price : Low to High</option>
                    <option value="">Price : Hight to Low</option>
                    <option value="" selected>Newest Arrivals</option>
                </select>
                </div>
                <div className="search__container">
                    <SearchOutlined className='icon' />
                    <input type="text" placeholder='Search' />
                </div>
                <div className="filter" onClick={() =>setMobileFilterActive(true)}>
                    <p>Filters</p>
                </div>
            </div>
            <div className="result__container">
                <div className={`${mobileFilterActive ? "active" : ""} accordion__list`}>
                    <div className="mobile__header">
                        <CloseOutlined className='closebtn' onClick={() => setMobileFilterActive(false)} />
                        <h2>Filters</h2>
                        <span>Reset</span>
                    </div>
                    <div className="accordion first">
                        <div className="title">
                            <span>Games</span>
                            <span onClick={() => setActive(active === 'games' ? '' : 'games')}>{`${active === "games" ? "-" : '+'}`}</span>
                        </div>
                        <ul className={`${active === "games" ? "active" : ''}`}>
                            <li>
                                <img src="https://static.gala.games/images/games/fortified/inventory-image.png" alt="" />
                                <span>Fortitude</span>
                            </li>
                            <li>
                                <img src="https://app.gala.games/_nuxt/img/icon_music_cat.6696a42.png" alt="" />
                                <span>Gala Music</span>
                            </li>
                            <li>
                                <img src="https://static.gala.games/images/games/legacy/Legacy_Game_Store_Icon_256-01.png" alt="" />
                                <span>Legacy</span>
                            </li>
                            <li>
                                <img src="https://static.gala.games/images/mirandus/mirandus_web_icon_256.png" alt="" />
                                <span>Mirandus</span>
                            </li>
                            <li>
                                <img src="https://static.gala.games/images/spider-tanks/spidertanks-round-icon.png" alt="" />
                                <span>Spider Tank</span>
                            </li>
                            <li>
                                <img src="https://app.gala.games/_nuxt/img/TWDE_crow.940d1db.png" alt="" />
                                <span>The walking Dead: Empires</span>
                            </li>
                            <li>
                                <img src="https://app.gala.games/_nuxt/img/townstar_inventory.e5271ef.png" alt="" />
                                <span>Town Star</span>
                            </li>
                        </ul>
                    </div>
                    <div className="accordion">
                        <div className="title">
                            <span>Rarity</span>
                            <span onClick={() => setActive(active === "rarity" ? "" : "rarity")}>{`${active === "rarity" ? "-" : "+"}`}</span>
                        </div>
                        <ul className={`${active === "rarity" ? "active" : ""}`}>
                            <li>
                                <input type="checkbox" />
                                <span>Common</span>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>UnCommon</span>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>Rare</span>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>Epic</span>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>Legendary</span>
                            </li>
                            <li>
                                <input type="checkbox" />
                                <span>Acient</span>
                            </li>
                        </ul>
                    </div>
                    <div className="accordion">
                        <div className="title">
                            <span>Availability</span>
                            <span onClick={() => setActive(active === "availability" ? "" : "availability")}>{`${active === "availability" ? "-" : "+"}`}</span>
                        </div>
                        <ul className={`${active === "availability" ? "active" : ""}`}>
                            <li>
                                <input type="checkbox" />
                                <span>Sold Out</span>
                            </li>
                            <li>
                            <input type="checkbox" />
                                <span>Available</span>
                            </li>
                        </ul>
                    </div>
                    <div className="accordion">
                        <div className="title">
                            <span>Type</span>
                            <span onClick={() => setActive(active === "type" ? "" : "type")}>{`${active === "type" ? "-" : '+'}`}</span>
                        </div>
                        <ul className={`${active === "type" ? "active" : ''}`}>
                            <li>
                                <input type="checkbox"  />
                                <span>Exemplar</span>
                            </li>
                            <li>
                            <input type="checkbox"  />
                                <span>Halloween</span>
                            </li>
                            <li>
                            <input type="checkbox"  />
                                <span>Towers</span>
                            </li>
                            <li>
                            <input type="checkbox"  />
                                <span>Ships</span>
                            </li>
                            <li>
                            <input type="checkbox"  />
                                <span>Weapons</span>
                            </li>
                            <li>
                            <input type="checkbox"  />
                                <span>Map</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="game__container">
                    <div className="game__card">
                        <div className="card__image">
                            <img src="https://tokens.gala.games/images/gala-music/gala-music/jane-handcock/13-i-wanna-thank-me.gif" alt="" />
                            <div className="text">
                                <h2>SOLD <br /> OUT</h2>
                                <p>WE'RE SORRY</p>
                            </div>
                        </div>
                        <div className="card__content">
                            <h2>Gudtyme</h2>
                            <p>3,181</p>
                            <span>Gala Music</span>
                        </div>
                    </div>
                    <div className="game__card">
                        <div className="card__image">
                            <img src="https://tokens.gala.games/images/gala-music/gala-music/jane-handcock/13-i-wanna-thank-me.gif" alt="" />
                            <div className="text">
                                <h2>SOLD <br /> OUT</h2>
                                <p>WE'RE SORRY</p>
                            </div>
                        </div>
                        <div className="card__content">
                            <h2>Gudtyme</h2>
                            <p>3,181</p>
                            <span>Gala Music</span>
                        </div>
                    </div>
                    <div className="game__card">
                        <div className="card__image">
                            <img src="https://tokens.gala.games/images/gala-music/gala-music/jane-handcock/13-i-wanna-thank-me.gif" alt="" />
                            <div className="text">
                                <h2>SOLD <br /> OUT</h2>
                                <p>WE'RE SORRY</p>
                            </div>
                        </div>
                        <div className="card__content">
                            <h2>Gudtyme</h2>
                            <p>3,181</p>
                            <span>Gala Music</span>
                        </div>
                    </div>
                    <div className="game__card">
                        <div className="card__image">
                            <img src="https://tokens.gala.games/images/gala-music/gala-music/jane-handcock/13-i-wanna-thank-me.gif" alt="" />
                            <div className="text">
                                <h2>SOLD <br /> OUT</h2>
                                <p>WE'RE SORRY</p>
                            </div>
                        </div>
                        <div className="card__content">
                            <h2>Gudtyme</h2>
                            <p>3,181</p>
                            <span>Gala Music</span>
                        </div>
                    </div>
                    <div className="game__card">
                        <div className="card__image">
                            <img src="https://tokens.gala.games/images/gala-music/gala-music/jane-handcock/13-i-wanna-thank-me.gif" alt="" />
                            <div className="text">
                                <h2>SOLD <br /> OUT</h2>
                                <p>WE'RE SORRY</p>
                            </div>
                        </div>
                        <div className="card__content">
                            <h2>Gudtyme</h2>
                            <p>3,181</p>
                            <span>Gala Music</span>
                        </div>
                    </div>
                    <div className="game__card">
                        <div className="card__image">
                            <img src="https://tokens.gala.games/images/gala-music/gala-music/jane-handcock/13-i-wanna-thank-me.gif" alt="" />
                            <div className="text">
                                <h2>SOLD <br /> OUT</h2>
                                <p>WE'RE SORRY</p>
                            </div>
                        </div>
                        <div className="card__content">
                            <h2>Gudtyme</h2>
                            <p>3,181</p>
                            <span>Gala Music</span>
                        </div>
                    </div>
                    <div className="game__card">
                        <div className="card__image">
                            <img src="https://tokens.gala.games/images/gala-music/gala-music/jane-handcock/13-i-wanna-thank-me.gif" alt="" />
                            <div className="text">
                                <h2>SOLD <br /> OUT</h2>
                                <p>WE'RE SORRY</p>
                            </div>
                        </div>
                        <div className="card__content">
                            <h2>Gudtyme</h2>
                            <p>3,181</p>
                            <span>Gala Music</span>
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

export default Store