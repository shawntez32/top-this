import React, { useState } from "react";
import Header from "./Header";
import HomeImage from "./HomeImage";
import Footer from "./Footer";
import TopThis from "./TopThis";
import {Menu,toppingClicked} from "./Menu";
import BurgerTopping from "./BurgerToppings";
import routes from "./routes";
import Home from "./Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


function Apple() {
  const [notes, setNotes] = useState([]);
  const [route, curRoute] = useState("none");
  const [toppingClicked, clicker] = useState(false);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function clicked() {
    clicker(true);
    console.log(curRoute);
  }

  function homeClicked() {
    clicker(false);
  }

  var home = <Header/>
  var dinners = <Menu/>
  var homie = <Header/>;

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DinnerTopping" element={<BurgerTopping />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default Apple;
