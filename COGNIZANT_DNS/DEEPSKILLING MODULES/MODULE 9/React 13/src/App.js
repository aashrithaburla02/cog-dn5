import React from "react";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (

    <div style={{marginLeft:"40px"}}>

      <h1>Blogger Application</h1>

      {showBooks && <BookDetails />}

      {showBlogs ? <BlogDetails /> : null}

      {showCourses ? <CourseDetails /> : null}

    </div>

  );

}

export default App;