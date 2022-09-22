import {Component} from 'react'
import './index.css'

class EachRoom extends Component {
  roomDetails = this.props

  //   state = {
  //     adults: this.roomDetails.roomDetails.adult,
  //     child: this.roomDetails.roomDetails.child,
  //   }

  editRoom = roomNo => (
    <>
      <h1 className="room-title">ROOM{roomNo}</h1>
      <p className="adult-txt">ADULTS(12y+)</p>
      <div className="btn-container">
        <button className="num-btn" type="button">
          1
        </button>
        <button className="num-btn" type="button">
          2
        </button>
        <button className="num-btn" type="button">
          3
        </button>
        <button className="num-btn" type="button">
          4
        </button>
        <button className="num-btn" type="button">
          5
        </button>
        <button className="num-btn" type="button">
          6
        </button>
        <button className="num-btn" type="button">
          7
        </button>
        <button className="num-btn" type="button">
          8
        </button>
        <button className="num-btn" type="button">
          9
        </button>
        <button className="num-btn" type="button">
          10
        </button>
        <button className="num-btn" type="button">
          11
        </button>
        <button className="num-btn" type="button">
          12
        </button>
      </div>
      <p className="child-txt">CHILDERN (Age 12Y and below)</p>
      <div className="btn-container2">
        <button className="num-btn" type="button">
          0
        </button>
        <button className="num-btn" type="button">
          1
        </button>
        <button className="num-btn" type="button">
          2
        </button>
        <button className="num-btn" type="button">
          3
        </button>
        <button className="num-btn" type="button">
          4
        </button>
      </div>
    </>
  )

  render() {
    const roomNo = 1
    const isEditing = true
    return (
      <li className="each-room">{isEditing ? this.editRoom(roomNo) : null}</li>
    )
  }
}

export default EachRoom
