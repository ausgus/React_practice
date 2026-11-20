import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Menu from './components/Menu.jsx';
import Footer from './components/Footer.jsx';
import './App.css';



const navItems = [
  {id : 1, label : "HOME", href : "#home"},
  {id : 2, label : "MENU", href : "#menu"},
  {id : 3, label : "ABOUT", href : "#about"},
  {id : 4, label : "CONTACT", href : "#contact"},
];

function App() {
  return (
    <>
      <Header brandName="onyu" navItems={navItems} />
      
      <main id="main">
        <Hero />
        <div className="ticker" aria-hidden="true">
          A CUP OF COFFEE, A MOMENT OF PEACE.
          <span>✳</span>잠시 쉬어 가도 좋은 곳
          <span>✳</span>ONYU COFFEE
        </div>
        
        <About />

        <Menu />

        <section className="pause-banner">
          <span className="sun" aria-hidden="true">✳</span>
          <p>아무것도 서두르지 않는 시간.</p>
          <h2>
            Take your time.
            <br />
            <em>Make it onyu.</em>
          </h2>
          <a href="#visit">우리의 공간 만나기 ↗</a>
        </section>

        <section
          id="visit"
          className="section visit"
          aria-labelledby="visit-title"
        >
          <div>
            <p className="eyebrow">COME SAY HELLO</p>
            <h2 id="visit-title">
              당신의 쉼표가<br />
              머무는 곳.
            </h2>
            <p className="visit-description">
              혼자여도, 함께여도 편안한 자리.<br />
              오늘의 작은 여유를 만나보세요.
            </p>
          </div>
          <div className="visit-card">
            <span className="demo-label">가상 매장 · 학습용 정보</span>
            <h3>온유 연남점</h3>
            <dl>
              <div>
                <dt>주소</dt>
                <dd>서울 마포구 연남동 123</dd>
              </div>
              <div>
                <dt>운영 시간</dt>
                <dd>매일 10:00–21:00</dd>
              </div>
              <div>
                <dt>안내</dt>
                <dd>
                  실제 운영 매장이 아닙니다.<br />
                  방문·예약·주문 서비스를 제공하지 않습니다.
                </dd>
              </div>
            </dl>
            <a
              href="https://map.naver.com/p/search/%EC%97%B0%EB%82%A8%EB%8F%99" 
              target="_blank"
              rel="noreferrer"
            >
              연남동 주변 지도 보기 ↗
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default App;