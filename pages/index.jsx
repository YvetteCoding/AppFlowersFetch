import { FlowerCard } from "../components/FlowerCard";
import { useEffect, useState } from "react";

export default function Home() {


  const [flowers, setFlowers] = useState([]);
  const [name, setName] = useState("");
  const [queryParameter, setQueryParameter] = useState("");
  
  function sortmyarray(x) {
    return x.sort();
  }
  

  useEffect(() => {
    fetch(`/api/flower?startsWith=${queryParameter}`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setFlowers(res.data);
      });
  }, [queryParameter]);

  return (
    <>

      <div className="container flex col g-5">
        <h1>What is your favorite flower?</h1>

        <div>
          <input type="text" value={name} id="" onChange={(e) => setName(e.target.value)} placeholder="Enter flower Name" />
          <button onClick={() => {setQueryParameter(name) }}>Search</button>
          <br></br>
          <button onClick={sortmyarray(flowers)}>Sort</button>
        </div>

        <div className="flowers flex row g-5">
          {flowers.map((flower) => {
            return (
              <FlowerCard
              family={flower.family}
              photo={flower.photo}
              scientific_name={flower.scientific_name}
                name={flower.name}
              />
            )
          })
          }
        </div>
      </div>
      <style jsx>{`
        .container {
          margin: auto;
          width: 1344px;
        }
        .flowers {
          flex-wrap: wrap;
        }
      `}</style>
    </>
  );
}
