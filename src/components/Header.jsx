import { useState } from 'react';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Prevent scrolling when menu is open
        document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
    };

    return (
        <header className="header">
            <div className="header-content">
                <a href="#" className="logo">
                    <img src="/logo.png" alt="Redobrai Logo" />
                </a>

                <nav className="nav-desktop-links">
                    <a href="#solutions" className="nav-link">Soluções</a>
                    <a href="#technology" className="nav-link">Tecnologia</a>
                    <a href="#integrations" className="nav-link">Integrações</a>
                    <a href="#about" className="nav-link">Sobre</a>
                </nav>

                <div className="header-actions">
                    <a href="https://wa.me/5551997397729" target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-desktop">
                        Fale Conosco
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
                        <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <nav className="mobile-nav">
                    <a href="#solutions" className="mobile-link" onClick={toggleMenu}>Soluções</a>
                    <a href="#technology" className="mobile-link" onClick={toggleMenu}>Tecnologia</a>
                    <a href="#integrations" className="mobile-link" onClick={toggleMenu}>Integrações</a>
                    <a href="#about" className="mobile-link" onClick={toggleMenu}>Sobre</a>
                    <a href="https://wa.me/5551997397729" target="_blank" rel="noopener noreferrer" className="btn btn-primary mobile-cta" onClick={toggleMenu}>
                        Fale Conosco
                    </a>
                </nav>
            </div>
        </header>
    );
}
