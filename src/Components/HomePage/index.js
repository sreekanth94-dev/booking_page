import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import 'font-awesome/css/font-awesome.min.css'
import EachRoom from '../EachRoom'

import './index.css'

class HomePage extends Component {
  state = {isRoomsSelecting: true, roomsList: [], adult: '', child: ''}

  componentDidMount() {
    this.initialRoom()
  }

  initialRoom = () => {
    const {roomsList} = this.state

    const newRoom = {
      id: uuidV4(),
      adult: 2,
      child: 0,
    }
    this.setState({roomsList: [...roomsList, newRoom], adult: 2, child: 1})
  }

  totalRoomsAndGuests = () => {
    const {roomsList} = this.state
    let {adult, child} = this.state
    let rooms = roomsList.length
    if (rooms >= 2) {
      rooms = `${rooms} Rooms`
    } else {
      rooms = `${rooms} Room`
    }

    if (adult >= 2) {
      adult = `| ${adult} Adults`
    } else if (adult === 1) {
      adult = `| ${adult} Adult`
    } else {
      adult = ''
    }

    if (child > 0) {
      child = `| ${child} Child`
    } else {
      child = ''
    }
    return `${rooms} ${adult} ${child}`
  }

  totalRoomsAndGuestsCard = () => (
    <div className=" rooms-card">
      <p>
        Rooms&Guests{' '}
        <span>
          <button className="drop-down-btn" type="button">
            <i className="fa-sharp fa-solid fa-caret-down">{}</i>
          </button>
        </span>
      </p>
      <h1 className="room-details-h1">{this.totalRoomsAndGuests()}</h1>
    </div>
  )

  addRoomCard = () => {
    const {roomsList} = this.state
    return (
      <div className="modal">
        <div className="show-rooms-card">
          <h1 className="modal-title">Rooms&Guests</h1>
          <ul className="rooms-container">
            <EachRoom roomsDetails={roomsList[0]} />
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isRoomsSelecting} = this.state

    return (
      <div className="app-container">
        <nav>
          <h1 className="nav-bar-title"> Booking Page </h1>
        </nav>
        <div className="user-input-container">
          <div className="place-date-card">
            <div className="input-card">
              <label htmlFor="place-to-visit">Place to Visit</label>
              <input
                type="text"
                id="place-to-visit"
                placeholder="Enter Place to Visit"
              />
            </div>
            <div className="input-card">
              <label htmlFor="check-in-date">Check In Date</label>
              <input type="date" id="check-in-date" />
            </div>
            <div className="input-card">
              <label htmlFor="check-out-date">Check Out Date</label>
              <input type="date" id="check-out-date" />
            </div>
          </div>
          <div className="rooms-select-card">
            {isRoomsSelecting
              ? this.addRoomCard()
              : this.totalRoomsAndGuestsCard()}
          </div>
        </div>
      </div>
    )
  }
}
export default HomePage
