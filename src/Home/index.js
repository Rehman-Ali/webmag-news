import React, {Fragment} from 'react'

const Home = () => {
  return (


 <Fragment>
  <header id="header">
    <div id="nav">
      <div id="nav-fixed">
        <div className="container">
          <div className="nav-logo">
            <a href="index-2.html" className="logo"><img src="img/xlogo.png.pagespeed.ic.s-UgktC5Y3.png" alt /></a>
          </div>
          <ul className="nav-menu nav navbar-nav">
            <li><a href="category.html">News</a></li>
            <li><a href="category.html">Popular</a></li>
            <li className="cat-1"><a href="category.html">Web Design</a></li>
            <li className="cat-2"><a href="category.html">JavaScript</a></li>
            <li className="cat-3"><a href="category.html">Css</a></li>
            <li className="cat-4"><a href="category.html">Jquery</a></li>
          </ul>
          <div className="nav-btns">
            <button className="aside-btn"><i className="fa fa-bars" /></button>
            <button className="search-btn"><i className="fa fa-search" /></button>
            <div className="search-form">
              <input className="search-input" type="text" name="search" placeholder="Enter Your Search ..." />
              <button className="search-close"><i className="fa fa-times" /></button>
            </div>
          </div>
        </div>
      </div>
      <div id="nav-aside">
        <div className="section-row">
          <ul className="nav-aside-menu">
            <li><a href="index-2.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="#">Join Us</a></li>
            <li><a href="#">Advertisement</a></li>
            <li><a href="contact.html">Contacts</a></li>
          </ul>
        </div>
        <div className="section-row">
          <h3>Recent Posts</h3>
          <div className="post post-widget">
            <a className="post-img" href="blog-post.html"><img src="img/xwidget-2.jpg.pagespeed.ic.183VIkUWUH.jpg" alt /></a>
            <div className="post-body">
              <h3 className="post-title"><a href="blog-post.html">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</a></h3>
            </div>
          </div>
          <div className="post post-widget">
            <a className="post-img" href="blog-post.html"><img src="img/xwidget-3.jpg.pagespeed.ic.NkT9v3Xk_w.jpg" alt /></a>
            <div className="post-body">
              <h3 className="post-title"><a href="blog-post.html">Why Node.js Is The Coolest Kid On The Backend Development Block!</a></h3>
            </div>
          </div>
          <div className="post post-widget">
            <a className="post-img" href="blog-post.html"><img src="img/xwidget-4.jpg.pagespeed.ic.KoyoxijWdu.jpg" alt /></a>
            <div className="post-body">
              <h3 className="post-title"><a href="blog-post.html">Tell-A-Tool: Guide To Web Design And Development Tools</a></h3>
            </div>
          </div>
        </div>
        <div className="section-row">
          <h3>Follow us</h3>
          <ul className="nav-aside-social">
            <li><a href="#"><i className="fa fa-facebook" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" /></a></li>
            <li><a href="#"><i className="fa fa-google-plus" /></a></li>
            <li><a href="#"><i className="fa fa-pinterest" /></a></li>
          </ul>
        </div>
        <button className="nav-aside-close"><i className="fa fa-times" /></button>
      </div>
    </div>
  </header>
  <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="post post-thumb">
            <a className="post-img" href="blog-post.html"><img src="img/xpost-1.jpg.pagespeed.ic.A4Rpahx6U5.jpg" alt /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-2" href="category.html">JavaScript</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href="blog-post.html">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="post post-thumb">
            <a className="post-img" href="blog-post.html"><img src="img/post-2.jpg" alt /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-3" href="category.html">Jquery</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use JQuery?</a></h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="section-title">
            <h2>Recent Posts</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="post">
            <a className="post-img" href="blog-post.html"><img src="img/xpost-3.jpg.pagespeed.ic.uIu7s9VpdP.jpg" alt /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-1" href="category.html">Web Design</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href="blog-post.html">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</a></h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="post">
            <a className="post-img" href="blog-post.html"><img src="img/xpost-4.jpg.pagespeed.ic.acII8ZYTz8.jpg" alt /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-2" href="category.html">JavaScript</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href="blog-post.html">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="post">
            <a className="post-img" href="blog-post.html"><img src="img/xpost-5.jpg.pagespeed.ic.tcaqbxStTb.jpg" alt /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-3" href="category.html">Jquery</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use JQuery?</a></h3>
            </div>
          </div>
        </div>
        <div className="clearfix visible-md visible-lg" />
        <div className="col-md-4">
          <div className="post">
            <a className="post-img" href="blog-post.html"><img src="img/xpost-6.jpg.pagespeed.ic.JtVoUYkYr5.jpg" alt /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-2" href="category.html">JavaScript</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href="blog-post.html">Why Node.js Is The Coolest Kid On The Backend Development Block!</a></h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="post">
            <a className="post-img" href="blog-post.html"><img src="img/xpost-1.jpg.pagespeed.ic.A4Rpahx6U5.jpg" alt /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-4" href="category.html">Css</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href="blog-post.html">CSS Float: A Tutorial</a></h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="post">
            <a className="post-img" href="blog-post.html"><img src="img/post-2.jpg" alt /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-1" href="category.html">Web Design</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href="blog-post.html">Tell-A-Tool: Guide To Web Design And Development Tools</a></h3>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12">
              <div className="post post-thumb">
                <a className="post-img" href="blog-post.html"><img src="img/post-2.jpg" alt /></a>
                <div className="post-body">
                  <div className="post-meta">
                    <a className="post-category cat-3" href="category.html">Jquery</a>
                    <span className="post-date">March 27, 2018</span>
                  </div>
                  <h3 className="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use JQuery?</a></h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="post">
                <a className="post-img" href="blog-post.html"><img src="img/xpost-1.jpg.pagespeed.ic.A4Rpahx6U5.jpg" alt /></a>
                <div className="post-body">
                  <div className="post-meta">
                    <a className="post-category cat-4" href="category.html">Css</a>
                    <span className="post-date">March 27, 2018</span>
                  </div>
                  <h3 className="post-title"><a href="blog-post.html">CSS Float: A Tutorial</a></h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="post">
                <a className="post-img" href="blog-post.html"><img src="img/post-2.jpg" alt /></a>
                <div className="post-body">
                  <div className="post-meta">
                    <a className="post-category cat-1" href="category.html">Web Design</a>
                    <span className="post-date">March 27, 2018</span>
                  </div>
                  <h3 className="post-title"><a href="blog-post.html">Tell-A-Tool: Guide To Web Design And Development Tools</a></h3>
                </div>
              </div>
            </div>
            <div className="clearfix visible-md visible-lg" />
            <div className="col-md-6">
              <div className="post">
                <a className="post-img" href="blog-post.html"><img src="img/xpost-4.jpg.pagespeed.ic.acII8ZYTz8.jpg" alt /></a>
                <div className="post-body">
                  <div className="post-meta">
                    <a className="post-category cat-2" href="category.html">JavaScript</a>
                    <span className="post-date">March 27, 2018</span>
                  </div>
                  <h3 className="post-title"><a href="blog-post.html">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="post">
                <a className="post-img" href="blog-post.html"><img src="img/xpost-5.jpg.pagespeed.ic.tcaqbxStTb.jpg" alt /></a>
                <div className="post-body">
                  <div className="post-meta">
                    <a className="post-category cat-3" href="category.html">Jquery</a>
                    <span className="post-date">March 27, 2018</span>
                  </div>
                  <h3 className="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use JQuery?</a></h3>
                </div>
              </div>
            </div>
            <div className="clearfix visible-md visible-lg" />
            <div className="col-md-6">
              <div className="post">
                <a className="post-img" href="blog-post.html"><img src="img/xpost-3.jpg.pagespeed.ic.uIu7s9VpdP.jpg" alt /></a>
                <div className="post-body">
                  <div className="post-meta">
                    <a className="post-category cat-1" href="category.html">Web Design</a>
                    <span className="post-date">March 27, 2018</span>
                  </div>
                  <h3 className="post-title"><a href="blog-post.html">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</a></h3>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="post">
                <a className="post-img" href="blog-post.html"><img src="img/xpost-4.jpg.pagespeed.ic.acII8ZYTz8.jpg" alt /></a>
                <div className="post-body">
                  <div className="post-meta">
                    <a className="post-category cat-2" href="category.html">JavaScript</a>
                    <span className="post-date">March 27, 2018</span>
                  </div>
                  <h3 className="post-title"><a href="blog-post.html">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="aside-widget">
            <div className="section-title">
              <h2>Most Read</h2>
            </div>
            <div className="post post-widget">
              <a className="post-img" href="blog-post.html"><img src="img/xwidget-1.jpg.pagespeed.ic.nqEkEDP2_z.jpg" alt /></a>
              <div className="post-body">
                <h3 className="post-title"><a href="blog-post.html">Tell-A-Tool: Guide To Web Design And Development Tools</a></h3>
              </div>
            </div>
            <div className="post post-widget">
              <a className="post-img" href="blog-post.html"><img src="img/xwidget-2.jpg.pagespeed.ic.183VIkUWUH.jpg" alt /></a>
              <div className="post-body">
                <h3 className="post-title"><a href="blog-post.html">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</a></h3>
              </div>
            </div>
            <div className="post post-widget">
              <a className="post-img" href="blog-post.html"><img src="img/xwidget-3.jpg.pagespeed.ic.NkT9v3Xk_w.jpg" alt /></a>
              <div className="post-body">
                <h3 className="post-title"><a href="blog-post.html">Why Node.js Is The Coolest Kid On The Backend Development Block!</a></h3>
              </div>
            </div>
            <div className="post post-widget">
              <a className="post-img" href="blog-post.html"><img src="img/xwidget-4.jpg.pagespeed.ic.KoyoxijWdu.jpg" alt /></a>
              <div className="post-body">
                <h3 className="post-title"><a href="blog-post.html">Tell-A-Tool: Guide To Web Design And Development Tools</a></h3>
              </div>
            </div>
          </div>
          <div className="aside-widget">
            <div className="section-title">
              <h2>Featured Posts</h2>
            </div>
            <div className="post post-thumb">
              <a className="post-img" href="blog-post.html"><img src="img/post-2.jpg" alt /></a>
              <div className="post-body">
                <div className="post-meta">
                  <a className="post-category cat-3" href="category.html">Jquery</a>
                  <span className="post-date">March 27, 2018</span>
                </div>
                <h3 className="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use JQuery?</a></h3>
              </div>
            </div>
            <div className="post post-thumb">
              <a className="post-img" href="blog-post.html"><img src="img/xpost-1.jpg.pagespeed.ic.A4Rpahx6U5.jpg" alt /></a>
              <div className="post-body">
                <div className="post-meta">
                  <a className="post-category cat-2" href="category.html">JavaScript</a>
                  <span className="post-date">March 27, 2018</span>
                </div>
                <h3 className="post-title"><a href="blog-post.html">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
              </div>
            </div>
          </div>
          <div className="aside-widget text-center">
            <a href="#" style={{display: 'inline-block', margin: 'auto'}}>
              <img className="img-responsive" src="img/xad-1.jpg.pagespeed.ic.C1dNWPxojd.jpg" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section section-grey">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-title text-center">
            <h2>Featured Posts</h2>
          </div>
        </div>
        <div className="col-md-4">
          <div className="post">
            <a className="post-img" href="blog-post.html"><img src="img/xpost-4.jpg.pagespeed.ic.acII8ZYTz8.jpg" alt /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-2" href="category.html">JavaScript</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href="blog-post.html">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="post">
            <a className="post-img" href="blog-post.html"><img src="img/xpost-5.jpg.pagespeed.ic.tcaqbxStTb.jpg" alt /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-3" href="category.html">Jquery</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use JQuery?</a></h3>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="post">
            <a className="post-img" href="blog-post.html"><img src="img/xpost-3.jpg.pagespeed.ic.uIu7s9VpdP.jpg" alt /></a>
            <div className="post-body">
              <div className="post-meta">
                <a className="post-category cat-1" href="category.html">Web Design</a>
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href="blog-post.html">Pagedraw UI Builder Turns Your Website Design Mockup Into Code Automatically</a></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title">
                <h2>Most Read</h2>
              </div>
            </div>
            <div className="col-md-12">
              <div className="post post-row">
                <a className="post-img" href="blog-post.html"><img src="img/xpost-4.jpg.pagespeed.ic.acII8ZYTz8.jpg" alt /></a>
                <div className="post-body">
                  <div className="post-meta">
                    <a className="post-category cat-2" href="category.html">JavaScript</a>
                    <span className="post-date">March 27, 2018</span>
                  </div>
                  <h3 className="post-title"><a href="blog-post.html">Chrome Extension Protects Against JavaScript-Based CPU Side-Channel Attacks</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="post post-row">
                <a className="post-img" href="blog-post.html"><img src="img/xpost-6.jpg.pagespeed.ic.JtVoUYkYr5.jpg" alt /></a>
                <div className="post-body">
                  <div className="post-meta">
                    <a className="post-category cat-2" href="category.html">JavaScript</a>
                    <span className="post-date">March 27, 2018</span>
                  </div>
                  <h3 className="post-title"><a href="blog-post.html">Why Node.js Is The Coolest Kid On The Backend Development Block!</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="post post-row">
                <a className="post-img" href="blog-post.html"><img src="img/xpost-1.jpg.pagespeed.ic.A4Rpahx6U5.jpg" alt /></a>
                <div className="post-body">
                  <div className="post-meta">
                    <a className="post-category cat-4" href="category.html">Css</a>
                    <span className="post-date">March 27, 2018</span>
                  </div>
                  <h3 className="post-title"><a href="blog-post.html">CSS Float: A Tutorial</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="post post-row">
                <a className="post-img" href="blog-post.html"><img src="img/post-2.jpg" alt /></a>
                <div className="post-body">
                  <div className="post-meta">
                    <a className="post-category cat-3" href="category.html">Jquery</a>
                    <span className="post-date">March 27, 2018</span>
                  </div>
                  <h3 className="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use JQuery?</a></h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="section-row">
                <button className="primary-button center-block">Load More</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="aside-widget text-center">
            <a href="#" style={{display: 'inline-block', margin: 'auto'}}>
              <img className="img-responsive" src="img/xad-1.jpg.pagespeed.ic.C1dNWPxojd.jpg" alt />
            </a>
          </div>
          <div className="aside-widget">
            <div className="section-title">
              <h2>Catagories</h2>
            </div>
            <div className="category-widget">
              <ul>
                <li><a href="#" className="cat-1">Web Design<span>340</span></a></li>
                <li><a href="#" className="cat-2">JavaScript<span>74</span></a></li>
                <li><a href="#" className="cat-4">JQuery<span>41</span></a></li>
                <li><a href="#" className="cat-3">CSS<span>35</span></a></li>
              </ul>
            </div>
          </div>
          <div className="aside-widget">
            <div className="tags-widget">
              <ul>
                <li><a href="#">Chrome</a></li>
                <li><a href="#">CSS</a></li>
                <li><a href="#">Tutorial</a></li>
                <li><a href="#">Backend</a></li>
                <li><a href="#">JQuery</a></li>
                <li><a href="#">Design</a></li>
                <li><a href="#">Development</a></li>
                <li><a href="#">JavaScript</a></li>
                <li><a href="#">Website</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer id="footer">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="footer-widget">
            <div className="footer-logo">
              <a href="index-2.html" className="logo"><img src="img/xlogo.png.pagespeed.ic.s-UgktC5Y3.png" alt /></a>
            </div>
            <ul className="footer-nav">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Advertisement</a></li>
            </ul>
            <div className="footer-copyright">
              <span>© 
                Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com/" target="_blank">Colorlib</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-md-6">
              <div className="footer-widget">
                <h3 className="footer-title">About Us</h3>
                <ul className="footer-links">
                  <li><a href="about.html">About Us</a></li>
                  <li><a href="#">Join Us</a></li>
                  <li><a href="contact.html">Contacts</a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="footer-widget">
                <h3 className="footer-title">Catagories</h3>
                <ul className="footer-links">
                  <li><a href="category.html">Web Design</a></li>
                  <li><a href="category.html">JavaScript</a></li>
                  <li><a href="category.html">Css</a></li>
                  <li><a href="category.html">Jquery</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="footer-widget">
            <h3 className="footer-title">Join our Newsletter</h3>
            <div className="footer-newsletter">
              <form>
                <input className="input" type="email" name="newsletter" placeholder="Enter your email" />
                <button className="newsletter-btn"><i className="fa fa-paper-plane" /></button>
              </form>
            </div>
            <ul className="footer-social">
              <li><a href="#"><i className="fa fa-facebook" /></a></li>
              <li><a href="#"><i className="fa fa-twitter" /></a></li>
              <li><a href="#"><i className="fa fa-google-plus" /></a></li>
              <li><a href="#"><i className="fa fa-pinterest" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
</Fragment> 


  )
}

export default Home