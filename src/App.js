// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <div className="all-sec">
        <section className="main-nav">
          <div className="container nav-grid">
            <div className="logo">
              <img className="logo-img" src="images/logo.png" alt="" />
            </div>
            <div className="number">
              <h2 className="num-heading">Call Our Offices Now!
                <hr className="hor-line" />
              </h2>
              {/* <hr className="hor-line" /> */}
              <h1 className="num-para">540.433.6906</h1>
              <p className="para">Get Your Questions Answers Fast</p>
            </div>
          </div>
        </section>

        <section className="second-nav">
          <div className="container nav-pages">
            <div className="pages">
              <p className="nav-para home">home</p>
              <p className="nav-para">biograpgy</p>
              <p className="nav-para">blogs</p>
              <p className="nav-para">area we serve</p>
              <p className="nav-para">library</p>
              <p className="nav-para">contact</p>
            </div>
          </div>
        </section>


        <section className="hero-section">
          <div className="container hero-grid">
            <div className="banner">
              <img className="hero-banner" src="images/gurantee_banner.gif" alt="" />
            </div>
            <div className="hero-img-2">
              <div className="question">
                <h3 className="que">Questions?</h3>
                <p className="que-para">Have a <strong className="strong">Question</strong></p>
                <p className="que-para-2">About Your Case?</p>
              </div>
              <p className="para-2" >Enter your information and get your questions answered <br /> quickly and discreetly or call us at:  <strong>540.433.6906</strong></p>
              <div className="information">
                <form action="">
                  <label for="name">Name:</label>
                  <input className="l1" type="text" id="name" name="name" required /> <br />

                  <label for="email">Email:</label>
                  <input className="l1" type="email" id="email" name="email" required /> <br />

                  <label for="phone">Phone:</label>
                  <input type="tel" id="phone" name="phone" required /> <br />
                </form>
                {/* <p className="confidential">Confidential</p> */}
                <img className="confidential" src="images/confidential.png" alt="" />
              </div>
              <textarea name="" id="textarea" placeholder="Tell us about your case here..." ></textarea>
              {/* <label htmlFor=""></label>
              <input className="mytext" type="text"  placeholder="Tell us about your case here..."/> */}
              <div className="privacy">
                <p className="privacy-para">  <i>100% Privacy Gurnateed </i> </p>

                <h3 className="privacy-heading">Ask Us About Your Case
                  {/* <ion-icon className="icon" name="caret-forward-outline"></ion-icon> */}
                  <img className="privacy-img" src="images/bullet_white.gif" alt="" />
                </h3>

                {/* <img  className="privacy-img" src="images/bullet_white.gif" alt=""/> */}
                {/* <p class="triangle-right"></p> */}

              </div>
            </div>

          </div>
        </section>


        <section className="blog">
          <div className="container blog-grid">
            <div className="chargerd">
              <h2 className="blog-charge">Charged With <span className="dui">DUI?</span> </h2>
              <h3 className="blog-case" >free case evalutaion</h3>
              <div className="board-blog" >
                <p className="blog-para">Being charged with DUI <br /> can be scary. Get the help <br /> you deserve</p>
                <img className="board-img" src="images/paste_board.gif" alt="" />
              </div>
              <p className="para-case">Click here to let us know <br /> how we can help you with <br /> your case.</p>
              <hr className="blog-line" />
              <p className="click">Click here  <ion-icon className="icon" name="caret-forward-outline"></ion-icon></p>
            </div>
            <div class="vertical-line"></div>
            <div className="law-blog grid ">
              <div className="div1">
                <h2 className="law-blog">Law <span className="dui">blog</span></h2>
                <p className="about-para">Learn more about <br /> Virginia Traffic Laws.</p>
                <hr />
                <p className="click-me">Click here  <ion-icon className="icon" name="caret-forward-outline"></ion-icon></p>
              </div>
              <div className="learn" >
                <img className="learn-img" src="images/pic1.gif" alt="" />
              </div>
              {/* <div class="hori-line"></div> */}

              <div className="div2">
                <h2 className="law-blog">Case <span className="dui">Results</span></h2>
                <p className="about-para">See how we help our clients. Read our lastest case Results.</p>
                <hr />
                <p className="click-me">Click here  <ion-icon className="icon" name="caret-forward-outline"></ion-icon></p>
              </div>
              <div className="learn">
                <img className="learn-img" src="images/order_icon.gif" alt="" />
              </div>


            </div>
            <div class="vertical-line"></div>
            <div className="certificate" >
              <div className="certicate-images">
                <img className="cer-img1" src="images/avo_rating_large.gif" alt="" />
                <img className="cer-img1" src="images/national_college_large.gif" alt="" />
              </div>
              <h2 className="cer-blog">Certificates & <br /> <span className="dui">Credentials</span></h2>
              <p className="firm-para">Keefer law firm has protected the <br /> rights of Virganians for over 30 years.</p>
              <hr className="more-line" />
              <p className="click-me more">Learn More <ion-icon className="icon" name="caret-forward-outline" ></ion-icon></p>
            </div>
          </div>
        </section>
        <img className="end" src="images/lf_bt_hr_shadow.png" alt="" />


        <section className="testimonals">
          <div className="testimonal-grid">
            <div className="practice_area">
              <h1 className="blog-charge areahead" >Practice <span className="dui">Areas</span></h1>
              <div className="areas">
              <div className="area">
                  <h2 className='area-head'>DUI & DWI</h2>
                  <p className='area-para'>Learn More <ion-icon className="icon" name="caret-forward-outline" style={{ color: '#741515', fontSize: '20px' }}></ion-icon></p>
                </div>
                <div className="area">
                  <h2 className='area-head'>reckless driving</h2>
                  <p className='area-para'>Learn More <ion-icon className="icon" name="caret-forward-outline" style={{ color: '#741515', fontSize: '20px' }}></ion-icon></p>
                </div>
                <div className="area">
                  <h2 className='area-head'>speeding tickets</h2>
                  <p className='area-para'>Learn More <ion-icon className="icon" name="caret-forward-outline" style={{ color: '#741515', fontSize: '20px' }}></ion-icon></p>
                </div>
                <div className="area">
                  <h2 className='area-head'>traffic violations</h2>
                  <p className='area-para'>Learn More 
                    <ion-icon className="para-icon" name="caret-forward-outline" style={{ color: '#741515', fontSize: '20px' }} ></ion-icon>
                    {/* <img className="para-icon" src="images/bullet_red.gif" alt="" /> */}
                    </p>
                </div>
                <h1 className='learn-more'>learn <span className='dui'>More</span> About</h1>
              </div>
            </div>
            <div className="title">
              <h1 className="title-head"> Page title here</h1>
              <p className='title-para' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta, brcorporis  <br />necessitatibus minima provident deserunt quod   earum, vel consequatur quis eaque <br />voluptatem tempora velit quo nobis accusamus vero iure hic aut? Qui temporibus,  aut <br />quaerat nostrum asperiores  accusamus saepe dolores laudantium beatae nesciunt fuga  <br /> vero molestiae, mollitia doloribus cumque nam quam consequatur incidunt! In maxime  <br />repudiandae. Obcaecati optio aliquid autem in repellat, dolorum officia illum doloribus <br /> cumque. Modi incidunt rem nesciunt, in cum aperiam autem, velit harum dolorum vero  <br /> fugiat itaque asperiores ad tempora animi voluptatibus enim quam quos recusandae expli<br /> sed maxime debitis veniam beatae </p>
            </div>
            <div className="client">
              <div className="div1">
                <h2 className="law-blog">CLIENT <br /> <span className="dui">TESTIMONALS</span></h2>
                <p className="about-para">Read what other says<br /> about keefer Laws firm.</p>
                <hr className='c-line' />
                <p className="click-me btn">Click here  <ion-icon className="icon" name="caret-forward-outline"></ion-icon></p>
              </div>
              <div className="div1">
                <h2 className="law-blog">DOWNLOAD <br /> <span className="dui">FREE</span> REPORTS</h2>
                <p className="about-para">Discover the truth <br /> about Virginia Laws.</p>
                <hr className='c-line' />
                <p className="click-me btn">Click here  <ion-icon className="icon" name="caret-forward-outline"></ion-icon></p>
              </div>
              <div className="div1">
                <h2 className="law-blog">CONTACT <span className="dui">OUR</span> <br />OFFICES</h2>
                <p className="about-para">Get your questions <br /> answered right now.</p>
                <hr className='c-line' />
                <p className="click-me btn" >Click here  
                  <ion-icon className="icon" name="caret-forward-outline"></ion-icon>
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className='footer-grid'>
            <div className="menu">
              <h2>MENU <br />AREA <br />HERE</h2>
            </div>
            <div className="social">
              <img className='rating' src="images/avo_rating_large.gif" alt="" />
              <img className="national nat" src="images/national_college_large.gif" alt="" />
              <h1 className='blog-charge'>FOLLOW <span className='dui'>US</span> </h1>
              <img className="end1" src="images/lf_bt_hr_shadow.png" alt="" />
              {/* <hr className='footer-line' /> */}
              <div className="social-icon">
                <img  className="icon-soc" src="images/fb_icon.gif" alt="" />
                <img src="images/google_icon.gif" alt="" />
                <img className='twitter' src="images/twitter_icon.gif" alt="" />
                <img src="images/linked_icon.gif" alt="" />
              </div>
            </div>
          </div>
        </footer>



      </div>
    </>
  );
}

export default App;
