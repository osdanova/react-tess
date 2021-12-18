import logo from './logo.svg';
import './App.css';
import RelicSearcher from './components/RelicSearcher';

function App()
{
  return (
    <div className="App" style={{display:'grid', placeItems:'center', backgroundColor:'DarkSlateGrey'}}>
        <img src={logo} alt="logo" width="100" height="100" /><br/>
        <RelicSearcher/>
    </div>
  );
}

/*
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
        <RelicSearcher/>

        <form onSubmit={changeRelicEvent}>
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
        <RelicComponent id='my-relic-com' relic={relic} />
      <Clock extraDate={new Date()}/>
    </div>
  );

  async function changeRelicEvent(e) {
    e.preventDefault();
    
    const myRelicComponent = document.querySelector('#my-relic-com');
    if(myRelicComponent != null)
    {
      getDataFun().then(response => myRelicComponent.setRelic(response));
    }
    else
    {
      console.log('ERROR: component not found');
    }
    console.log('You clicked submit.');
  }

}
//<RelicDiv relic={relic} />

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
*/


export default App;
