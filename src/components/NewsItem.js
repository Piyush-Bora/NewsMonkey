import React from "react";
// import PropTypes from "prop-types";

const NewsItem = (props) => {
  return (
    <div className=" cards max-w-[30rem] m-6 max-h-full rounded-lg flex flex-col hover:scale-105 transform duration-300 drop-shadow-2xl md:m-0 md:w-[28rem]">
      <div className="absolute -top-2 -right-1 z-10">
        <span className="badge h-6 rounded-xl bg-blue-500 px-2 py-[1px] text-sm">
          {props.src}
        </span>
      </div>
      <div className="img focus:outline-none">
        <img
          src={
            props.imgUrl
              ? props.imgUrl
              : "https://images.moneycontrol.com/static-mcnews/2022/01/Digital-Loan_pic.jpg"
          }
          alt="Portfolio bg img"
          className="rounded-t-lg object-cover h-64 w-full focus:outline-none"
        />
      </div>
      <div className="text-part bg-white flex flex-col justify-between rounded-b-lg focus:outline-none">
        <span className="p-2 font-nunito font-bold text-xl text-center">
          {props.title}...
        </span>
        <hr className="bg-gray-700 mx-5" />
        <p className="p-5 font-nunito text-sm text-justify">{props.desc}...</p>
        <a
          rel="noreferrer"
          href={props.newsUrl}
          target="_blank"
          className="m-3"
        >
          <button className="bg-blue-900 text-white rounded-lg p-2 min-w-full">
            Learn More
          </button>
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
