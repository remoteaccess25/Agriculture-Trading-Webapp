import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Vegicontext } from "../Components/context/vegetablecontext/VegitableContext";
import "./SingleVegetable.css";
import background1 from "../Images/background1.png";

export default function SingleVegetable() {
  const { id } = useParams();

  const { dispatch, singleVegiData, isLoadingVegi, VegetablePresent } =
    useContext(Vegicontext);

  const getSingleVegiInfo = async () => {
    try {
      const result = await axios.get(
        `http://localhost:8000/products/vegetables/${id}`
      );

      // console.log("single products",result.data)

        dispatch({ type: "SET_SINGLE_VEGI_INFO", payload: result?.data });
      // console.log("data::::", result?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleVegiInfo();
  }, []);

  const showSingleVegi = () => {
    if (isLoadingVegi === false) {
      if (VegetablePresent === true) {
        return (
          <div className="SV_alldata">
            <div className="SV_info">
              <p> Name :{singleVegiData?.product?.productName}</p>
              <p> Type :{singleVegiData?.product?.productType}</p>
              <p>Size :{singleVegiData?.product?.productSize}</p>
              <p>Market :{singleVegiData?.product?.marketName}</p>
              <p>City : {singleVegiData?.product?.city}</p>
              <p>Min Price :{singleVegiData?.product?.minPrice}</p>
              <p>Max Price :{singleVegiData?.product?.maxPrice}</p>
              <p>Manager :{singleVegiData?.product?.managerName}</p>
              <p>Market Contact :{singleVegiData?.product?.marketContact}</p>
            </div>

            <div className="SV_image">
              <img className="image1" src={singleVegiData?.product?.image} alt="image1" />
            </div>
          </div>
        );
      } else {
        return <div>...No data found</div>;
      }
    } else {
      return (
        <>
          <div>...Loading</div>
        </>
      );
    }
  };

  useEffect(() => {
    console.log("hello");
  }, [singleVegiData]);

  return (
    <>
      <div className="Single_Vegetable_main_div">
        <div className="SV_div1">
          <div className="back_white_image"></div>
          <div className="back_image_div">
            <img className="back_image" src={background1} alt="" />
          </div>
          <div className="content_div">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            explicabo atque corporis earum iusto, non iste ab illum natus
            veniam.
          </div>

          {/* <div className="SV_image_div">
      
      </div>
      <div className="SV_content_div">
        <div className="SV1_inner_contetnt">
        <p>For more such products </p>
        <p>Stay Updated</p>
        </div>
      </div> */}
        </div>

        <div className="SV_div2">
          {/* <div className="back_white_image_right"></div> */}
          {showSingleVegi()}
        </div>

        {/* <div className="map_div">
              
              <div className="inner_map_div">
                    map
              </div>
            </div>
     */}
      </div>
    </>
  );
}
