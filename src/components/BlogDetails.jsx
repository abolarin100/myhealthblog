import React from "react";
import { useHistory, useParams } from "react-router-dom";
// import useFetch from "../useFetch";
import useFetch from "../useFetch";

const BlogDetails = ({blogs}) => {
  const { id } = useParams({blogs});
  const { data: blog, error, isPending } = useFetch('https://my-json-server.typicode.com/abolarin100/data/blogs' + id);
  const history = useHistory();

 

  return (
    <div className="blog-details">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <div key={blog.id}>
          <article>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
         
        </article>
        </div>
      )}
    </div>
  );
}
 
export default BlogDetails;