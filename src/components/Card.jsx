import React from 'react'
const Card = ({ data }) => {
  return (
    <>
      {
        data.map((val, ind) => {
          return (
            <React.Fragment key={ind}>
              <div className='col-md-3' style={{marginBottom:"4rem"}}>
                <div className="card" style={{width:'18rem'}}>
                  <img src={val.img} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Brand:- {val.brand}</h5>
                    <p className="card-text">Price:- {val.price}</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>
                </div>
              </div>
            </React.Fragment>
          )
        })
      }
    </>
  )
}
export default Card;
