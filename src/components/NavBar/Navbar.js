import './navbar.css'
function NavBar() {
    return (
        <nav>
            <div className='Logo' >
                <h2>Reserv.ai</h2>
            </div>

            <div>
                <ul className='Links'>
                    <li className='elemento'><a href='#home'>Home</a></li>
                    <li className='elemento'><a href='#sobre'>Sobre</a></li>
                    <li className='elemento'><a href='#servicos'>Serviços</a></li>
                </ul>
            </div>

            <div className='input'>
                <button>Login</button>
            </div>
        </nav>
    );
}

export default NavBar;