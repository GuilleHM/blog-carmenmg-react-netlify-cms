import React from "react";
// import Markdown from "react-markdown";
// import { Link } from "react-router-dom";

import "../components.css";
import "./filteredposts.css";

import Card from '../Card/card';

// import postlist from "../posts.json";
import AllPosts from '../../posts.json';


const FilteredPosts = (props) => {
    // const excerptList = AllPosts.map(post => {
    //     return post.content.split(" ").slice(0, 20).join(" ") + "..."
    // })

    let singularType = props.type.slice(0, -1);

    return (
        <div className="filteredPostsContainer">
            <Card>
                <div className="filteredPostsHeader">
                    <span>{props.type}</span>
                </div>
            </Card>
            <br></br>
            <div className="filteredPosts">
                {AllPosts.length &&
                    AllPosts.map((post, i) => {
                        if (post.type.trim() === singularType.trim()) {
                            return (
                                <Card key={i} className="postCard">
                                    <div className="filteredPostImageWrapper">
                                        {post.image && <img className="imageFilteredPostImage" src={require(`../../assets/recipeImages/${post.image.trim()}`)} alt={post.title} />}
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
                            return null;
                        }
                    })
                }
            </div>
        </div>
    );
};

export default FilteredPosts;
