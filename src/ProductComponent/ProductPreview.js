import React from "react";
import classes from "./product.module.css";

const ProductPreview = (props) => {
  return (
    <div className={classes.preview}>
      <img src={props.previewImage} alt="" />

      {props.currentSelectedFeature === 1 ? (
        <div className={classes.FeatureDataHeart}>
          <i
            className="fa fa-heartbeat"
            style={{ fontSize: 40, color: "red" }}
          ></i>
          <p> 78 </p>
        </div>
      ) : (
        <div className={classes.FeatureDataTime}>
          <p>{`${new Date().getHours()} : ${new Date().getMinutes()}`}</p>
        </div>
      )}
    </div>
  );
};

export default ProductPreview;
