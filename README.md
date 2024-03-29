In this project, building a **Comments App** using React

### Refer to the image below:

<br/>
<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/comments-app-output-v0.gif" alt="comments output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>

### Design Files

<details>
<summary>Click to view</summary>

- [Extra Small (Size < 576px) and Small (Size >= 576px)](https://assets.ccbp.in/frontend/content/react-js/comments-app-sm-output-v2.png)
- [Medium (Size >= 768px), Large (Size >= 992px) and Extra Large (Size >= 1200px)](https://assets.ccbp.in/frontend/content/react-js/comments-app-lg-output-v0.png)

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>
<br/>

The app must have the following functionalities

- Initially, the list of comments should be zero and the inputs fields should be empty
- When non-empty values are provided and **Add Comment** button is clicked,
  - A new comment should be added to the list of comments
  - The comments count should be incremented by one
  - The value of the input fields for name and comment should be updated to their initial values
- When the **Like** button of a comment is clicked, if the image for **Like** is
  - [Like](https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png) image, then it should be changed to the [Liked](https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png) image
  - [Liked](https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png) image, then it should be changed to the [Like](https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png) image
- When the **Delete** button of a comment is clicked, the comment should be deleted from the list of comments and the comments count should be decremented by one

</details>

<details>
<summary>Implementation Files</summary>
<br/>

Use these files to complete the implementation:

- `src/components/Comments/index.js`
- `src/components/Comments/index.css`
- `src/components/CommentItem/index.js`
- `src/components/CommentItem/index.css`
</details>

### Used Package

<details>
<summary>Click to view</summary>
<br>

- The `formatDistanceToNow` function in the **date-fns** package is used to return the gap between the given date and now in words.

```js
import {formatDistanceToNow} from 'date-fns'

console.log(formatDistanceToNow(new Date())) // less than a minute
```

</details>
