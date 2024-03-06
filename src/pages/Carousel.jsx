import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import left from "../../public/icon/left.svg";
import right from "../../public/icon/right.svg";

function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "40px",
            height: 30,
            lineHeight: 1,
            width: 30,
          },
          children: (
            <img
              className="widht-[30px] height-[30px] absolute"
              src={left}
              alt="left"
            />
          ),
        }}
        backwardBtnProps={{
          style: {
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            lineHeight: 1,
            height: 30,
            width: 30,
          },
          children: (
            <img
              className="widht-[30px] height-[30px] absolute mt-[780px] pl-24"
              src={right}
              alt="right"
            />
          ),
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        {}

        <div
          className="mx-auto"
          style={{
            width: 1520,
            height: 750,
            backgroundImage: "url('/public/images/img1.svg')",
          }}
        ></div>
        <div
          className="mx-auto"
          style={{
            width: 1520,
            height: 750,
            backgroundImage: "url('/public/images/img2.svg')",
          }}
        ></div>
        <div
          className="mx-auto"
          style={{
            width: 1520,
            height: 750,
            backgroundImage: "url('/public/images/img3.svg')",
          }}
        ></div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;
