import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

const comp = notes.map((obj) => (
  <Note title={obj.title} content={obj.content} />
));

function App() {
  return (
    <div>
      <Header />
      {comp}
      <Footer />
    </div>
  );
}

export default App;
