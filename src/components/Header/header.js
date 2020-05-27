import React from 'react';
import './header.css';

const Header = (props) => {

  // Set initial state of Menu
  let showMenu = false;

  const toggleMenu = () => {

    // Select DOM Items
    const menu = document.querySelector('.smallScreenNav');
    const menuNav = document.querySelector('.smallScreenNav-menu');
    const navItems = document.querySelectorAll('.smallScreenNav-item');

    if (!showMenu) {
      menu.classList.add('show');
      menuNav.classList.add('show');
      navItems.forEach(item => item.classList.add('show'));
      // Reset Menu State
      showMenu = true;
    } else {
      menu.classList.remove('show');
      menuNav.classList.remove('show');
      navItems.forEach(item => item.classList.remove('show'));
      // Reset Menu State
      showMenu = false;
    }
  }

  /* When the user scrolls down, hide the header. When the user scrolls up, show the header */
  const body = document.body;
  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll === 0) {
      body.classList.remove(scrollUp);
      return;
    }

    if (currentScroll > lastScroll + 15 && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll - 15 && body.classList.contains(scrollDown)) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });

  return (
    <header className="header">
      <nav className="headerMenu">
        <a href="/"><i className="fas fa-home"></i></a>
        <a href="/recetas/entrantes">Entrantes</a>
        <a href="/recetas/primeros">Primeros</a>
        <a href="/recetas/segundos">Segundos</a>
        <a href="/recetas/postres">Postres</a>
      </nav>
      <nav className="headerBarsMenu">
        <i className="fas fa-bars fa-3x" onClick={toggleMenu}></i>
      </nav>
      <nav className="smallScreenNav">
        <ul className="smallScreenNav-menu">
          <i className="far fa-window-close fa-3x" onClick={toggleMenu}></i>
          <li className="smallScreenNav-item inicio">
            <a href="/" className="nav-link">Inicio</a>
          </li>
          <li className="smallScreenNav-item">
            <a href="/recetas/entrantes" className="nav-link">Entrantes</a>
          </li>
          <li className="smallScreenNav-item">
            <a href="/recetas/primeros" className="nav-link">Primeros</a>
          </li>
          <li className="smallScreenNav-item">
            <a href="/recetas/segundos" className="nav-link">Segundos</a>
          </li>
          <li className="smallScreenNav-item">
            <a href="/recetas/postres" className="nav-link">Postres</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header