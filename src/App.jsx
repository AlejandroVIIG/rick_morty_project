import { useEffect, useState } from "react";
import axios from "axios";
import { getRandomNumber } from "./helpers/random";
import ResidentList from "./components/ResidentList";
import Location from "./components/Location";
import { Header } from "./components/Header";

function App() {

  const [locationInfo, setLocationInfo] = useState(null)

  const randomDimension = getRandomNumber(126);

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/location/${randomDimension}`)
          .then(({data}) => setLocationInfo(data))
          .catch(err => console.log(err));
  }, []); 

  return (
    <main className="bg-black text-slate-400 min-h-screen">
      <Header />
      <Location locationInfo={locationInfo} setLocationInfo={setLocationInfo} className="justify center"/>
      <ResidentList residents={locationInfo?.residents ?? []}  />
    </main>
  );
}

export default App;
