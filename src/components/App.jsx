import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {Menu,toppingClicked} from "./Menu";
import BurgerTopping from "./BurgerToppings";
import Home from "./Home";
import {HashRouter as Router, Route, Routes} from "react-router-dom";
import SaladTopping from "./SaladToppings";
import SoupTopping from "./SoupToppings";
import ContactUs from "./ContactUs";
import JoinUs from "../JoinUs";


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
    <Router basename="">
      <div>
        <Header/>
        <Routes>
          <Route exact path="/DinnerTopping" element={<BurgerTopping />} />
          <Route exact path="/SaladTopping" element={<SaladTopping/>} />
          <Route exact path="/SoupTopping" element={<SoupTopping />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
          <Route exact path="/JoinUs" element={<JoinUs />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default Apple;
