import React, { useState} from "react";
import Footer from "./Footer";
import Header from "./Header";
import HomeImage from "./HomeImage";
import TopThis from "./TopThis";
import {Menu,toppingClicked} from "./Menu";

function Home() {
    return (
        <>
        <HomeImage />
        <TopThis />
        <Menu/>
        </>
    )
}

export default Home;