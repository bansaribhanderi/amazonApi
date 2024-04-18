import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import { useParams } from "react-router-dom";
import { CCarousel, CCarouselItem, CImage } from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";

export const SingalData = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then(function (res) {
        // handle success
        console.log(res.data);
        setData(res.data);
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
            <div className="card-singal-img d-flex">
              <CCarousel className="main" controls transition="crossfade">
                <CCarouselItem>
                  <CImage
                    className="d-block w-100"
                    src={data.images ? data.images[0] : ""}
                    alt="slide 1"
                  />
                </CCarouselItem>
                <CCarouselItem>
                  <CImage
                    className="d-block w-100"
                    src={data.images ? data.images[1] : ""}
                    alt="slide 2"
                  />
                </CCarouselItem>
                <CCarouselItem>
                  <CImage
                    className="d-block w-100"
                    src={data.images ? data.images[2] : ""}
                    alt="slide 3"
                  />
                </CCarouselItem>
                <CCarouselItem>
                  <CImage
                    className="d-block w-100"
                    src={data.images ? data.images[3] : ""}
                    alt="slide 3"
                  />
                </CCarouselItem>
                <CCarouselItem>
                  <CImage
                    className="d-block w-100"
                    src={data.images ? data.images[4] : ""}
                    alt="slide 3"
                  />
                </CCarouselItem>
              </CCarousel>

              <div className="card-text">
                <p className="title">{data.title}</p>
                <p className="cate">{data.category}</p>
                <p className="icon1 d-flex">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStarHalf />
                </p>
                <p className="rating">{data.rating}</p>
                <p className="price">{data.price}$</p>
                <p className="discount">
                  Discount : <b> {data.discountPercentage}%</b>
                </p>
                <p className="stock">
                  Stock : <b>{data.stock}</b>
                </p>
                <p className="descri">{data.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingalData;
