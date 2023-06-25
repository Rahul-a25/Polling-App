
import React from 'react'
import {useState,useEffect} from "react";

const Poll = () => {
    const [Data, setData] = useState([]);
    const [page, setPage] = useState(0);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
          );
          const data = await response.json();
          const newData = data.hits.map((e) => ({
            title: e.title,
            url: e.url,
            createdAt: e.created_at,
            author: e.author,
          }));
          setData((prevData) => [...prevData, ...newData]);
          setPage((prevPage) => prevPage + 1);
         
          
        } catch (error) {
          console.error('Error fetching Data:', error);
        }
      };
  
      const intervalId = setInterval(fetchData, 10000);
       
     
  
      return () => {
        clearInterval(intervalId);
      };
    }, [page]);
  
    return (
        <>
    {
    Data.length>0 &&
      <div style={{boxShadow:"2px 2px 10px #576574 ",width:"80%" ,margin:"0px auto"}} >
        <table cellPadding={2} border={2}  style={{width:"100%",margin:"0px auto"}}>
          <thead>
            <tr>
              <th>Title</th>
              <th>URL</th>
              <th>Created At</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((e, i) => (
              <tr key={i}>
                <td>{e.title}</td>
                <td>{e.url}</td>
                <td>{e.createdAt}</td>
                <td>{e.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
}</>
    );
}

export default Poll
