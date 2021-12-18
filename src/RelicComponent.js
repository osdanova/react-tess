import React from 'react';
import ReactDOM from 'react-dom';
import RelicDiv from './RelicDiv';
class RelicComponent extends React.Component {
  constructor(props) {
      super(props);
      this.state = {relic: props?.relic};
    }

  render() {
    if(this.state.relic == null)
    {
      return (
        <div>ERROR</div>
      );
    }
    else
    {
      return (
        <div>
            <RelicDiv relic={this.state.relic} />
        </div>
      );
    }
  }

  setRelic(relic)
  {
    if(relic != null)
    {
      this.state.relic = relic;
    }
    else{
      console.log('ERROR: no relic')
    }
  }
}

ReactDOM.render(
  <RelicComponent />,
  document.getElementById('root')
);

export default RelicDiv;