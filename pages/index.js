import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <head>
      <meta charset="utf-8"/>
<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>

<title>Internatianal New Blog Site</title>

<link href="https://fonts.googleapis.com/css?family=Nunito+Sans:700%7CNunito:300,600" rel="stylesheet"/>



{/* <script>(function(w,d){!function(a,e,t,r,z){a.zarazData=a.zarazData||{},a.zarazData.executed=[],a.zarazData.tracks=[],a.zaraz={deferred:[]};var s=e.getElementsByTagName("title")[0];s&&(a.zarazData.t=e.getElementsByTagName("title")[0].text),a.zarazData.w=a.screen.width,a.zarazData.h=a.screen.height,a.zarazData.j=a.innerHeight,a.zarazData.e=a.innerWidth,a.zarazData.l=a.location.href,a.zarazData.r=e.referrer,a.zarazData.k=a.screen.colorDepth,a.zarazData.n=e.characterSet,a.zarazData.o=(new Date).getTimezoneOffset(),a.dataLayer=a.dataLayer||[],a.zaraz.track=(e,t)=>{for(key in a.zarazData.tracks.push(e),t)a.zarazData["z_"+key]=t[key]},a.zaraz._preSet=[],a.zaraz.set=(e,t,r)=>{a.zarazData["z_"+e]=t,a.zaraz._preSet.push([e,t,r])},a.dataLayer.push({"zaraz.start":(new Date).getTime()}),a.addEventListener("DOMContentLoaded",(()=>{var t=e.getElementsByTagName(r)[0],z=e.createElement(r);z.defer=!0,z.src="../../cdn-cgi/zaraz/sd0d9.html?z="+btoa(encodeURIComponent(JSON.stringify(a.zarazData))),t.parentNode.insertBefore(z,t)}))}(w,d,0,"script")})(window,document);</script> */}

      </head>

    
<header id="header">

