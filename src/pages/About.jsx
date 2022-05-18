import React from 'react'
import Navbar from '../components/navbar/Navbar'
import "./About.scss";
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css";
import Footer from '../components/footer/Footer';

const About = () => {
  return (
    <>
    <Navbar />
    <main>
        <div className="main__wrapper">
            <section className="hero">
                <div className="title__container">
                    <h1>Making blockchain games you'll actually want to play.</h1>
                </div>
            </section>
            <section className="principle">
                <div className="principle__wrapper">
                    <div className="header__contaier">
                        <h3>Our Principles</h3>
                    </div>
                    <div className="principles__container first">
                        <div className="principle reverse">
                            <div className="image__container">
                                <img src="https://static.gala.games/images/about-page/townstar_rancher.png" alt="" />
                            </div>
                            <div className="content__container">
                                <h1>Fun Frist.</h1>
                                <p>We believe the blockchain should be invisible in our games. We use simple game mechanics that all players can enjoy, whether or not they consider themselves to be blockchain pros.</p>
                            </div>
                        </div>
                    </div>
                    <div className="principles__container">
                        <div className="principle">
                            <div className="image__container">
                                <img src="https://static.gala.games/images/about-page/mirandus_squad.png" alt="" />
                            </div>
                            <div className="content__container">
                                <h1>Owned by Players.</h1>
                                <p>Players get to truly own what they win in our games. If you earn or win a magical sword on the Gala Game Platform, it is yours. Your items and any inherited status is a verifiable asset on the blockchain you can trade to another person or play with in-game.</p>
                            </div>
                        </div>
                    </div>
                    <div className="principles__container">
                        <div className="principle reverse">
                            <div className="image__container">
                                <img src="https://static.gala.games/images/about-page/fortified_tower.png" alt="" />
                            </div>
                            <div className="content__container">
                                <h1>Community Rules.</h1>
                                <p>We don’t develop games in a vacuum, we constantly engage and test assumptions with our Discord community. We build alongside a vocal community whose input shapes the direction each game’s design takes.</p>
                            </div>
                        </div>
                    </div>
                    <div className="principles__container">
                        <div className="principle">
                            <div className="image__container">
                                <img src="https://static.gala.games/images/about-page/mirandus_dragon.png" alt="" />
                            </div>
                            <div className="content__container">
                                <h1>Powered by the People.</h1>
                                <p>Everything within the Gala Games Network depends on the player-owned Node Ecosystem. The Gala Network is supported by users, just like you, who operate Gala Nodes from their home computers. <span>Get yours today!</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="news">
                <div className="new__wrapper">
                    <div className="header__container">
                        <h3>News</h3>
                    </div>
                    <div className="news__container">
                        <div className="new__card">
                            <div className="image__container">
                                <img src="https://static.gala.games/images/about-page/blog_img_01.jpg" alt="" />
                            </div>
                            <div className="content__container">
                                <h3>NFTs Are Spurring a Digital Land Grab—in Videogame Worlds </h3>
                                <p>Investors are pouring millions of dollars into land. But these lush fields and rolling hills only exist within videogames. Just as physical land appeals to pension funds and family offices,</p>
                            </div>
                        </div>
                        <div className="new__card">
                            <div className="image__container">
                                <img src="https://static.gala.games/images/about-page/blog_img_02.jpg" alt="" />
                            </div>
                            <div className="content__container">
                                <h3>Frank Miller taps Concept Art House and Gala Games for 30th anniversary Sin City NFT collectibles</h3>
                                <p>Frank Miller has teamed up with gaming art maker Concept Art House and blockchain game company Gala Games to produce nonfungible token (NFT) collectibles based on the Sin City franchise.</p>
                            </div>
                        </div>
                        <div className="new__card">
                            <div className="image__container">
                                <img src="https://static.gala.games/images/about-page/blog_img_03.jpg" alt="" />
                            </div>
                            <div className="content__container">
                                <h3>Gala Games paves path for blockchain games in a deal with Brave</h3>
                                <p>Gala Games, a blockchain games startup that Zynga cofounder Eric Schiermeyer help create, cut a little-noticed but very interesting promotional deal this week with Brave, the maker of the privacy-focused Brave Software web browser.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="games">
                <div className="header__container">
                    <h3>Games</h3>
                </div>
                <div
                className="gamecard__container">
                    <Swiper
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                          },
                          768: {
                            slidesPerView: 4,
                          },
                          1024: {
                            slidesPerView: 5,
                          },
                        
                     }}
                    autoplay={{ delay:1000,disableOnInteraction: false, }}
                    >
                    <SwiperSlide className="game__card">
                            <img src="https://static.gala.games/images/spider-tanks/spidertanks-about.png" alt="" />
                            <div className="content">
                                <span>PvP Brawler</span>
                                <h3>Spider Tank</h3>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="game__card">
                            <img src="https://static.gala.games/images/games/superior/superior-about-page.jpg" alt="" />
                            <div className="content">
                                <span>PvP Brawler</span>
                                <h3>Spider Tank</h3>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="game__card">
                            <img src="https://static.gala.games/images/games/the-walking-dead/twd-about-page.png" alt="" />
                            <div className="content">
                                <span>PvP Brawler</span>
                                <h3>Spider Tank</h3>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="game__card">
                            <img src="https://static.gala.games/images/games/legends-reborn/AboutPage.png" alt="" />
                            <div className="content">
                                <span>PvP Brawler</span>
                                <h3>Spider Tank</h3>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="game__card">
                            <img src="https://static.gala.games/images/about-page/portfolio_item_01.jpg" alt="" />
                            <div className="content">
                                <span>PvP Brawler</span>
                                <h3>Spider Tank</h3>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="game__card">
                            <img src="https://static.gala.games/images/about-page/portfolio_item_02.jpg" alt="" />
                            <div className="content">
                                <span>PvP Brawler</span>
                                <h3>Spider Tank</h3>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="game__card">
                            <img src="https://static.gala.games/images/spider-tanks/spidertanks-about.png" alt="" />
                            <div className="content">
                                <span>PvP Brawler</span>
                                <h3>Spider Tank</h3>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="game__card">
                            <img src="https://static.gala.games/images/games/last-expedition/about-last-expedition.jpg" alt="" />
                            <div className="content">
                                <span>PvP Brawler</span>
                                <h3>Spider Tank</h3>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="game__card">
                            <img src="https://static.gala.games/images/spider-tanks/spidertanks-about.png" alt="" />
                            <div className="content">
                                <span>PvP Brawler</span>
                                <h3>Spider Tank</h3>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide className="game__card">
                            <img src="https://static.gala.games/images/games/fortified/fortified-about-page.png" alt="" />
                            <div className="content">
                                <span>PvP Brawler</span>
                                <h3>Spider Tank</h3>
                            </div>
                    </SwiperSlide>
                </Swiper>

                </div>
            </section>
            <section className="partners">
                <div className="partners__wrapper">
                    <div className="header__container">
                        <h3>Partners</h3>
                    </div>
                    <div className="partnerlogos__wrapper">
                        <div className="partner">
                            <img src="https://static.gala.games/images/about-page/logo_flare.png" alt="" />
                            <span>Flare</span>
                        </div>
                        <div className="partner">
                            <img src="https://static.gala.games/images/about-page/logo_mazergaming.png" alt="" />
                            <span>Mazer Gaming</span>
                        </div>
                        <div className="partner">
                            <img src="https://static.gala.games/images/about-page/logo_bitrue.png" alt="" />
                            <span>Bitrue</span>
                        </div>
                        <div className="partner">
                            <img src="https://static.gala.games/images/about-page/logo_brave.png" alt="" />
                            <span>Brave</span>
                        </div>
                        <div className="partner">
                            <img src="https://static.gala.games/images/about-page/logo_polygon.png" alt="" />
                            <span>Polygon</span>
                        </div>
                    </div>
                </div>
            </section>
            <section className="quotes">
                <div className="quotes__wrapper">
                    <div className="quotes__container">
                        <img className='quote__img' src="https://static.gala.games/images/about-page/quotes_image.png" alt="" />
                        <p>I wouldn’t be doing this if I didn’t think this was literally the next phase of the internet. Everything that touches ownership is going to be affected by what’s happening here. Art and music and everything that has a digital life is going to be touched by this. Anything that you thought was digital that you thought you owned but didn’t really own — that’s what’s about to be revolutionized.
                        </p>
                        <div className="user__info">
                            <img src="https://static.gala.games/images/about-page/quote_image_03.jpg" alt="" />
                            <div>
                                <span>Eric Schiermeyer</span>
                                <span>CEO, Gala Games</span>
                                <span>CoFounder, Zynga</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="milestones">
                <div className="milestones__wrapper">
                    <div className="header__container">
                        <h3>Milestones</h3>
                    </div>
                    <div className="milestones__container">
                        <div className="milestone">
                            <span className='num'>$3M</span>
                            <span className='info'>Our most expensive NFT sold</span>
                        </div>
                        <div className="milestone">
                            <span className='num'>90+</span>
                            <span className='info'>Team <br /> Members</span>
                        </div>
                        <div className="milestone">
                            <span className='num'>$3M</span>
                            <span className='info'>Our most expensive NFT sold</span>
                        </div>
                        <div className="milestone">
                            <span className='num'>$3M</span>
                            <span className='info'>Our most expensive NFT sold</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    </main>
    </>
  )
}

export default About