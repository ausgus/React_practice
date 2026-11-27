import { useState } from 'react';
import CoffeeArt from './CoffeeArt.jsx';


const menuItems = [
{
    id: 'lemon',
    name: '레몬 에이드',
    english: 'LEMON ADE',
    category: '논커피',
    price: 6000,
    description: '레몬의 산뜻함을 담은 청량한 한 잔',
    color: '#e2c86a',
    type: 'lemon',
  },
  {
    id: 'cream',
    name: '온유 크림 라테',
    english: 'ONYU CREAM LATTE',
    category: '커피',
    price: 6500,
    description: '고소한 에스프레소 위에 부드럽게 얹은 수제 크림',
    color: '#d3b18a',
    type: 'cream',
    badge: 'SIGNATURE',
  },  
  {
    id: 'matcha',
    name: '말차 라테',
    english: 'MATCHA LATTE',
    category: '논커피',
    price: 6000,
    description: '쌉싸름한 말차와 우유의 은은한 달콤함',
    color: '#839363',
    type: 'matcha',
  },

  {
    id: 'americano',
    name: '아메리카노',
    english: 'AMERICANO',
    category: '커피',
    price: 4500,
    description: '견과류의 고소함과 깔끔하게 남는 초콜릿 향',
    color: '#75472e',
    type: 'coffee',
  },
  {
    id: 'cake',
    name: '바스크 치즈 케이크',
    english: 'BASQUE CHEESECAKE',
    category: '디저트',
    price: 7000,
    description: '짙게 구운 겉면 속에 담긴 촉촉한 크림치즈',
    color: '#c48b48',
    type: 'cake',
    badge: 'BEST',
  },
  {
    id: 'latte',
    name: '카페 라테',
    english: 'CAFFÈ LATTE',
    category: '커피',
    price: 5500,
    description: '진한 커피와 우유가 만드는 편안한 균형',
    color: '#bb885d',
    type: 'latte',
  },
];

const categories = ['전체', ...new Set(menuItems.map(item => item.category))];


function MenuCard({ item }){
    return(
        <li className="menu-card">
            <div
                className="menu-visual"
                style={{ "--drink-color":item.color }}
            >
                {item.badge && <span className="badge">{item.badge}</span>}
                <CoffeeArt type={item.type} />
            </div>
            <div className="menu-meta">
                <span>{item.english}</span>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <strong>{item.price.toLocaleString('ko-KR')}원</strong>
            </div>
        </li>
    );
}

export default function Menu(){
    const [activeCategory, setActiveCategory] = useState("전체");

    const visibleItems = 
    activeCategory === "전체" ? menuItems : menuItems.filter((item) => item.category === activeCategory);

    return(
        <section
            id="menu"
            className="section menu-section"
            aria-labelledby="menu-title"
        >
            <div className="section-top">
                <div>
                    <p className="eyebrow">OUR MENU</p>
                    <h2 id="menu-title">
                        오늘은 어떤 쉼이
                        <br />
                        필요한가요?
                    </h2>
                </div>

                <p className="section-intro">
                취향에 맞는 한 잔과 작은 달콤함.<br />
                당신의 속도에 맞춰 준비할게요.
                </p>
            </div>
            <div className="filters" role="group" aria-label="메뉴 카테고리">
                {categories.map((category) => (
                <button
                    key={category}
                    type="button"
                    aria-pressed={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                >
                    {category}
                </button>
                ))}
            </div>
            <p className="result-count" role="status">
                {activeCategory} 메뉴 {visibleItems.length}개
            </p>

            <ul className="menu-grid">
                {visibleItems.map((item) => (
                <MenuCard key={item.id} item={item} />
                ))}
            </ul>
        </section>
    );
}