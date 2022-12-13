import React, { useState } from "react";
import Header from "./Header";
import HomeImage from "./HomeImage";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import TopThis from "./TopThis";
import {Menu,toppingClicked} from "./Menu";
import BurgerTopping from "./BurgerToppings";


function Apple() {
  const [notes, setNotes] = useState([]);
  const [toppingClicked, clicker] = useState(false);
  const [route, curRoute] = useState("");

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function clicked() {
    clicker(true);
  }

  var routes = {"header": <Header/>, "bg": <BurgerTopping/>,"home": <div>
<Header />
<HomeImage />
<TopThis />
<Menu
onClick={clicked}
 />
<Footer />
</div>}

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    toppingClicked ? {curRoute} : <div>
      <Header />
      <HomeImage />
      <TopThis />
      <Menu
      onClick={clicked}
       />
      <Footer />
    </div>
  );
}

export default Apple;
