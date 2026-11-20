function Footer() {
    return(
        <footer className="footer">
            <a className="brand" href="#home">
                onyu<span>COFFEE &amp; MOMENTS</span>
            </a>
            <p>일상에 작은 쉼표를 건넵니다.</p>
            <small>
                © {new Date().getFullYear()} ONYU COFFEE. React 프로젝트
            </small>
            <a href="#home">맨 위로 ↑</a>
        </footer>
    );
}

export default Footer;