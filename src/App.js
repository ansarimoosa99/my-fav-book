import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // var buttonList = ["Fiction", "Mythology", "Non-Fiction"];
  // var fictionList = ["Harry", "Potter", "Fight-Club"];
  // var nonFictionList = ["abc", "cfc"];
  // var mythologyList = ["mmm", "mum"];

  const bookDB = {
    Romance: [
      { name: "Small Foot", rating: "4.2/5" },
      { name: "Cloudy and the MeetBalls", rating: "4/5" },
      { name: "Boss Baby", rating: "3.7/5" }
    ],

    SuperHero: [
      { name: "Astro Boy", rating: "4.8/5" },
      { name: "Big Hero 6", rating: "4.3/5" },
      { name: "The Invincible", rating: "4/5" }
    ],

    Comedy: [
      { name: "The Pets", rating: "4.5/5" },
      { name: "Toy Story", rating: "5/5" },
      { name: "How to train your Dragon", rating: "4.2/5" }
    ]
  };
  // var bookDictionary = {
  //   Harry: "4.5",
  //   Potter: "4.7",
  //   "Fight-Club": "5",
  //   abc: "3",
  //   cfc: "4",
  //   mmm: "4.2",
  //   mum: "4"
  // };

  const [SelectedGenre, setGenre] = useState("Romance");

  function buttonClickHandler(genre) {
    console.log(genre);
    setGenre(genre);
  }

  return (
    <div className="App">
      <h1>My favourie books</h1>
      <p>Select the genre to check the books!</p>
      {Object.keys(bookDB).map((genre) => {
        return (
          <button onClick={() => buttonClickHandler(genre)}>{genre}</button>
        );
      })}
      <hr />

      <ul>
        {/* {bookDB[SelectedGenre].map((movie) => (
            <li>
              <div style={{ fontSize: "larger", margin: "0.5rem" }}>
                {movie.name}
              </div>
              <div style={{ fontSize: "smaller" }}>{movie.duration}</div>
            </li>
          ))} */}
        {bookDB[SelectedGenre].map((book) => {
          return (
            <li>
              <div>{book.name}</div>
              <div style={{ fontSize: "small" }}>{book.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
