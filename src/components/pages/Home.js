import React, { useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { AppContext } from '../ContextProvider';
import { ReactComponent as Logo } from '../../static/img/logo.svg';

import landingImg1 from '../../static/img/landing_img1.jpg';
import landingImg2 from '../../static/img/landing_img2.jpg';
import landingImg3 from '../../static/img/landing_img3.jpg';
import landingImg4 from '../../static/img/landing_img4.jpg';
import landingImg5 from '../../static/img/landing_img5.jpg';
import landingImg6 from '../../static/img/landing_img6.jpg';

import '../../static/css/style.css';


const Home = props => {
  const { state } = useContext(AppContext);
  const { layout, user } = state;
  const { redirectToReferrer } = layout;

  if (redirectToReferrer && props.location.state && user.loggedIn()) {
    const { from } = props.location.state;
    return <Redirect to={from} />;
  }

  if (user.loggedIn()) return <Redirect to="/dashboard" />;

  return (
    <div className="site-wrap">

      <div className="site-mobile-menu">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close mt-3">
            <span className="icon-close2 js-menu-toggle" />
          </div>
        </div>
        <div className="site-mobile-menu-body" />
      </div>

      <header className="site-navbar py-3" role="banner" id="siteHeader">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-12 col-md-4 logoDiv">
              <Logo className="logo" id="logo" />
            </div>
            <div className="col-12 col-md-8 d-none d-xl-block">
              <nav className="site-navigation position-relative text-right" role="navigation">
                <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                  <li className="active"><Link to="/">CLOUD</Link></li>
                  <li><a href="https://conceal.pay/">PAY</a></li>
                  <li><a href="https://conceal.id/">ID</a></li>
                  <li><a href="https://conceal.mobile/">MOBILE</a></li>
                  <li className="cta"><Link to="/login">SIGN IN</Link></li>
                </ul>
              </nav>
            </div>
            {/*<div className="d-inline-block d-xl-none ml-md-0 mr-auto py-3" style="position: relative; top: 3px;">
            <a href="#" className="site-menu-toggle js-menu-toggle text-white"><span className="icon-menu h3" /></a>
          </div>*/}
          </div>
        </div>
      </header>

      <div className="site-section site-hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-10">
              <span className="d-block mb-3 caption">WELCOME TO CONCEAL CLOUD</span>
              <h1 className="d-block mb-4">A secure, feature rich, and fast Conceal
                Wallet</h1>
              <span className="d-block mb-5 caption" />
              <Link to="/signup" className="btn-custom btnSignMain"><span>SIGN UP</span></Link>
              <Link to="/login" className="btn-custom btnSignMain"><span>SIGN IN</span></Link>
            </div>
          </div>
          <div className="downArrowWrapper">
            <div className="downArrow" id="downArrowBtn" />
          </div>
        </div>
      </div>

      <div className="site-section" id="mainSection">
        <div className="container">
          <div className="row mb-5 aboutSection">
            <div className="col-lg-4">
              <div className="site-section-heading">
                <h2>About</h2>
              </div>
            </div>
            <div className="col-lg-5 mt-5 pl-lg-5">
              <p>We aim to make the Conceal crypto-currency as easy to use as possible. With Conceal Cloud you have a wallet
                that is secure, fast, and easy to use. All you need to get started is an account.</p>
            </div>
          </div>

          <div className="row align-items-center speaker">
            <div className="col-lg-6 mb-5 mb-lg-0 imageWrapper_rounded">
              <img src={landingImg1} alt="Image" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6 ml-auto">

              <div className="bio pl-lg-5">
                <h2 className="text-uppercase text-primary d-block mb-3">Multiple
                  Wallets</h2>
                <p className="mb-4">You can have multiple wallets on a single account. Each wallet has its own address so you can use them for different purposes. Up to 3 wallets per user are allowed.</p>

              </div>
            </div>
          </div>

          <div className="row align-items-center speaker">
            <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2 imageWrapper_rounded">
              <img src={landingImg2} alt="Image" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6 ml-auto order-lg-1">
              <div className="bio pr-lg-5">
                <h2 className="text-uppercase text-primary d-block mb-3">Encrypted
                  Messages</h2>
                <p className="mb-4">Try sending encrypted messages over the chain to the target user. The messages work in the cloud, deasktop and mobile wallets. Nobody but you and the recipient can see what is being sent.</p>

              </div>
            </div>
          </div>

          <div className="row align-items-center speaker">
            <div className="col-lg-6 mb-5 mb-lg-0 imageWrapper_rounded">
              <img src={landingImg3} alt="Image" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6 ml-auto">
              <div className="bio pl-lg-5">
                <h2 className="text-uppercase text-primary d-block mb-3" data-aos="fade-right" data-aos-delay="300">Accept
                  Payments</h2>
                <p className="mb-4">Accept payments from anywhere. You can also set up your own payment solution with Conceal Pay. This can be use in multiple scenarios like donations, web shops...</p>
              </div>
            </div>
          </div>


          <div className="row align-items-center speaker">
            <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2 imageWrapper_rounded">
              <img src={landingImg4} alt="Image" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6 ml-auto order-lg-1">
              <div className="bio pr-lg-5">
                <h2 className="text-uppercase text-primary d-block mb-3">Address Book
                </h2>
                <p className="mb-4">No need to copy / paste addresses every time. Maintain your address book for easy sending and receiving of funds.</p>
              </div>
            </div>
          </div>

          <div className="row align-items-center speaker">
            <div className="col-lg-6 mb-5 mb-lg-0 imageWrapper_rounded">
              <img src={landingImg1} alt="Image" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6 ml-auto">
              <div className="bio pl-lg-5">
                <h2 className="text-uppercase text-primary d-block mb-3" data-aos="fade-right" data-aos-delay="300">Maintain
                  Aliases</h2>
                <p className="mb-4">You can create aliases for your wallet addresses, so your friends and partners can use easy to memorize aliases intead of long addresses.</p>
              </div>
            </div>
          </div>

          <div className="row align-items-center speaker">
            <div className="col-lg-6 mb-5 mb-lg-0 order-lg-2 imageWrapper_rounded">
              <img src={landingImg6} alt="Image" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6 ml-auto order-lg-1">
              <div className="bio pr-lg-5">
                <h2 className="text-uppercase text-primary d-block mb-3">Export
                  Private Keys</h2>
                <p className="mb-4">Your keys your money. You can export your private keys anytime and import them for instance to Desktop Wallet. This means you are in control of your funds. Even if the cloud would not be working you still always have access to your funds.</p>
              </div>
            </div>
          </div>

          <div className="row align-items-center speaker">
            <div className="col-lg-6 mb-5 mb-lg-0 imageWrapper_rounded">
              <img src={landingImg5} alt="Image" className="img-fluid rounded" />
            </div>
            <div className="col-lg-6 ml-auto">
              <div className="bio pl-lg-5">
                <h2 className="text-uppercase text-primary d-block mb-3" data-aos="fade-right" data-aos-delay="300">2-Factor
                  Authentication</h2>
                <p className="mb-4">2FA is a standard in todays web security. Our cloud wallet supports 2FA out of the box.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4">
              <h2 className="footer-heading text-uppercase mb-4">About</h2>
              <p>Conceal.Network is a decentralized blockchain bank, with deposits and investments paying interest rates, without involvement of financial institutions, powered by 100% open source code.</p>
            </div>
            <div className="col-md-3 ml-auto">
              <h2 className="footer-heading text-uppercase mb-4">Quick Links</h2>
              <ul className="list-unstyled">
                <Link to="https://conceal.network/" className="p-2">Website</Link>
                <Link to="https://conceal.network/wiki/doku.php" className="p-2">Documentation</Link>
                <Link to="https://discord.conceal.network" className="p-2">Discord</Link>
                <Link to="https://t.co/55klBHKGUR" className="p-2">Telegram</Link>
                <Link to="https://www.reddit.com/r/ConcealNetwork/" className="p-2">Reddit</Link>
                <Link to="https://bitcointalk.org/index.php?topic=5086106" className="p-2">Bitcointalk</Link>
              </ul>
            </div>
            <div className="col-md-4">
              <h2 className="footer-heading text-uppercase mb-4">Connect with Us</h2>
              <p>
                <Link to="https://www.facebook.com/concealnetwork" className="p-2 pl-0"><FontAwesomeIcon icon={['fab', 'facebook']} fixedWidth /></Link>
                <Link to="https://twitter.com/ConcealNetwork" className="p-2"><FontAwesomeIcon icon={['fab', 'twitter']} fixedWidth /></Link>
                <Link to="https://medium.com/@ConcealNetwork" className="p-2"><FontAwesomeIcon icon={['fab', 'medium']} fixedWidth /></Link>
                <Link to="https://github.com/ConcealNetwork" className="p-2"><FontAwesomeIcon icon={['fab', 'github']} fixedWidth /></Link>
              </p>
            </div>
          </div>
          <div className="row">

            <div className="col-md-12 text-center">
              <div className="border-top pt-5">
                <p>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script> All rights reserved | Conceal Network
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Home;
