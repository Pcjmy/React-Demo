import React from 'react'
import './style.css'

class JSXBaseDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Pcjmy',
      imgUrl: 'https://avatars.githubusercontent.com/u/73071671?v=4',
      flag: true
    }
  }

  render() {
    const styleData = { "margin-left": "27px" }
    const styleDiv = { margin: "10px" }
    const styleImg = { width: "100px", "border-radius": "50%" }
    const imgElem = <div style={styleDiv} >
      <img src={this.state.imgUrl} style={styleImg} alt="" />
      <p style={styleData}>{this.state.name}</p>
    </div>

    return imgElem
  }
}

export default JSXBaseDemo