// import * as React from "react";
// import { useState, useEffect } from "react";
// import axios from "axios";
// const getLatestRepos = async () => {

//   const { get, loading, error, data } = await axios.get("https://api.github.com");
//   const [repos, setRepos] = useState([]);

//   useEffect(() => {
//     get("/users/usmanbinnaeem/repos").then(res => {
//       setRepos(
//         res?.sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 9)
//       );
//     });
//   }, []);

//   try {
//         return repos;
//   }catch(err){
// console.log(err);
//   }

  
// };

// export default getLatestRepos;
