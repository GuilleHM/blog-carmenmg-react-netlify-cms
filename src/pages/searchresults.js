import React from 'react';
import Header from '../components/Header/header';
import Logo from '../components/Logo/logo';
import Navbar from '../components/Navbar/navbar';
import Card from '../components/Card/card';

import './pages.css';
import "../components/components.css";
import "../components/FilteredPosts/filteredposts.css";

import Posts from '../posts.json';

const SearchResults = (props) => {

    let showNoResults = 'showNoSearchResults';

    return (
        <React.Fragment>
            <div className="hero">
                <Header />
                <Logo title="Las Recetas de Carmen" page="Busqueda" />
            </div>
            <Navbar />
            {/* <div className="searchMainPic"><span>Resultados de la Búsqueda</span></div> */}
            <div className="searchResultsPosts">
                <Card>
                    <div className="searchResultsPostsHeader">
                        <span>Resultados de la Búsqueda</span>
                    </div>
                </Card>
                <br></br>
                {
                    Posts.map((post, index) => {
                        if (post.content.toLowerCase().indexOf(sessionStorage.getItem('key')) !== -1) {
                            showNoResults = 'hideNoSearchResults';
                            return (
                                <Card key={index} className="postCard" style={{ margin: "1rem 2rem 2rem", paddingBottom: "1.5rem", borderBottom: "1px solid #333" }}>
                                    <div className="searchResultPostBriefing" style={{ textAlign: "center" }}>
                                        <span>{post.type}</span>
                                        <h1><a href={`/post/${post.id}`} className="links">{post.title}</a></h1>
                                        <span>Publicado el {`${post.date}`} por {`${post.author}`}</span>

                                        <div className="postLink"><a href={`/post/${post.id}`}>Leer más</a></div>
                                    </div>

                                    <div className="filteredPostImageWrapper" >
                                        {post.image && <img className="imagefeaturedPostImage" src={require(`../assets/recipeImages/${post.image.trim()}`)} alt={post.title} />}
                                    </div>

                                </Card>
                            );
                        } else {
                            return null;
                        }
                    })
                }
            </div>
            <div className={showNoResults}>
                <Card style={{ textAlign: "center", padding: "1rem 0", margin: "1.5rem auto" }}>
                    <h1>¡Upss! Ningún resultado...</h1>
                    <p style={{ padding: "0 1rem" }}>No hay ninguna receta que contenga el ingrediente que has introducido en el campo de búsqueda.<br></br>Tal vez tengas más suerte si pruebas con otro ingrediente :)</p>
                </Card>
                <Card style={{ textAlign: "center", padding: "1rem 0", margin: "1.5rem auto" }}>
                    <h2>Número total de entradas en el blog: {`${Posts.length}`}</h2>
                </Card>
            </div>
        </React.Fragment>
    )
}

export default SearchResults;