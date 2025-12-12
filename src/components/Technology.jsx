export default function Technology() {
    return (
        <section id="technology" class="feature-section">
            <div class="container feature-container">
                <div class="feature-content">
                    <h2 class="section-title">
                        Tecnologia <span class="text-gradient">Sentinela</span>
                    </h2>
                    <p style={{ marginBottom: '24px', color: 'var(--text-secondary)' }}>
                        Monitore ameaças em tempo real com nossa dashboard intuitiva e poderosa. O Redobrai Sentinela oferece visibilidade total sobre a segurança dos seus dados.
                    </p>
                    <ul style={{ marginBottom: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <li style={{ display: 'flex', gap: '12px', color: 'var(--text-primary)' }}>
                            <span style={{ color: 'var(--brand-primary)' }}>✓</span> Monitoramento 24/7 com IA
                        </li>
                        <li style={{ display: 'flex', gap: '12px', color: 'var(--text-primary)' }}>
                            <span style={{ color: 'var(--brand-primary)' }}>✓</span> Alertas instantâneos de vazamento
                        </li>
                        <li style={{ display: 'flex', gap: '12px', color: 'var(--text-primary)' }}>
                            <span style={{ color: 'var(--brand-primary)' }}>✓</span> Relatórios detalhados de conformidade
                        </li>
                    </ul>
                    <a href="https://wa.me/5551997397729" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                        Agendar Demo
                    </a>
                </div>
                <div class="mockup-container">
                    <img src="./public/dashboard_sentinela.png" alt="Dashboard Sentinela" class="mockup-image" />
                </div>
            </div>
        </section>
    );
}
