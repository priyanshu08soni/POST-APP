import React from "react";
import image from "../assets/background.png";
const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
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
            <p className="card-title">{title} </p>
            <p className="card-text">{description.substr(0, 70) + "..."}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