<div id="nav">
  <div id="nav-fixed">
    <div className="container">
      <div className="nav-logo">
        <a href="index-2.html" className="logo"><img src="/img/logo.png" alt /></a>
      </div>
      <ul className="nav-menu nav navbar-nav">
        <li><a href="category.html">News</a></li>
        {/* <li><a href="category.html">Popular</a></li>
        <li className="cat-1"><a href="category.html">Web Design</a></li>
        <li className="cat-2"><a href="category.html">JavaScript</a></li>
        <li className="cat-3"><a href="category.html">Css</a></li>
        <li className="cat-4"><a href="category.html">Jquery</a></li> */}
      </ul>
      <div className="nav-btns">
        {/* <button className="aside-btn"><i className="fa fa-bars" /></button> */}
        {/* <button className="search-btn"><i className="fa fa-search" /></button> */}
        <div className="search-form">
          {/* <input className="search-input" type="text" name="search" placeholder="Enter Your Search ..." /> */}
          {/* <button className="search-close"><i className="fa fa-times" /></button> */}
        </div>
      </div>
    </div>
  </div>
  <div id="nav-aside">
    <div className="section-row">
      <ul className="nav-aside-menu">
        <li><a href="index-2.html">Home</a></li>
        {/* <li><a href="about.html">About Us</a></li>
        <li><a href="#">Join Us</a></li>
        <li><a href="#">Advertisement</a></li>
        <li><a href="contact.html">Contacts</a></li> */}
      </ul>
    </div>
    <div className="section-row">
      <h3>Recent Posts</h3>
      <div className="post post-widget">
        <a className="post-img" href="blog-post.html"><img src="/img/xwidget-2.jpg.pagespeed.ic.183VIkUWUH.jpg" alt /></a>
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
          <a className="post-img" href="blog-post.html"><img src="/img/xpost-1.jpg.pagespeed.ic.A4Rpahx6U5.jpg" alt /></a>
          <div className="post-body">
            <div className="post-meta">
              {/* <a className="post-category cat-2" href="category.html">JavaScript</a> */}
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
              {/* <a className="post-category cat-3" href="category.html">Jquery</a> */}
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
              {/* <a className="post-category cat-1" href="category.html">Web Design</a> */}
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
              {/* <a className="post-category cat-2" href="category.html">JavaScript</a> */}
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
              {/* <a className="post-category cat-3" href="category.html">Jquery</a> */}
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
              {/* <a className="post-category cat-2" href="category.html">JavaScript</a> */}
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
              {/* <a className="post-category cat-4" href="category.html">Css</a> */}
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
              {/* <a className="post-category cat-1" href="category.html">Web Design</a> */}
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
                  {/* <a className="post-category cat-3" href="category.html">Jquery</a> */}
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
                  {/* <a className="post-category cat-4" href="category.html">Css</a> */}
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
                  {/* <a className="post-category cat-1" href="category.html">Web Design</a> */}
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
                  {/* <a className="post-category cat-2" href="category.html">JavaScript</a> */}
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
                  {/* <a className="post-category cat-3" href="category.html">Jquery</a> */}
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
                  {/* <a className="post-category cat-1" href="category.html">Web Design</a> */}
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
                  {/* <a className="post-category cat-2" href="category.html">JavaScript</a> */}
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
                {/* <a className="post-category cat-3" href="category.html">Jquery</a> */}
                <span className="post-date">March 27, 2018</span>
              </div>
              <h3 className="post-title"><a href="blog-post.html">Ask HN: Does Anybody Still Use JQuery?</a></h3>
            </div>
          </div>
          <div className="post post-thumb">
            <a className="post-img" href="blog-post.html"><img src="img/xpost-1.jpg.pagespeed.ic.A4Rpahx6U5.jpg" alt /></a>
            <div className="post-body">
              <div className="post-meta">
                {/* <a className="post-category cat-2" href="category.html">JavaScript</a> */}
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
              {/* <a className="post-category cat-2" href="category.html">JavaScript</a> */}
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
              {/* <a className="post-category cat-3" href="category.html">Jquery</a> */}
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
              {/* <a className="post-category cat-1" href="category.html">Web Design</a> */}
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
              <a className="post-img" href="blog-post.html"><img src="https://ichef.bbci.co.uk/onesport/cps/800/cpsprodpb/16B15/production/_123294929_gettyimages-1371135298.jpg" alt /></a>
              <div className="post-body">
                <div className="post-meta">
                  {/* <a className="post-category cat-2" href="category.html">JavaScript</a> */}
                  <span className="post-date">March 27, 2018</span>
                </div>
                <h3 className="post-title"><a href="blog-post.html">Winter Olympics: Kamila Valieva treatment by entourage 'chilling' - IOC</a></h3>
                <p>Valieva, weighed down by a doping scandal and questions over the wisdom of allowing her to compete, made many mistakes in her free skate performance. There was no hug and no comfort for the 15-year-old from coach....</p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="post post-row">
              <a className="post-img" href="blog-post.html"><img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/17D2B/production/_123297579_diver.jpg" alt /></a>
              <div className="post-body">
                <div className="post-meta">
                  {/* <a className="post-category cat-2" href="category.html">JavaScript</a> */}
                  <span className="post-date">May 19, 2019</span>
                </div>
                <h3 className="post-title"><a href="blog-post.html">Sydney shark attack: Beaches reopen after British swimmer's death</a></h3>
                <p>Simon Nellist, 35, was mauled by a shark in the waters off east Sydney on Wednesday.

