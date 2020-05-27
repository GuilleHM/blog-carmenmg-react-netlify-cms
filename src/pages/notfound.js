import React from "react"
import Layout from "../components/layout"
import "./pages.css"
import Header from "../components/Header/header"

const NotFound = () => {
    return (
        <React.Fragment>
            <Header />
            <Layout>
                <h1 className="notfound" style={{ marginTop: "25%", fontFamily: "Dawning of a New Day", fontSize: "2rem" }}>¡Upss! Esta receta no existe... prueba con otra. :) </h1>
            </Layout>
        </React.Fragment>
    )
}

export default NotFound