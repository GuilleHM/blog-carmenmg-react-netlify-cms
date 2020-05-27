import React from "react"

import Header from '../components/Header/header';
import Logo from '../components/Logo/logo';
import Navbar from '../components/Navbar/navbar';
import FilteredPosts from '../components/FilteredPosts/filteredposts';

import "./pages.css"

const Recipes = (props) => {

    let capitalizedName = props.match.params.tipo.charAt(0).toUpperCase() + props.match.params.tipo.slice(1);
    return (
        <div>
            <div className="hero">
                <Header />
                <Logo title="Las Recetas de Carmen" page={capitalizedName} />
            </div>
            <Navbar />
            <FilteredPosts type={capitalizedName} />
        </div>
    )
}

export default Recipes