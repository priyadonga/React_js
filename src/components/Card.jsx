import React, { useRef, useState } from 'react';
import one from "./img/img1.webp";
import two from "./img/img2.jpg";
import three from "./img/img3.webp";
import four from "./img/img4.webp";

const Card = () => {

  let name = useRef()
  let age = useRef()
  const [data, setdata] = useState([
    {
      id: 1,
      brand: "omega",
      price: "4065",
      img: one
    },
    {
      id: 2,
      brand: "tissot",
      price: "42000",
      img: two
    },
    {
      id: 3,
      brand: "analog",
      price: "2000",
      img: three
    },
    {
      id: 4,
      brand: "superior luxury",
      price: "3500",
      img: four
    },
    {
      id: 5,
      brand: "omega",
      price: "4065",
      img: one
    },
    {
      id: 6,
      brand: "tissot",
      price: "42000",
      img: two
    },
  ]);

  let deleteData = (id) => {
    console.log(id);
    setdata(data.filter((val) => val.id !== id))
  }

  return (
    <>
      {data.map((val) => (
        <div key={val.id} className='col-md-3' style={{ marginBottom: "4rem" }}>
          <div className="card" style={{ width: '18rem' }}>
            <img src={val.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Brand:- {val.brand}</h5>
              <p className="card-text">Price:- {val.price}</p>
              <button className="btn btn-primary" style={{ marginRight: "10px" }}>Add</button>
              <button onClick={() => deleteData(val.id)} className="btn btn-primary">Delete</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card
