const React = require('react')

class CoordinatesButton extends
React.Component {
  constructor(props) {
    super()

    this.state = {

    }

  }


  render() {
    return (
      <button onClick={ (event) => {this.props.onReceiveCoordinates([event.clientX, event.clientY])}}></button>)
      }
        }


module.exports = CoordinatesButton
