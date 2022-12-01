import React, { useState } from "react";
import Header from "./Header";
import HomeImage from "./HomeImage";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import TopThis from "./TopThis";
import Menu from "./Menu";
import BurgerTopping from "./BurgerToppings";

var toppingClicked = false;

function Apple() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    toppingClicked ? <BurgerTopping /> : <div>
      <Header />
      <HomeImage />
      <TopThis />
      <Menu />
      <Footer />
    </div>
  );
}

export default Apple;
