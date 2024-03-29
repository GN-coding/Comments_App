import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
const randomIndex = Math.floor(
  Math.random() * initialContainerBackgroundClassNames.length,
)
const randomClassName = initialContainerBackgroundClassNames[randomIndex]

class Comments extends Component {
  state = {commentList: [], name: '', comment: '', count: 0}

  name = event => {
    this.setState({name: event.target.value})
  }

  comment = event => {
    this.setState({comment: event.target.value})
  }

  addComment = event => {
    event.preventDefault()

    const {name, comment} = this.state

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      backColor: randomClassName,
      logo: name.charAt(0).toUpperCase(),
      isFav: false,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      name: '',
      comment: '',
      count: prevState.count + 1,
    }))
  }

  fav = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(each => {
        if (id === each.id) {
          return {...each, isFav: !each.isFav}
        }
        return each
      }),
    }))
  }

  deleteItem = id => {
    const {commentList} = this.state
    const filterItem = commentList.filter(each => each.id !== id)

    this.setState(prevState => ({
      commentList: filterItem,
      count: prevState.count - 1,
    }))
  }

  render() {
    const {commentList, count, name, comment} = this.state

    return (
      <div className="comments-con">
        <h1 className="heading">Comments</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          alt="comments"
          className="comments-img"
        />
        <p className="description">say something About present Technologies</p>
        <form className="form-control form" onSubmit={this.addComment}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            onChange={this.name}
            value={name}
          />
          <br />
          <textarea
            className="textarea"
            name="textarea"
            rows="8"
            cols="40"
            placeholder="Your Comment"
            onChange={this.comment}
            value={comment}
          />
          <br />
          <button className="button" type="submit">
            Add Comment
          </button>
        </form>
        <br />
        <hr style={{marginBottom: '1rem'}} />
        <span>{count}</span>
        <span className="spanele"> Comments</span>
        <ul className="unorder-con">
          {commentList.map(each => (
            <CommentItem
              list={each}
              key={each.id}
              toggleFav={this.fav}
              ondelete={this.deleteItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
