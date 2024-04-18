import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Card from "./Card";

const Alldata = () => {
    const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(function (res) {
        // handle success
        console.log(res.data.products);
        setData(res.data.products);
      })
      .catch(function (err) {
        // handle error
        console.log(err);
      });
  }, []);
  
      return (
        <>
            <div className="bdcolor">
        <div className="container">
          <div className="row">
            
              {data.map((item) => {
                return (
                  <>
                    <div className="col-xxl-3">
                      <Card data={item} />
                    </div>
                  </>
                  )})}
            </div>
          </div>
        </div>
        </>
      )
}

export default Alldata