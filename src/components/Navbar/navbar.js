import React, { useState } from 'react';
import './navbar.css';

const Navbar = (props) => {

    const [search, setSearch] = useState(false);

    const submitSearch = (e) => {
        e.preventDefault();
        sessionStorage.setItem('key', e.target.searchInput.value.toLowerCase().trim());
        if (e.target.searchInput.value !== '') {
            toggleSearch();
        }
    }

    const toggleSearch = () => {
        setSearch(!search);
        const searchInput = document.querySelector('#searchInput');
        if (search) {
            if (searchInput.value !== '') {
                sessionStorage.setItem('key', searchInput.value.toLowerCase().trim());
                searchInput.parentElement.submit();
            } else {
                searchInput.blur();
                return;
            }
        }
        searchInput.value = '';
        searchInput.focus();
    }

    const searchClass = search ? 'searchInput active' : 'searchInput';

    return (
        <div className="navbar">
            <div className="search">
                <form onSubmit={submitSearch} action="/resultados-de-la-busqueda">
                    <img onClick={toggleSearch} className="searchIcon" src={require('../../assets/icons/search-icon.png')} alt="Buscar" />
                    <input id='searchInput' name='ingrediente' type="text" className={searchClass} placeholder="Buscar un ingrediente..." />
                </form>
            </div>
            {/* <ul className="navbarMenu">
                <li><a href="mailto:guillehm1@gmail.com?subject=Solicitud de subscripción&body=¡Hola Carmen! Me gustaría subscribirme a tu blog." target="_blank" rel="noopener noreferrer">Subscribirse</a></li>
            </ul> */}

            <a href="mailto:cmontado1949@gmail.com?subject=Solicitud de subscripción&body=¡Hola Carmen! Me gustaría subscribirme a tu blog." target="_blank" rel="noopener noreferrer" className="mailIcon"><img src={require('../../assets/icons/e-mail-icon.png')} alt="Subscribirse" /></a>
        </div>
    )
}

export default Navbar