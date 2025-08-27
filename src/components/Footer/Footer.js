import './footer.css';
function Footer() {
    return(
        <footer id='servicos'>
            <div className='footer-grid'>
                <div>
                    <h3 className='footer-title'>Reserv.ai</h3>
                    <p className='footer-sub'>Encontre o espaço perfeito para seu próximo evento.</p>
                </div>
                <div>
                    <h3 className='footer-title'>ESPAÇOS</h3>
                    <p className='footer-sub'>Salões de Festa</p>
                    <p className='footer-sub'>Espaços Corporativos</p>
                    <p className='footer-sub'>Áreas Externas</p>
                </div>
                <div>
                    <h3 className='footer-title'>EMPRESA</h3>
                    <p className='footer-sub'>Sobre Nós</p>
                    <p className='footer-sub'>Contato</p>
                    <p className='footer-sub'>Blog</p>
                </div>
                <div>
                    <h3 className='footer-title'>LEGAL</h3>
                    <p className='footer-sub'>Termos de Uso</p>
                    <p className='footer-sub'>Polítiva de privacidade</p>
                </div>
            </div>
            <div className='footer-bottom'>
                <p className='footer-copy'>&copy; 2025 Reserv.ai. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
export default Footer;