import { useEffect, useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setDatos(data));
  }, []);

  console.log(datos);
  return (
    <div>
      {datos.map((dato) => {
        return <p key={dato.id}>{dato.body}</p>;
      })}
    </div>
  );
}

export default App;
