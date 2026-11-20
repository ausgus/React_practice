export default function About(){
    return(
        <section 
            id="about"
            className="section-story"
            aria-labelledby="story-title"
        >
            <div>
                <p className="eyebrow">OUR LITTLE PHILOSOPHY</p>
                <h2 id="story-title">
                    커피 한잔보다<br />
                    조금 더 다정한 시간.
                </h2>
            </div>
            <div className="story-copy">
                <p>
                    온유는 바쁜 하루 사이, 나만의 속도를 되찾는 작은 쉼터를
                    상상하며 시작한 가상의 카페입니다.
                </p>
                <p>
                    익숙한 커피의 향, 함께 나누는 디저트, 창가에 머무는 햇살.
                    거창하지 않은 순간들이 하루를 따뜻하게 바꾼다고 믿어요.
                </p>

                <div className="values">
                    <span>01 <b>편안한 한 잔</b></span>
                    <span>02 <b>소박한 즐거움</b></span>
                    <span>03 <b>다정한 공간</b></span>
                </div>
            </div>
        </section>
    );
}