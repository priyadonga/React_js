import React from "react";
import Navbar from "./components/Navbar";
import Bannar from "./Bannar";
import Card from "./components/Card";
import { data } from "./data";
import Form from "./components/Form";

function App() {

  return (
    <>
      <Navbar />
      <Bannar/>
        <div className="row">
          <Card data={data}/>
        </div>
        <Form/>
    </>
  );
}

export default App;