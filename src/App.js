import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [data, getData] = useState([]);
  const URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        getData(response);
      });
  };
  return (
    <div className="apihead">
      <h1> Displaying API data in Table </h1>
      <tbody>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Descripation</th>
        </tr>
        {data.map((item, i) => (
          <tr key={i}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.body}</td>
          </tr>
        ))}
      </tbody>
    </div>
  );
}

export default App;