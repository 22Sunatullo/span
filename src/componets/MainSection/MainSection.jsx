import React from "react";
import { Button } from "../button/Button";

export const MainSection = () => {
  return (
    <section className="w-full xl:flex  mt-6 h-screen justify-between">
      <div className="relative w-2/4 order-2 xl:order-1 text-left mt-12">
        <h1 className="text-3xl  xl:text-8xl font-black mt-6 whitespace-pre-line">
          {`Make\n remote work`}
          <p className="text-medium-gray text-lg my-12 whitespace-pre-line">
            {` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ducimus at aperiam, unde corrupti sapiente. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod ducimus at aperiam, unde corrupti sapiente.`}
          </p>
        </h1>
        <Button isFilled={true}>Learn More</Button>
        <div className="flex justify-around absolute bottom-2">
          <span>Svg</span>
          <span>Sunatullo</span>
          <span>Sunatullo</span>
          <span>Svg</span>
        </div>
      </div>
      <div className="flex xl:w-2/4 mt-20 justify-center w-full mb-8 order-1">
        <img src="https://static.toiimg.com/photo/msid-53891743,width-96,height-65.cms" alt="" />
      </div>
    </section>
  );
};
