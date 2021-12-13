import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import RelicDiv from './RelicDiv';
import Clock from './Clock';

const relicUrl = "https://drops.warframestat.us/data/relics";
const relicUrlAxiR1 = "https://drops.warframestat.us/data/relics/Axi/R1.json";
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
        ----<br/>
        <form action="">
          <label for="tiers">Tier: </label>
          <select name="tiers" id="tiers">
            <option value="lith">Lith</option>
            <option value="meso">Meso</option>
            <option value="neo">Neo</option>
            <option value="axi">Axi</option>
          </select>
          <label for="names">Name: </label>
          <select name="names" id="names">
            <option value="r1">R1</option>
          </select>
          <br/>
          <input type="submit" value="Retrieve"/>
        </form>
        <br/>
      <RelicDiv relic={relic} />
      <Clock />
    </div>
  );
}

async function getDataFun() {
  const response = await fetch(getRelicURL("Lith","R1"));
  const data = await response.json();
  return data;
}

async function retrieveRelicData(tier,name) {
  const response = await fetch(getRelicURL(tier,name));
  const data = await response.json();
  return data;
}

function getRelicURL(tier,name) {
  return relicUrl + "/" + tier + "/" + name + ".json";
}

export default App;
