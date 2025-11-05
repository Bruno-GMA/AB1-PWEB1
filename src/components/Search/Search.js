import React, { useState } from 'react';

import './search.css'

export default function Search({ onSearch }){
    const [busca, setBusca] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(busca); // Passa o valor da busca para ExportCard
    }

    return(
        <div className='container'>
            <div className='Subcontainer'>
                <h2 id='home'>Encontre o Espaço perfeito para seu Evento</h2>
                <form className='form-search' onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder='Localização'
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        className='input-search'
                    />
                    <div className='container-button'>
                        <button type="submit">Buscar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}