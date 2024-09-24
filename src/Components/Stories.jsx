import React, { useEffect } from "react";
import { useGlobalContext } from "../context";
function Stories() {
  const { hits, nbpages, isloading, removePost } = useGlobalContext();
  if (isloading || !hits) {
    return (
      <div className="searching-post-text">
        <h2>post searching..</h2>
      </div>
    );
  }
  return (
    <>
      <div className="stories-container">
        {hits.map((curPost) => {
          const { title, author, objectID, url, num_comments, created_at } =
            curPost;
          return (
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By <span>{author}</span> | <span>{num_comments}</span> comments
                Posted at <span>{created_at}</span>
              </p>
              <div className="card-button">
                <a className="readmore" href={url} target="_blank">
                  Read More
                </a>
                <a
                  className="remove"
                  href="#"
                  onClick={() => removePost(objectID)}
                >
                  Remove
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default Stories;
