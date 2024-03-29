import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {list, toggleFav, ondelete} = props

  const applystyle = list.isFav ? 'apply' : ''
  const likeImgSrc = list.isFav
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeClick = () => {
    toggleFav(list.id)
  }

  const handleDelete = () => {
    ondelete(list.id)
  }

  return (
    <li className="item-card">
      <div className="con-1">
        <h4 className={`logo-style ${list.backColor}`}>{list.logo}</h4>
        <h3 className="item-name">{list.name}</h3>
        <p className="item-time">{formatDistanceToNow(new Date())}</p>
      </div>
      <div>
        <p className="com-dis">{list.comment}</p>
      </div>
      <div className="foot-con">
        <div className="like-con">
          <img
            src={likeImgSrc}
            alt="like"
            onClick={likeClick}
            className={`like-img ${applystyle}`}
          />
          <p className={applystyle}>Like</p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          alt="img"
          className="del-img"
          onClick={handleDelete}
        />
      </div>
    </li>
  )
}

export default CommentItem
