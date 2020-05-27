import React, { useState, useEffect } from 'react';
import './sidebar.css';

import Card from '../Card/card';
// import { NavLink } from 'react-router-dom';

import AllPosts from '../../posts.json';

const Sidebar = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = AllPosts;
        setPosts(posts);
    }, [posts]);

    return (
        <div className="sidebarContainer">
            <Card style={{ margin: '0 1rem 1rem 0', padding: '0 1rem 1rem 1rem', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Mi Blog de Cocina</span>
                </div>
                <div className="profileImageContainer">
                    <img src={require('../../assets/personalImage/Foto_CMG.jpg')} alt="Foto Carmen Montado" />
                </div>
                <div className="cardBody">
                    <p className="blogDescription">
                        Hola, me llamo Carmen y he creado este blog para publicar mis recetas de cocina, algunas más tradicionales y otras completamente innovadoras. Éste es un blog abierto en el que podrán participar mis familiares y amistades, realizando sus propias aportaciones culinarias. Si quieres recibir una notificación cuando publiquemos una nueva receta, envíame un correo electrónico para subscribirte.<br></br><br></br>¡Buen provecho! Ñam :)
                    </p>
                    {/* <p className="blogAuthor">Carmen Montado</p> */}
                </div>
            </Card>
            <Card>
                <div className="totalNumberOfPosts">
                    <span>Número Total de Recetas: {`${AllPosts.length}`}</span>
                </div>
            </Card>
            <Card className="card recentPostsContainer" style={{ padding: '20px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                    <span>Entradas Recientes</span>
                </div>
                <div className="recentPosts">
                    {
                        posts.slice(0, 5).map(post => {
                            return (
                                // <NavLink key={post.id} to={`/post/${post.id}`}>
                                <div className="recentPost">
                                    <h3><a href={`/post/${post.id}`} className="links">{post.title}</a></h3>
                                    {/* <h3>{post.title}</h3> */}
                                    <p>{post.date}</p>
                                </div>
                                // </NavLink>
                            );
                        })
                    }
                </div>
            </Card>
        </div>
    )
}

export default Sidebar