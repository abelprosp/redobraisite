export default function Hero() {
    return (
        <section class="hero">
            <div class="container hero-content">
                <div class="hero-text">
                    <h1 class="hero-title">
                        Segurança e Inteligência <br />
                        <span class="text-gradient">Para o Futuro</span>
                    </h1>
                    <p class="hero-description">
                        Potencialize sua empresa com nossa suite de IA, Cloud segura e proteção anti-fraude de nível empresarial.
                    </p>
                    <div class="hero-actions">
                        <a href="https://wa.me/5551997397729" target="_blank" rel="noopener noreferrer" class="btn btn-primary">Começar Agora</a>
                        <a href="#about" class="btn btn-secondary">Saiba Mais</a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/raposa.png" alt="Redobrai Mascot Raposa" loading="lazy" />
                </div>
            </div>
        </section>
    );
}
