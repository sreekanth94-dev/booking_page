import {Component} from 'react'
import TabItem from '../TabItem'
import ThumbnailItem from '../ThumbnailItem'
import './index.css'

class MatchGame extends Component {
  imagesList = this.props

  state = {
    score: 0,
    timer: 60,
    matchImgObj: this.imagesList.imagesList[0],
    activeTabId: 'FRUIT',
    showScoreCard: false,
  }

  componentDidMount() {
    this.intervalId = setInterval(() => this.decrementTimer(), 1000)
  }

  componentWillUnmount() {
    this.componentDidMount()
    const {imagesList} = this.props
    this.setState({
      showScoreCard: false,
      timer: 60,
      score: 0,
      matchImgObj: imagesList[0],
      activeTabId: 'FRUIT',
    })
  }

  randomImgObj = imagesList => {
    const randomIndex = Math.floor(Math.random() * imagesList.length)
    return imagesList[randomIndex]
  }

  decrementTimer = () => {
    let {timer} = this.state
    console.log(timer)
    timer = parseInt(timer)

    if (timer > 0) {
      timer -= 1
      this.setState({timer})
    } else {
      clearInterval(this.intervalId)
      this.setState({showScoreCard: true})
    }
  }

  changeActiveTabId = id => this.setState({activeTabId: id})

  onClickThumbnailImg = id => {
    const {matchImgObj} = this.state
    const {imagesList} = this.props
    let {score} = this.state
    if (id === matchImgObj.id) {
      const randomImgObj = this.randomImgObj(imagesList)
      score += 1
      this.setState({matchImgObj: randomImgObj, score})
    } else {
      clearInterval(this.intervalId)
      this.setState({showScoreCard: true})
    }
  }

  onClickPlayAgainBtn = () => {
    this.componentWillUnmount()
  }

  showGameCard = (
    score,
    timer,
    matchImgObj,
    activeTabId,
    tabsList,
    filteredImagesList,
  ) => (
    <div className="game-card">
      <div>
        <img className="match-img" alt="match" src={matchImgObj.imageUrl} />
      </div>
      <ul className="tabs-container">
        {tabsList.map(each => (
          <TabItem
            tabItem={each}
            key={each.tabId}
            isActive={activeTabId === each.tabId}
            changeActiveTabId={this.changeActiveTabId}
          />
        ))}
      </ul>
      <ul className="thumbnailsContainer">
        {filteredImagesList.map(each => (
          <ThumbnailItem
            thumbnailItem={each}
            key={each.id}
            onClickThumbnailImg={this.onClickThumbnailImg}
          />
        ))}
      </ul>
    </div>
  )

  showScoreCard = score => (
    <div className="score-card-bg">
      <img
        className="trophy-img"
        alt="trophy"
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
      />
      <p className="score-card-heading">YOUR SCORE</p>
      <p className="final-score">{score}</p>
      <button
        onClick={this.onClickPlayAgainBtn}
        className="playAgain-btn"
        type="button"
      >
        <img
          alt="reset"
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
        />{' '}
        PLAY AGAIN
      </button>
    </div>
  )

  render() {
    const {score, timer, matchImgObj, activeTabId, showScoreCard} = this.state
    const {imagesList, tabsList} = this.props

    const filteredImagesList = imagesList.filter(
      each => each.category === activeTabId,
    )
    return (
      <div className="app-container">
        <nav>
          <img
            className="website-logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
          />
          <ul className="score-timer-container">
            <li className="score-txt">
              <p>
                Score: <span className="score">{score}</span>
              </p>
            </li>
            <li className="timer-card">
              <img
                className="timer-img"
                alt="timer"
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              />
              <p className="score">{timer} sec</p>
            </li>
          </ul>
        </nav>
        <div className="app">
          {showScoreCard
            ? this.showScoreCard(score)
            : this.showGameCard(
                score,
                timer,
                matchImgObj,
                activeTabId,
                tabsList,
                filteredImagesList,
              )}
        </div>
      </div>
    )
  }
}
export default MatchGame
