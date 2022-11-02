import ret from "bluebird/js/release/util";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  getStuff() {
    return "Wild function'ed text";
  }

  getMorningGreeting() {
    return <div>good morning sunshine!</div>;
  }

  getEveningGreeting() {
    return <div> good evning sir.</div>;
  }

  showCompany(name, revenue) {
    return (
      <div id={name}>
        {name} makes {revenue} every year
      </div>
    );
  }

  getClassName(temperature) {
    let classDiv = "";
    if (temperature < 15) {
      classDiv = <div>freezing</div>;
    } else if (temperature < 30) {
      classDiv = "fair";
    } else {
      classDiv = "hell-scape";
    }
    return <div id="weatherBox" class={classDiv}></div>;
  }

  render() {
    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 },
    ];

    let time = new Date().getHours();
    console.log(time);

    return (
      <div>
        <div className="ex-space">
          <h4 className="ex-title">Spot-check 1</h4>
          <div className="exercise" id="spotcheck-1">
            {<h1>Stuff: {this.getStuff()}</h1>}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spot-check 2</h4>
          <div className="exercise" id="spotcheck-2">
            {time < 12 ? this.getMorningGreeting() : this.getEveningGreeting()}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Spot-check 3</h4>
          <div className="exercise" id="spotcheck-3">
            {[
              <p>some text</p>,
              this.getMorningGreeting(),
              this.getEveningGreeting(),
            ]}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {companies.map((c) => this.showCompany(c.name, c.revenue))}
          </div>
        </div>

        <div className="ex-space">
          <h4 className="ex-title">Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {this.getClassName(16)}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
