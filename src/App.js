import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [generateExcuse, setGenerateExcuse] = useState("");
  // const [predictedAge, setPredictedAge] = useState(null);

  const fetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then(
      (res) => {
        setGenerateExcuse(res.data[0].excuse);
      }
    );
  };

  // useEffect(() => {}, []);

  return (
    <div className="App">
      <h1>Generate Excuses</h1>
      <button onClick={() => fetchExcuse("family")} className="btn">
        FAMILY
      </button>
      <button onClick={() => fetchExcuse("party")} className="btn">
        Party
      </button>
      <button onClick={() => fetchExcuse("funny")} className="btn">
        Funny
      </button>
      <button onClick={() => fetchExcuse("unbelievable")} className="btn">
        Unbelievable
      </button>
      <button onClick={() => fetchExcuse("developers")} className="btn">
        Developers
      </button>
      <p>{generateExcuse}</p>
    </div>
  );
}

export default App;
