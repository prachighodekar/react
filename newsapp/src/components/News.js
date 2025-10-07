import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizedFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
    setLoading(true);
    const data = await fetch(url);
    props.setProgress(30);
    const parsedData = await data.json();
    props.setProgress(60);
    setArticles(parsedData.articles || []);
    setTotalResults(parsedData.totalResults || 0);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizedFirstLetter(props.category)} - News App;`
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const nextPage = page + 1;
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${nextPage}&pageSize=${props.pagesize}`;
    const data = await fetch(url);
    const parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles || []));
    setTotalResults(parsedData.totalResults || totalResults);
    setPage(nextPage);
    setLoading(false);
  };

  return (
    <>
      <h2 className="text-center" style={{margin:'35px 0px', marginTop:'90px'}}>
        News App - Top {capitalizedFirstLetter(props.category)} Headlines
      </h2>

      {loading && <Spinner />}

      <InfiniteScroll
        dataLength={articles ? articles.length : 0}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
        endMessage={
          <p className="text-center my-3">
            <b>
              {articles.length === 0
                ? "No news available 😕"
                : "Yay! You have seen it all 🎉"}
            </b>
          </p>
        }
      >
        <div className="container">
          <div className="row">
            {articles &&
              articles.map((element, index) => {
                if (!element) return null;

                return (
                  <div className="col-md-4" key={element.url || index}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : "No Title"}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : "No description available"
                      }
                      imageUrl={
                        element.urlToImage ||
                        "https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg"
                      }
                      newsUrl={element.url}
                      author={element.author || "Unknown"}
                      date={element.publishedAt}
                      source={element.source?.name || "Unknown"}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "us",
  pagesize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};


export default News;
