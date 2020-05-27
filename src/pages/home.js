import React from "react"

import Header from '../components/Header/header';
import Logo from '../components/Logo/logo';
import Navbar from '../components/Navbar/navbar';
import MainLayout from '../components/MainLayout/mainlayout';
import FeaturedPosts from '../components/FeaturedPosts/featuredposts';
// import Layout from "../components/layout"
// import PostList from "../components/postlist"
import "./pages.css"

const Home = () => {
    return (
        <div>
            <div className="hero">
                <Header />
                <Logo title="Las Recetas de Carmen" page="Inicio" />
            </div>
            <Navbar />
            <MainLayout>
                <FeaturedPosts />
            </MainLayout>
        </div>
    )
}

export default Home