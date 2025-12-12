export default function Services() {
    return (
        <section id="solutions" class="services">
            <div class="container">
                <h2 class="section-title">Nossas Soluções</h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
                    Tecnologia de ponta desenhada para escalabilidade e segurança máxima.
                </p>

                <div class="services-grid">
                    {/* Redobrai Sentinela */}
                    <article class="service-card">
                        <div class="service-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="service-title">Redobrai Sentinela</h3>
                            <p class="service-desc">Sistema anti-fraude avançado e prevenção contra vazamento de dados sensíveis.</p>
                        </div>
                    </article>

                    {/* Redobrai Cloud */}
                    <article class="service-card">
                        <div class="service-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="service-title">Redobrai Cloud</h3>
                            <p class="service-desc">Infraestrutura de nuvem segura e altamente escalável para operações críticas.</p>
                        </div>
                    </article>

                    {/* Redobrai IA */}
                    <article class="service-card">
                        <div class="service-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 2a10 10 0 1 0 10 10H12V2z"></path>
                                <path d="M12 12 2.1 12.05"></path>
                                <path d="M12 12 18.9 5.1"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="service-title">Redobrai IA</h3>
                            <p class="service-desc">Motor de IA proprietário, leve e seguro. Elimine dependências de terceiros.</p>
                        </div>
                    </article>

                    {/* Redobrai Custom */}
                    <article class="service-card">
                        <div class="service-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="3"></circle>
                                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                            </svg>
                        </div>
                        <div>
                            <h3 class="service-title">Redobrai Custom</h3>
                            <p class="service-desc">Soluções arquitetadas sob medida para as necessidades específicas do seu negócio.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
