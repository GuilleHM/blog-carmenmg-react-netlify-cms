import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/Footer/footer';
import './index.css';
// import "typeface-raleway";
import Home from "./pages/home";
import Recipes from "./pages/recipes";
// import About from "./pages/about";
import Post from "./pages/post";
import SearchResults from "./pages/searchresults";
import NotFound from "./pages/notfound";

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/recetas/:tipo" render={props => <Recipes {...props} />} />
            <Route exact path="/post/:id" render={props => <Post {...props} />} />
            <Route exact path="/resultados-de-la-busqueda" component={SearchResults} />
            <Route exact path="/404" component={NotFound} />
            {/* <Route exact path="/about" component={About} /> */}
        </div>
        <Footer />
    </Router>,
    document.getElementById('root')
);

