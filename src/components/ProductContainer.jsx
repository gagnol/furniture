"use client"
import { useCallback } from "react";
import FeaturedProducts from "./FeaturedProducts";
import PropTypes from "prop-types";

const ProductContainer = ({ className = "" }) => {
  const onCTAContainerClick = useCallback(() => {
    // Please sync "Cart" to the project
  }, []);

  const onFrameContainerClick = useCallback(() => {
    // Please sync "Product Comparison" to the project
  }, []);

  const onShowMoreContainerClick = useCallback(() => {
    // Please sync "Shop " to the project
  }, []);

  return (
    <div
      className={`absolute top-[1610px] left-[102px] w-[1236px] h-[1084px] text-left text-base text-color-gray-1 font-poppins ${className}`}
    >
      <div
        className="absolute top-[1036px] left-[496px] w-[245px] h-12 cursor-pointer text-primary"
        onClick={onShowMoreContainerClick}
      >
        <div className="absolute top-[0px] left-[0px] bg-color-white box-border w-[245px] h-12 border-[1px] border-solid border-primary" />
        <div className="absolute top-[12px] left-[82px] leading-[150%] font-semibold">
          Show More
        </div>
      </div>
      <div className="absolute top-[80px] left-[0px] flex flex-row items-center justify-start gap-[32px]">
        <FeaturedProducts
          fixPrice="Rp 2.500.000"
          fixPrice1="Rp 3.500.000"
          productName="Syltherine"
          sortDescription="Stylish cafe chair"
          images="/images@2x.png"
          prop="-30%"
          showFixPrice
          showLabel
          showDiscount
          new1
          popUp
        />
        <FeaturedProducts
          fixPrice="Rp 2.500.000"
          fixPrice1="Rp 3.500.000"
          productName="Leviosa"
          sortDescription="Stylish cafe chair"
          images="/images1@2x.png"
          prop="-30%"
          showFixPrice={false}
          showLabel={false}
          showDiscount
          new1={false}
          popUp
          onCTAContainerClick={onCTAContainerClick}
          onFrameContainerClick={onFrameContainerClick}
        />
        <FeaturedProducts
          fixPrice="Rp 7.000.000"
          fixPrice1="Rp 14.000.000"
          productName="Lolito"
          sortDescription="Luxury big sofa"
          images="/images2@2x.png"
          prop="-50%"
          showFixPrice
          showLabel
          showDiscount
          new1={false}
          popUp={false}
        />
        <FeaturedProducts
          fixPrice="Rp 500.000"
          fixPrice1="Rp 14.000.000"
          productName="Respira"
          sortDescription="Outdoor bar table and stool"
          images="/images3@2x.png"
          prop="-50%"
          showFixPrice={false}
          showLabel
          showDiscount={false}
          new1
          popUp={false}
        />
      </div>
      <div className="absolute top-[558px] left-[0px] flex flex-row items-center justify-start gap-[32px]">
        <FeaturedProducts
          fixPrice="Rp 1.500.000"
          fixPrice1="Rp 3.500.000"
          productName="Grifo"
          sortDescription="Night lamp"
          images="/images4@2x.png"
          prop="-30%"
          showFixPrice={false}
          showLabel={false}
          showDiscount
          new1={false}
          popUp={false}
        />
        <FeaturedProducts
          fixPrice="Rp 150.000"
          fixPrice1="Rp 3.500.000"
          productName="Muggo"
          sortDescription="Small mug"
          images="/images5@2x.png"
          prop="-30%"
          showFixPrice={false}
          showLabel
          showDiscount={false}
          new1
          popUp={false}
        />
        <FeaturedProducts
          fixPrice="Rp 7.000.000"
          fixPrice1="Rp 14.000.000"
          productName="Pingky"
          sortDescription="Cute bed set"
          images="/images6@2x.png"
          prop="-50%"
          showFixPrice
          showLabel
          showDiscount
          new1={false}
          popUp={false}
        />
        <FeaturedProducts
          fixPrice="Rp 500.000"
          fixPrice1="Rp 14.000.000"
          productName="Potty"
          sortDescription="Minimalist flower pot"
          images="/images7@2x.png"
          prop="-50%"
          showFixPrice={false}
          showLabel
          showDiscount={false}
          new1
          popUp={false}
        />
      </div>
      <b className="absolute top-[0px] left-[486px] text-21xl leading-[120%] text-center">
        Our Products
      </b>
    </div>
  );
};

ProductContainer.propTypes = {
  className: PropTypes.string,
};

export default ProductContainer;
