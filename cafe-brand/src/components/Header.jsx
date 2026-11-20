import { useState } from 'react';

function Header({brandName, navItems}) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu(){
        setIsOpen((prev) => !prev);
    }
    function closeMenu(){
        setIsOpen(false);
    }

    return(
        <header className="site-header">
            <div className="container header-inner">
                <a href="#home" className="logo">{brandName}</a>
                <button
                    type="button"
                    className="menu-toggle"
                    aria-label={isOpen ? "메뉴닫기" : "메뉴열기"}
                    aria-expanded={isOpen}
                    aria-controls="primary-navigation"
                    onClick={toggleMenu}
                >
                    {isOpen ? "❌" : "🍔"}
                </button>

                <nav 
                    id="primary-navigation"
                    className = "nav" 
                    aria-label="주 메뉴"
                >
                    {navItems.map((item) => (
                        <a 
                            key={item.id} 
                            href={item.href}
                            onClick={closeMenu}
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
}

export default Header;