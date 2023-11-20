import React from "react";
import Header from "../components/Header";
import Map from "../components/Map";
import Footer from "../components/Footer";
import Funcionamiento from "../resources/ComoFunciona.png";

const Home = () => {
    return (
        <>
            <Header />
            <img
                src={Funcionamiento}
                style={{ width: "90%", height: "80%", display: "block", margin: "auto" }}
                alt="Funcionamiento"
            />
            <Footer />
        </>
    );
};

export default Home;
