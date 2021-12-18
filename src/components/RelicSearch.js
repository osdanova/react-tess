import { useState, useEffect } from 'react';

const relicUrl = "https://drops.warframestat.us/data/relics";
//const booksUrl = "https://www.anapioficeandfire.com/api/books";

export const RelicSearch = ({setRelic}) => {
    // Search terms
    const [tier, setTier] = useState('Lith');
    const [name, setName] = useState('R1');

    return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Tier: </label>
            <select value={tier} onChange={(event) => setTier(event.target.value)}>
                <option value="Lith">Lith</option>
                <option value="Meso">Meso</option>
                <option value="Neo">Neo</option>
                <option value="Axi">Axi</option>
            </select>
            <label>     Name: </label>
            <textarea style={{height:15}} value={name} onChange={(event) => setName(event.target.value)} />
            <br/><br/>
            <input type="submit" value="Fetch data" style={{ height:'40px', borderRadius:'5px' }}/>
        </form>
    </div>
    )

    //<button onClick={() => onClick('Lith','R1')}>Test Relic</button>

    function handleSubmit(event){
        event.preventDefault();
        searchRelic(tier,name);
    }

    async function searchRelic(tier,name){
        if(tier == null || name == null){
            console.log('Invalid input: Tier: ' + tier + ', Name: ' + name);
            return;
        }
        console.log('Fetching data...');
        const relic = await retrieveRelicData(tier,name);
        console.log('Relic fetched: ' + relic?.name);
        setRelic(relic);
      }
  }

  async function retrieveRelicData(tier,name) {
    const response = await fetch(getRelicURL(tier,name));
    const data = await response.json();
    return data;
  }
  
  function getRelicURL(tier,name) {
    return relicUrl + "/" + tier + "/" + name + ".json";
  }

  export default RelicSearch;