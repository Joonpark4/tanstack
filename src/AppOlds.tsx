import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setDta] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/todos")
      .then((response) => {
        setDta(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>{JSON.stringify(data)}</div>;
}