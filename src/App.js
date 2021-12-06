import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

const relicUrl = "https://drops.warframestat.us/data/relics/Axi/R1.json";
const booksUrl = "https://www.anapioficeandfire.com/api/books";

function App()
{
  const [relic, setRelic] = useState(null);

  useEffect(() => {
    getDataFun().then(response => setRelic(response));
  }, []);

  return (
    <div className="App">
        <img src={logo} alt="logo" width="100" height="100" /><br/>
        API RESPONSE:<br/>
        Relic[{relic?.toString()}]<br/>
        Tier[{relic?.tier}]<br/>
        Name[{relic?.name}] <br/>
    </div>
  );
}

async function getDataFun() {
  const response = await fetch(relicUrl);
  const data = await response.json();
  return data;
}

export default App;
