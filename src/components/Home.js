import React from "react";
import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('https://my-json-server.typicode.com/abolarin100/data/blogs')
  
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={blogs} /> }
      
    </div>
  );
}
 
export default Home;
