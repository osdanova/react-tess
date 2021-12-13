class RelicComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }

    render() {
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
            </div>
      );
    }
  }

  ReactDOM.render(
    <RelicComponent />,
    document.getElementById('root')
  );