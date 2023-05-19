import React, { useEffect, useState } from "react";
import "./Cards.css";
import { AdminContext } from "../context/Admin/Admin";
import { useContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Link } from "react-router-dom";


export default function Cards(props) {
  const { dispatch, isLogedIn, token } = useContext(AdminContext);

  const [data, setData] = useState({
    productName: "",
    productType: "",
    marketName: "",
    city: "",
    minPrice: Number,
    maxPrice: Number,
    managerName: "",
    marketContact: Number,
    recomended: true,
  });

  const handelInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  // console.log("token",token)
  const checkLogin = () => {
    const mycookies = Cookies.get("admin");
    const localToken = localStorage.getItem("token");

    if (mycookies !== undefined) {
      dispatch({ type: "LOGIN" });
      dispatch({ type: "TOKEN", payload: localToken });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  };

  useEffect(() => {
    console.log("card", token);
    checkLogin();
  }, []);

  const deleteProduct = async () => {
    const id = props.data._id;
    try {
      // console.log("going")
      const result = await axios.delete(
        `http://localhost:8000/admin/delete/${id}`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );

      console.log("delete result", result);
    } catch (error) {
      console.log(error);
    }
  };

  //  /admin/delete/:id
  // console.log(props.data._id)

  //update product
  const [showUpdate, setShowUpdate] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  const handelUpdate = (e) => {
    e.preventDefault();
    setBackdrop(true);
    setShowUpdate(true);
  };

  const Update = async (e) => {
    e.preventDefault();

    const token = Cookies.get("admin");

    alert(token);

    try {
      const id = props.data._id;

      const result = await axios.patch(
        `http://localhost:8000/admin/update/${id}`,
        data,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      );

      setShowUpdate(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* {alert(props.name)} */}

      {}

      <div className={showUpdate ? "close" : "dummycards_div"}>
        <div className="cards_upper_div">
          <div className="name_image">
            <p className="product_name">{props.data?.productName}</p>
            <div className="image_div">
              {/* {console.log("images",props.image.contentType)} */}
              <img className="cards_image" src={props.data?.image} alt="" />
            </div>
          </div>
        <div className="info_price">
          <div className="cards_info">
            <p className="min_price">Min Price: {props.data?.minPrice}</p>
            <p className="max_price">Max Price: {props.data?.maxPrice}</p>
            <p className="size">Size: {props.data?.productSize}</p>
            <p className="market">Market: {props.data?.marketName}</p>
          </div>
          <div className="cards_lower_div">
            <Link to={`/product/${props.name}/${props.data._id}`}>
              <div className="viewallHeading">View all</div>
            </Link>
          </div>
        </div>
        </div>

        
        {isLogedIn && (
          <div className="admin_option">
            <button className="admin_button" onClick={handelUpdate}>
              update
            </button>
            <button className="admin_button" onClick={() => deleteProduct()}>
              delete
            </button>
          </div>
        )}
      </div>
      {showUpdate && (
        <>
          <form className={showUpdate ? "drop" : "none"} onSubmit={Update}>
            <input
              className="udpadte_inputs"
              type="text"
              value={data.productName}
              name="productName"
              placeholder="ProductName"
              onChange={handelInputs}
            />

            <input
              className="udpadte_inputs"
              type="text"
              value={data.productType}
              name="productType"
              placeholder="ProductType"
              onChange={handelInputs}
            />

            <input
              className="udpadte_inputs"
              type="text"
              value={data.marketName}
              name="marketName"
              placeholder="marketName"
              onChange={handelInputs}
            />

            <input
              className="udpadte_inputs"
              type="text"
              value={data.city}
              name="city"
              placeholder="city"
              onChange={handelInputs}
            />

            <input
              className="udpadte_inputs"
              type="number"
              value={data.minPrice}
              name="minPrice"
              placeholder="minPrice"
              onChange={handelInputs}
            />

            <input
              className="udpadte_inputs"
              type="number"
              value={data.maxPrice}
              name="maxPrice"
              placeholder="maxPrice"
              onChange={handelInputs}
            />

            <input
              className="udpadte_inputs"
              type="text"
              value={data.managerName}
              name="managerName"
              placeholder="managerName"
              onChange={handelInputs}
            />

            <input
              className="udpadte_inputs"
              type="number"
              value={data.marketContact}
              name="marketContact"
              placeholder="marketContact"
              onChange={handelInputs}
            />

            <label htmlFor="recomended">
              <input
                className="udpadte_inputs"
                type="checkbox"
                name="recomended"
                value={data.recomended}
                onChange={handelInputs}
              />
            </label>

            <div className="update_btn_div">
              <button className="update_submit" type="submit">
                Submmit
              </button>
              <button
                className="close_drop_btn"
                onClick={() => {
                  setShowUpdate(false);
                }}
              >
                Close
              </button>
            </div>
          </form>
        </>
      )}
    </>
  );
}

// return (
//   <>
//     {/* {alert(props.name)} */}

//     {}

//     <div className={showUpdate ? "close" : "dummycards_div"}>
//         <div className="cards_upper_div">
//           <div className="image_div">
//             {/* {console.log("images",props.image.contentType)} */}
//             <img className="cards_image" src={props.data.image} alt="" />
//           </div>

//           <div className="cards_info">
//             <p className="product_name">{props.data.productName}</p>
//             <p className="min_price">Min Price: {props.data.minPrice}</p>
//             <p className="max_price">Max Price: {props.data.maxPrice}</p>
//             <p className="size">Size: {props.data.productSize}</p>
//             <p className="market">Market: {props.data.marketName}</p>
//           </div>
//         </div>

//         <div className="cards_lower_div">
//         <Link to={`/product/${props.name}/${props.data._id}`}>

//           <div className="viewallHeading">View all</div>
//       </Link>

//         </div>
//       {isLogedIn && (
//         <div className="admin_option">
//           <button className="admin_button" onClick={handelUpdate}>
//             update
//           </button>
//           <button className="admin_button" onClick={()=>deleteProduct()}>
//             delete
//           </button>
//         </div>
//       )}
//     </div>
//     {showUpdate && (
//       <>
//         <form className={showUpdate ? "drop" : "none"} onSubmit={Update}>
//           <input
//             className="udpadte_inputs"
//             type="text"
//             value={data.productName}
//             name="productName"
//             placeholder="ProductName"
//             onChange={handelInputs}
//           />

//           <input
//             className="udpadte_inputs"
//             type="text"
//             value={data.productType}
//             name="productType"
//             placeholder="ProductType"
//             onChange={handelInputs}
//           />

//           <input
//             className="udpadte_inputs"
//             type="text"
//             value={data.marketName}
//             name="marketName"
//             placeholder="marketName"
//             onChange={handelInputs}
//           />

//           <input
//             className="udpadte_inputs"
//             type="text"
//             value={data.city}
//             name="city"
//             placeholder="city"
//             onChange={handelInputs}
//           />

//           <input
//             className="udpadte_inputs"
//             type="number"
//             value={data.minPrice}
//             name="minPrice"
//             placeholder="minPrice"
//             onChange={handelInputs}
//           />

//           <input
//             className="udpadte_inputs"
//             type="number"
//             value={data.maxPrice}
//             name="maxPrice"
//             placeholder="maxPrice"
//             onChange={handelInputs}
//           />

//           <input
//             className="udpadte_inputs"
//             type="text"
//             value={data.managerName}
//             name="managerName"
//             placeholder="managerName"
//             onChange={handelInputs}
//           />

//           <input
//             className="udpadte_inputs"
//             type="number"
//             value={data.marketContact}
//             name="marketContact"
//             placeholder="marketContact"
//             onChange={handelInputs}
//           />

//           <label htmlFor="recomended">
//             <input
//               className="udpadte_inputs"
//               type="checkbox"
//               name="recomended"
//               value={data.recomended}
//               onChange={handelInputs}
//             />
//           </label>

//           <div className="update_btn_div">
//             <button className="update_submit" type="submit">
//               Submmit
//             </button>
//             <button
//               className="close_drop_btn"
//               onClick={() => {
//                 setShowUpdate(false);
//               }}
//             >
//               Close
//             </button>
//           </div>
//         </form>
//       </>
//     )}
//   </>
// );
