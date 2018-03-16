import React, { Component } from 'react'

export const colours = {
  bakerloo: 'rgb(178,99,0)',
  central: 'rgb(220,36,31)',
  circle: 'rgb(255,211,41)',
  district: 'rgb(0,125,50)',
  'hammersmith-city': 'rgb(244,169,190)',
  jubilee: 'rgb(161,165,167)',
  metropolitan: 'rgb(155,0,88)',
  northern: 'rgb(0,0,0)',
  piccadilly: 'rgb(0,25,168)',
  victoria: 'rgb(0,152,216)',
  'waterloo-city': 'rgb(147,206,186)',
  dlr: 'rgb(0,175,173)',
  'london-overground': 'rgb(239,123,16)',
  'tfl-rail': 'rgb(0,25,168)'
}

class LineInfo extends Component {
  render() {
    const { line } = this.props
    return (
      <div id={line.id}>{line.name}</div>
    )
  }
}

class LiveTubeStatus extends Component {
  render() {
    const { data } = this.props
    return (
      <div>
        <h3>Tube & Rail</h3>
        {
          data.map(line => <LineInfo line={line} key={line.id} />)
        }
      </div>
    )
  }
}

export default LiveTubeStatus
