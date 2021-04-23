import React, { Component } from "react";
import classes from "./product.module.css";

class ProductDetail extends Component {
  colorOptions = this.props.data.colorOptions.map((item, pos) => {
    const cssClassArr = [classes.productImage];
    if (pos === this.props.currentPreviewImagePos) {
      cssClassArr.push(classes.selectedProductImage);
    }
    return (
      <img
        key={pos}
        p={this.props.currentPreviewImagePos}
        className={cssClassArr.join(" ")}
        src={item.imageUrl}
        alt={item.styleName}
        onClick={() => this.props.onColorOptionClick(pos)}
      />
    );
  });

  featureOptions = this.props.data.featureList.map((item, pos) => {
    const featureCssArr = [classes.FeatureItem];
    console.log(pos, this.props.currentSelectedFeature);
    if (pos === this.props.currentSelectedFeature) {
      featureCssArr.push(classes.selectedFeatureItem);
    }

    return (
      <button
        onClick={() => this.props.onFeatureItemClick(pos)}
        key={pos}
        className={featureCssArr.join(" ")}
      >
        {" "}
        {item}{" "}
      </button>
    );
  });

  render() {
    return (
      <div className={classes.detail}>
        <h1 className={classes.productTitle}>{this.props.data.title}</h1>
        <p className={classes.productDescription}>
          {this.props.data.description}
        </p>
        <h3>Select Color</h3>
        <div>{this.colorOptions}</div>
        <h3>Features</h3>
        <div>{this.featureOptions}</div>
        <button className={classes.BuyButton}>Buy Now</button>
      </div>
    );
  }
}

export default ProductDetail;
