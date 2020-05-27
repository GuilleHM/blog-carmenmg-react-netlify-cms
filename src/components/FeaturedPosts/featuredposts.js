import React from "react";
// import Markdown from "react-markdown";
// import { Link } from "react-router-dom";

import "../components.css";
import "./featuredposts.css";

import Card from '../Card/card';

// import postlist from "../posts.json";
import AllPosts from '../../posts.json';


const FeaturedPosts = (props) => {
    // const excerptList = AllPosts.map(post => {
    //     return post.content.split(" ").slice(0, 20).join(" ") + "..."
    // })

    return (
        <div className="featuredPostsContainer">
            <Card>
                <div className="featuredPostsHeader">
                    <span>Recetas Destacadas</span>
                </div>
            </Card>
            <br></br>
            <div className="featuredPosts">
                {AllPosts.length &&
                    AllPosts.map((post, i) => {
                        if (post.featured.trim() === 'true') {
                            return (
                                <Card key={i} className="postCard">
                                    <div className="featuredPostImageWrapper">
                                        {post.image && <img className="imagefeaturedPostImage" src={require(`../../assets/recipeImages/${post.image.trim()}`)} alt={post.title} />}
                                    </div>
                                    <div className="postBriefing" style={{ textAlign: "center" }}>
                                        <span>{post.type}</span>
                                        <h1><a href={`/post/${post.id}`} className="links">{post.title}</a></h1>
                                        {/* <h2 className="post-title"><Link className="links" to={`/post/${post.id}`}>{post.title}</Link></h2> */}
                                        <span>Publicado el {post.date} por {post.author}</span>
                                        {/* <small>Publicado el {post.date} por {post.author}</small> */}
                                        {/* <hr /> */}
                                        {/* <Markdown source={excerptList[i]} escapeHtml={false} /> */}
                                        <div className="postLink"><a href={`/post/${post.id}`}>Leer más</a></div>
                                        {/* <small><Link className="links" to={`/post/${post.id}`}>Leer Más</Link></small> */}
                                        <hr></hr>
                                    </div>
                                </Card>
                            )
                        } else {
                            return null
                        }

                    })
                }
            </div>

            {/* <Card>
                <div className="featuredPostImageWrapper">
                    <img
                        src={require("../../../blogPostImages/sitioWebSeguro.png")}
                        alt="Sitio Web Seguro"
                    />
                </div>
                <div className="postBriefing" style={{ textAlign: "center" }}>
                    <span>Desarrollo Web</span>
                    <h1>Mi nuevo sitio web es (más) seguro</h1>
                    <span>Publicado el 13 de Mayo de 2020 por GuilleHM</span>
                    <p>
                        Aunque éste ya ofrecía un estándar de seguridad elevado, toda vez que se sirve a través de HTTPS, siempre hay lugar para la mejora: como puede verse en la figura que aparece al final de esta entrada, un par de pequeños cambios han implicado un avance sustancial en la categoría alcanzada por el sitio web...
                    </p>
                    <div className="postLink"><a href="/publicacion/mi-nuevo-sitio-web-es-mas-seguro">Leer más</a></div>
                </div>
            </Card>
            <br></br>
            <Card>
                <div className="featuredPostImageWrapper">
                    <img
                        src={require("../../../blogPostImages/bienvenidoAMiSitioWeb.gif")}
                        alt="Bienvenido A Mi Sitio Web"
                    />
                </div>
                <div className="postBriefing" style={{ textAlign: "center" }}>
                    <span>Desarrollo Web</span>
                    <h1>Página de inicio con efecto de escritura dinámica</h1>
                    <span>Publicado el 06 de Mayo de 2020 por GuilleHM</span>
                    <p>
                        Utilizando el efecto que simula la escritura de caracteres en pantalla (ya empleado anteriormente en la publicación "EL TEMPLE"), presento esta página de inicio que he utilizado para familiarizarme con el proceso de despliegue de sitios web estáticos en Netlify...
                    </p>
                    <div className="postLink"><a href="/publicacion/pagina-inicio-efecto-escritura-dinamica">Leer más</a></div>
                </div>
            </Card>
            <br></br>
            <Card>
                <div className="featuredPostImageWrapper">
                    <img
                        src={require("../../../blogPostImages/nuevoSitioWeb.png")}
                        alt="Nuevo Sitio Web"
                    />
                </div>
                <div className="postBriefing" style={{ textAlign: "center" }}>
                    <span>Desarrollo Web</span>
                    <h1>Mi nuevo sitio web</h1>
                    <span>Publicado el 22 de Marzo de 2020 por GuilleHM</span>
                    <p>
                        Esta entrada sirve como introducción de mi nuevo sitio web personal, en inglés, en el que me presento y expongo algunos de los trabajos recogidos también aquí, en mi blog, utilizando CSS3 y Javascrip para dotar a las páginas que lo componen de dinamismo...
                    </p>
                    <div className="postLink"><a href="/publicacion/mi-nuevo-sitio-web">Leer más</a></div>
                </div>
            </Card>
            <br></br>
            <Card>
                <div className="featuredPostImageWrapper">
                    <img
                        src={require("../../../blogPostImages/alternativeEnergy.jpg")}
                        alt="Energía alternative"
                    />
                </div>
                <div className="postBriefing" style={{ textAlign: "center" }}>
                    <span>Ingeniería</span>
                    <h1>Estudio de viabilidad de una instalación de autoconsumo conectada a red</h1>
                    <span>Publicado el 04 de Diciembre de 2019 por GuilleHM</span>
                    <p>
                        Este trabajo ha evaluado la viabilidad económica de una instalación eólico-solar de autoconsumo de energía eléctrica para un domicilio particular, en el nuevo contexto que ha supuesto para este tipo de instalaciones la reciente aprobación en España del Real Decreto 244/2019, de 5 de abril...
                    </p>
                    <div className="postLink"><a href="/publicacion/estudio-viabilidad-instalacion-autoconsumo">Leer más</a></div>
                </div>
            </Card>
            <br></br>
            <Card>
                <div className="featuredPostImageWrapper">
                    <img
                        src={require("../../../blogPostImages/mapa8500.gif")}
                        alt="Mapa 8500"
                    />
                </div>
                <div className="postBriefing" style={{ textAlign: "center" }}>
                    <span>Visualización de Datos</span>
                    <h1>8500: ¿En cuánto tiempo morirían nuestros hijos?</h1>
                    <span>Publicado el 26 de Noviembre de 2019 por GuilleHM</span>
                    <p>
                        Según estimaciones de la ONG <a href="https://www.accioncontraelhambre.org/es/landing/8500-ninos-mueren-cada-dia-por-desnutricion-0">ACCIÓN CONTRA EL HAMBRE</a>, <b>8500 niños menores de 5 años mueren AL DÍA por desnutrición</b>....
                    </p>
                    <div className="postLink"><a href="/publicacion/8500-en-cuanto-tiempo-moririan-nuestros-hijos">Leer más</a></div>
                </div>
            </Card> */}
        </div>
    );
};

export default FeaturedPosts;
