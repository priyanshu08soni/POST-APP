import React, { useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";
import Spinner from "../components/Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import image from "../assets/background.png";
const Home = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [blogData, setBlogData] = useState();

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=651a7a002d4048b39da8d678e208ad84&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };
  useEffect(() => {
    document.title = `NewsFreak-${capitalizeFirstLetter(props.category)}`;
    updateNews();
    //eslint-disable-next-line
  }, []);
  // const handleNextClick=async()=>{
  //     setPage(page+1);
  //     updateNews();
  // }
  // const handlePreviousClick=async()=>{
  //   setPage(page-1);
  //   updateNews();
  // }
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=651a7a002d4048b39da8d678e208ad84&page=${
      page + 1
    }&pageSize=${props.pageSize}`;
    setPage(page + 1);

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  return (
    <>
      <div>
        <div className="gap-6 p-10 font-roboto" style={{ display: "flex" }}>
          <div style={{width:"55%"}}>
            <h1
              className="text-center text-white py-4"
              style={{ margin: "75px 0px 0px 0px" }}
            >
              Blogs-Top {capitalizeFirstLetter(props.category)} headlines
            </h1>
            {loading && <Spinner />}
            <InfiniteScroll
              dataLength={articles?.length}
              next={fetchMoreData}
              hasMore={articles?.length !== totalResults}
              loader={<Spinner />}
            >
              <div className="container ms-2">
                <div className="row">
                  {articles &&
                    articles?.map((element,index) => {
                      return (
                        <div
                          className="my-3"
                          style={{ height: "200px" }}
                          key={index}
                        >
                          <NewsItem
                            title={element.title ? element.title : ""}
                            description={
                              element.description ? element.description : ""
                            }
                            imageUrl={element.urlToImage}
                            newsUrl={element.url}
                            author={element.author}
                            date={element.publishedAt}
                            source={element.source.name}
                            setBlogData={setBlogData}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </InfiniteScroll>
          </div>
          <div
            className="grid custom-scrollbar"
            style={{
              position: "fixed",
              right: "5px",
              overflow: "scroll",
              top: "80px",
              width:"42%",
              bottom: "80px",
              marginRight: "10px",
              paddingBottom: "10px",
              borderRadius: "50px",
              backgroundImage: "radial-gradient(green -72%, skyblue 94%)",
            }}
          >
            <div>
              <img
                className="img-fluid p-5"
                src={blogData ? blogData?.imageUrl : image}
                style={{ borderRadius: "100px" }}
                alt=""
              />
            </div>
            <div className="px-5 pt-4">
              <span
                className="badge rounded-pill bg-danger"
                style={{ marginTop: "5px", marginRight: "5px" }}
              >
                {blogData?.source?.name}
              </span>
              <p className="card-text">
                <small className="text-muted">
                  By {blogData?.author ? blogData?.author : "Unknown"} on{" "}
                  {new Date(blogData?.date).toGMTString()}
                </small>
              </p>
              <b className="card-title">
                {blogData
                  ? blogData?.title
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis."}
              </b>
              <p className="card-description custom-scrollbar">
                {blogData
                  ? blogData?.description
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, blanditiis."}
              </p>
              <a
                rel="noreferrer"
                href={blogData?.newsUrl}
                target="_blank"
                className="btn btn-dark"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Home.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};
Home.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default Home;
