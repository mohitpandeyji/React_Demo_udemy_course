import React, { Component } from "react";
import classes from "./product.module.css";
import ProductPreview from "./ProductPreview";
import ProductDetail from "./ProductDetail";
const ProductData = {
  title: "FitBit 19 - The Smartest Watch",
  description:
    "Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor Lorem ipsum dolor.",
  colorOptions: [
    {
      styleName: "Black Strap",
      imageUrl: "https://imgur.com/iOeUBV7.png",
    },
    {
      styleName: "Red Strap",
      imageUrl: "https://imgur.com/PTgQlim.png",
    },
    {
      styleName: "Blue Strap",
      imageUrl: "https://imgur.com/Mplj1YR.png",
    },
    {
      styleName: "Purple Strap",
      imageUrl: "https://imgur.com/xSIK4M8.png",
    },
  ],
  featureList: ["Time", "Heart Rate"],
};

class Product extends Component {
  state = {
    productData: ProductData,
    currentPreviewImagePos: 0,
    currentSelectedFeature: 0,
  };
  onColorOptionClick = (pos) => {
    this.setState({ currentPreviewImagePos: pos });
  };

  onFeatureItemClick = (pos) => {
    console.log(pos);
    let updatedState = 0;
    if (pos === 1) {
      updatedState = 1;
    }
    this.setState({ currentSelectedFeature: updatedState });
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log("InsideshouldComponentUpdate");

    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    console.log("current state", this.state);
    console.log(
      nextState.currentPreviewImagePos === this.state.currentPreviewImagePos
    );
//    if (
//      nextState.currentPreviewImagePos === this.state.currentPreviewImagePos
//    ) {
//      return false;
//    }

    return true;
  }

  render() {
    console.log("Inside RENDER product.js");

    return (
      <div className={classes.body}>
        <header>
          <nav className={classes.Topbar}>
            <img
              src="https://i.dlpng.com/static/png/197684_preview.png"
              alt="AMAZON"
            />
          </nav>
        </header>
        <div className={classes.MainContainer}>
          <ProductPreview
            previewImage={
              this.state.productData.colorOptions[
                this.state.currentPreviewImagePos
              ].imageUrl
            }
            currentSelectedFeature={this.state.currentSelectedFeature}
          />
          <ProductDetail
            data={this.state.productData}
            onColorOptionClick={this.onColorOptionClick}
            currentPreviewImagePos={this.state.currentPreviewImagePos}
            onFeatureItemClick={this.onFeatureItemClick}
            currentSelectedFeature={this.state.currentSelectedFeature}
          />
        </div>
      </div>
    );
  }
}

Object.freeze(ProductData); //This line of code just makes your object as a constant. No values can be updated.

export default Product;