Though beaches a now open, a popular charity swim scheduled for Sunday has been cancelled....</p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="post post-row">
              <a className="post-img" href="blog-post.html"><img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/58B5/production/_123290722_gettyimages-1238426428-594x594.jpg" alt /></a>
              <div className="post-body">
                <div className="post-meta">
                  {/* <a className="post-category cat-4" href="category.html">Css</a> */}
                  <span className="post-date">January 01, 2021</span>
                </div>
                <h3 className="post-title"><a href="blog-post.html">Beijing Olympics: What’s wrong with natural snow?</a></h3>
                <p>Why is Beijing using artificial snow?
    The organisers have insisted on using it to "ensure the quality" at the Games remains high...</p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="post post-row">
              <a className="post-img" href="blog-post.html"><img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/F4CE/production/_123207626_atb_stillsforpress_1.3.1.png" alt /></a>
              <div className="post-body">
                <div className="post-meta">
                  {/* <a className="post-category cat-3" href="category.html">Jquery</a> */}
                  <span className="post-date">March 27, 2018</span>
                </div>
                <h3 className="post-title"><a href="blog-post.html">All That Breathes: The Indian brothers who heal birds dropping from the sky?</a></h3>
                <p>Mohammad Saud and Nadeem Shehzad rescue birds of prey - mostly injured by paper kite strings coated with crushed glass - and carry them in cardboard boxes to a claustrophobic basement garage at home...</p>
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
        <div className="aside-widget text-center">
          <a href="#" style={{display: 'inline-block', margin: 'auto'}}>
            <img className="img-responsive" src="img/xad-1.jpg.pagespeed.ic.C1dNWPxojd.jpg" alt />
          </a>
        </div>
        <div className="aside-widget text-center">
          <a href="#" style={{display: 'inline-block', margin: 'auto'}}>
            <img className="img-responsive" src="img/xad-1.jpg.pagespeed.ic.C1dNWPxojd.jpg" alt />
          </a>
        </div>
        <div className="aside-widget text-center">
          <a href="#" style={{display: 'inline-block', margin: 'auto'}}>
            <img className="img-responsive" src="img/xad-1.jpg.pagespeed.ic.C1dNWPxojd.jpg" alt />
          </a>
        </div>
        <div className="aside-widget">
          <div className="section-title">
            {/* <h2>Catagories</h2> */}
          </div>
          <div className="category-widget">
            {/* <ul>
              <li><a href="#" className="cat-1">Web Design<span>340</span></a></li>
              <li><a href="#" className="cat-2">JavaScript<span>74</span></a></li>
              <li><a href="#" className="cat-4">JQuery<span>41</span></a></li>
              <li><a href="#" className="cat-3">CSS<span>35</span></a></li>
            </ul> */}
          </div>
        </div>
        <div className="aside-widget">
          <div className="tags-widget">
            {/* <ul>
              <li><a href="#">Chrome</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">Tutorial</a></li>
              <li><a href="#">Backend</a></li>
              <li><a href="#">JQuery</a></li>
              <li><a href="#">Design</a></li>
              <li><a href="#">Development</a></li>
              <li><a href="#">JavaScript</a></li>
              <li><a href="#">Website</a></li>
            </ul> */}
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
          <span> 
            Copyright © All rights reserved  
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


<script src="../assets/js/jquery.min.js"></script>
<script src="../assts/js/bootstrap.min.js%2bmain.js.pagespeed.jc.XwDhaBFLFp.js"></script><script>eval(mod_pagespeed_15hy7ra_pu);</script>
<script>eval(mod_pagespeed_RDDE5qW6SI);</script>

<script async src="https://www.googletagmanager.com/gtag/js?id=UA-23581568-13"></script>
{/* <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'UA-23581568-13');
</script> */}
<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v652eace1692a40cfa3763df669d7439c1639079717194" integrity="sha512-Gi7xpJR8tSkrpF7aordPZQlW2DLtzUlZcumS8dMQjwDHEnw9I7ZLyiOj/6tZStRBGtGgN6ceN6cMH8z7etPGlw==" data-cf-beacon='{"rayId":"6df4f94c3dea021f","token":"cd0b4b3a733644fc843ef0b185f98241","version":"2021.12.0","si":100}' crossorigin="anonymous"></script>

    </div>
  )
}
