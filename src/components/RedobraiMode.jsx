export default function RedobraiMode() {
    return (
        <section className="redobrai-mode-section">
            <div className="container">

                {/* Header content */}
                <div className="redobrai-header-center">
                    <span className="badge">Modo Redobrai</span>
                    <h2 className="section-title-large">
                        Rapidez, qualidade <span className="italic-serif">isso é Redobrai.</span>
                    </h2>
                    <p className="redobrai-subtitle">
                        Conheça uma tecnologia que está redefinindo o mercado de inteligência artificial — o modo Redobrai.
                    </p>
                </div>

                <div className="redobrai-grid">
                    {/* Left: Testimonial Card */}
                    <div className="testimonial-card">
                        <div className="stars">★★★★★</div>
                        <p className="testimonial-text">
                            "Me trouxeram tempo e agilidade para focar no que realmente importa no meu negócio. Indica candidatos qualificados."
                        </p>
                        <div className="testimonial-author">
                            <div className="author-info">
                                <strong>Luiza Decker Teixeira</strong>
                                <span>Fundador da<br />EvoluxRH</span>
                            </div>
                            <div className="author-logo">
                                {/* Placeholder for Evolux Logo from image - using text representation or generic if needed, 
                     but styling for now. Will use a placeholder div or svg. */}
                                <div className="evolux-logo-placeholder">
                                    <span style={{ color: '#00AEEF', fontWeight: 'bold' }}>EVOLUX</span>
                                    <span style={{ fontSize: '10px', display: 'block' }}>Soluções em RH</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Features List */}
                    <div className="redobrai-features">
                        <div className="feature-item">
                            <h3>Ative o Modo Redobrai</h3>
                            <p>Experimente uma tecnologia que redefine o mercado de inteligência artificial, de nível acessível e feito para rodar em qualquer servidor.</p>
                        </div>

                        <div className="feature-item">
                            <h3>Gerencie Tudo com Autonomia</h3>
                            <p>Acompanhe seus modelos, fluxos e automatizações com controle total. Visualize, teste e evolua sua IA com simplicidade e precisão.</p>
                        </div>

                        <div className="feature-item">
                            <h3>Escala no Seu Ritmo</h3>
                            <p>Pausar, ajustar ou expandir. Com o modo Redobrai, a evolução acontece no seu tempo, sem depender de terceiros ou custos variáveis.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
