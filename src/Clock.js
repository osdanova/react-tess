import React from 'react';
import ReactDOM from 'react-dom';

export class Clock extends React.Component
{
    // Called the first time the component is created
    constructor(props) {
      super(props);
      this.state = {date: new Date(), extraDate: props?.extraDate};
    }
  
    // Called the first time the component is mounted in the DOM
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    // Called when the component is dismounted from the DOM
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    // Function that changes the state, called by Interval
    tick() {
      //console.log("DGP TICK");
      this.setState({
        date: new Date()
      });
    }
  
    // Component to be rendered
    render() {
      if(this.state.extraDate != null)
      {
        return (
          <div>
            <h1>Hello, world! extradate</h1>
            <h2>It is {this.state.extraDate.toLocaleTimeString()}.</h2>
          </div>
        );
      }
      else{
        return (
          <div>
            <h1>Hello, world! date</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
      
    }
  }
  
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );

  
export default Clock