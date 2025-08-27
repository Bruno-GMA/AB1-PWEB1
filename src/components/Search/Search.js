import './search.css'
function Search(){
    return(
        <div className='container'>
            <div className='Subcontainer'>
                <h2 id='home'>Encontre o Espaço perfeito para seu Evento</h2>
                <form>
                    <input type="text" placeholder='Localização'/>
                    <input type="date" />
                    <input type="time" />
                    <input type="time" />
                </form>
            </div>
        </div>
    )
}

export default Search;