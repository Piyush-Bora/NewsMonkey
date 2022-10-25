import React, { useEffect, useState } from "react";
// import PropTypes from "prop-types";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=498f99e7835c4c1b834d8fe9ecb799a5&page=${page}&pageSize=10`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
    //eslint-disable-next-line
  }, []);

  // const handlePrev = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //   //   props.category
  //   // }&apiKey=498f99e7835c4c1b834d8fe9ecb799a5&pageSize=12&page=${page - 1}`;
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
  //   // console.log(parsedData);
  //   setPage(page - 1);
  //   // setArticles(parsedData.articles);
  // };

  // const handleNext = async () => {
  //   // if (page + 1 > Math.ceil(this.state.totalResults / 20)) {
  //   // } else {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
  //   //     props.category
  //   //   }&apiKey=498f99e7835c4c1b834d8fe9ecb799a5&pageSize=12&page=${page + 1}`;
  //   //   let data = await fetch(url);
  //   //   let parsedData = await data.json();
  //   //   console.log(parsedData);
  //     setPage(page + 1);
  //     // setArticles(parsedData.articles);
  //   // }
  // };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=498f99e7835c4c1b834d8fe9ecb799a5&page=${page+1}&pageSize=10`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="cardCont flex flex-wrap min-w-screen justify-center box-border my-5">
          {articles.map((element) => {
            return (
              <div key={element.url} className="my-2 md:mx-4 md:my-4">
                <NewsItem
                  // mode="false"
                  title={element.title ? element.title.slice(0, 30) : ""}
                  desc={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  newsUrl={element.url}
                  imgUrl={element.urlToImage}
                  src={element.source.name}
                />
              </div>
            );
          })}
        </div>
      </InfiniteScroll>
      {/* <div className="flex justify-between mx-16">
        <button
          disabled={page <= 1}
          className="bg-blue-900 text-white rounded-lg p-3 mb-5 disabled:opacity-75"
          onClick={handlePrev}
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / 20)}
          className="bg-blue-900 text-white rounded-lg p-3 mb-5 disabled:opacity-75"
          onClick={handleNext}
        >
          Next &rarr;
        </button>
      </div> */}
    </>
  );
};

export default News;
