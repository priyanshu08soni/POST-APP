import React from "react";
import image from "../assets/background.png";
const NewsItem = (props) => {
  let { title,description,newsUrl,setBlogData, imageUrl, author, date, source } = props;
  return (
    <>
      <div>
        <div
          className="card flex flex-row"
          style={{ borderRadius: "20px", height: "200px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span
              className="badge rounded-pill bg-danger"
              style={{ marginTop: "5px", marginRight: "5px" }}
            >
              {source}
            </span>
          </div>
          <img
            src={!imageUrl ? image : imageUrl}
            style={{ borderRadius: "20px",width:"350px"}}
            className="card-img-topv"
            alt="..."
          />
          <div className="card-body">
            <div>
            <p className="card-title">{title} </p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            </div>
            <button
              rel="noreferrer"
              onClick={()=>setBlogData({ title ,description,newsUrl,setBlogData, imageUrl, author, date, source })}
              target="_blank"
              className="btn"
              style={{backgroundImage:"linear-gradient(green -12%, skyblue 102%)"}}
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
