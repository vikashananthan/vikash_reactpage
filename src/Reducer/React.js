// import React from 'react'
// import {useState,useEffect} from 'react'
// export default function Effect() {
//     const {data, setData}=useState(null);
//     useEffect(() => {
//        fetch("https://jsonplaceholder.typicode.com/todos/1")
//        .then(response=>response.json())
//        .then(result=>setData(result));//puhsh to set data resukt    
//   return ()=>{
//     //condition to fetch data
//   };
// },[setData]);
// return(
//     <div>
//         { data?(<p>Data:{JSON.stringify(data)}</p>):(<p>loading..</p>)}
        
//     </div>
//   );
// }
// //response.json() function
// //
import React, { useState, useEffect } from 'react';

export default function Effect() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(response => response.json())
      .then(result => setData(result));

    // Clean-up function (optional)
    return () => {
      // Perform clean-up actions if needed
    };
  }, [setData]); // Include setData in the dependency array

  return (
    <div>
      {data ? (
        <p>Data: {JSON.stringify(data)}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}