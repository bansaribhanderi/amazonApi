import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { Link } from "react-router-dom";

function Card({ data }) {
  console.log(data);
  return (
    <>
      <div className="card">
        <div className="card-img">
          <Link to={`/SingalData/${data.id}`}>
            <img src={data.thumbnail} alt="" />
          </Link>
          <p className="title">{data.title}</p>
          <p className="cate">{data.category}</p>
          <p className="icon2 d-flex">
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
    </>
  );
}

export default Card;