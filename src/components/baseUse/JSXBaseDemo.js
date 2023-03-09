import React from 'react'
import './style.css'

class JSXBaseDemo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Pcjmy',
      imgUrl: 'https://img1.imgtp.com/2023/02/12/dlyJ6rh9.ico',
      flag: true
    }
  }

  render() {
    const styleData = { marginLeft: "27px" }
    const styleDiv = { margin: "10px" }
    const styleImg = { width: "100px", borderRadius: "50%" }
    const imgElem = <div style={styleDiv} >
      <img src={this.state.imgUrl} style={styleImg} alt="" />
      <p style={styleData}>{this.state.name}</p>
    </div>

    return imgElem
  }
}

export default JSXBaseDemo