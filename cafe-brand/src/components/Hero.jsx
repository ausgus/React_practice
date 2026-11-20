import CoffeeArt from "./CoffeeArt.jsx";

export default function Hero() {
    return(
        <section 
            id="home" 
            className="hero" 
            aria-labelledby="hero-title"
        >
            <div className="hero-copy">
                <p className="eyebrow">YOUR EVERYDAY PAUSE</p>
                <h1 id="hero-title">
                    일상에<br />
                    작은 <em>쉼표,</em><br />
                    온유 커피.
                </h1>
                <p>
                    서두르지 않아도 괜찮아요.<br />
                    좋은 커피와 다정한 공간이 기다리고 있으니까요.
                </p>

                <a className="button" href="#menu">
                    취향에 맞는 메뉴 찾기 <span>↗</span>
                </a>
                <div className="hero-bottom">
                    <span>COFFEE. CALM. CONNECTION.</span>
                </div>
            </div>

            <div className="hero-visual">
                <CoffeeArt hero />
                <div className="visual-footer">
                    <span>01 / THE SIGNATURE</span>
                    <span>온유 크림 라테</span>
                </div>
            </div>
        </section>
    );
}