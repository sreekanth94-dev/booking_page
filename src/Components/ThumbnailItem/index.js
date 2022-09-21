import './index.css'

const ThumbnailItem = props => {
  const {thumbnailItem, onClickThumbnailImg} = props
  const {id, thumbnailUrl} = thumbnailItem

  const onClickThumbnailBtn = () => {
    onClickThumbnailImg(id)
  }

  return (
    <li>
      <button
        onClick={onClickThumbnailBtn}
        className="thumbnail-btn"
        type="button"
      >
        <img className="thumbnailImg" alt=" thumbnail" src={thumbnailUrl} />
      </button>
    </li>
  )
}

export default ThumbnailItem
