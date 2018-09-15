import * as React from 'react';
import Loader from 'react-loader-spinner'
import './App.css';

interface IState {
  busStop: any,
  results: any,
  whatever: any
}

export default class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    this.state = {
      busStop: "",
      results: "",
      whatever: this.onChange.bind(this)
    }
  }

  public onChange() {
    let busStop;
    const textbox = document.getElementById("busStopId");
    if (textbox != null) {
      busStop = (textbox as HTMLInputElement).value;
      this.upload(busStop);
    }
  }

  public upload(busStop: string) {
    fetch('https://api.at.govt.nz/v2/gtfs/stops/stopId/' + busStop, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/plain',
        'Ocp-Apim-Subscription-Key': 'ca8690d2c38744faa4cc0a64e347be72',
      },
      body: null
    })
    .then((response : any) => {
      if (!response.ok) {
        this.setState({results: response.statusText})
      }
      else {
        response.json().then((data:any) => this.setState({results: data.response[0].stop_name}))
      }
      return response
    })
  }

  public render() {
    return (
      <div className="container-fluid">
        <div className="centreText">
          <p>Ever wondered what the official name of your bus stop is? Just type in the bus stop ID below to find out!</p>
          <input id="busStopId" />
          <button onClick={this.state.whatever}>Check</button>
          <div  className="dank">
          {
            this.state.results === "" && this.state.busStop !== "" ?
            <Loader type="TailSpin" color="#00BFFF" height={80} width={80}/> :
            <p>{this.state.results}</p>
          }
          </div>
        </div>
      </div>
    );
  }
}