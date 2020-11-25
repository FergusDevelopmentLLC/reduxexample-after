import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';
import PropTypes from 'prop-types'

class PostForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={(event) => {
          event.preventDefault()
          
          const post =  {
            title: this.state.title,
            body: this.state.body
          }

          this.props.createPost(post)

        }}>
          <div>
            <label>Title</label><br/>
            <input type="text" name="title" value={ this.state.title } onChange={(event) => {
              this.setState(() => {
                return { [event.target.name]: event.target.value }
              }, () => {
                console.log(this.state)
              })
            }} /><br/>
            <label>Body</label><br/>
            <textarea name="body" value={ this.state.body } onChange={(event) => {
              this.setState(() => {
                return { [event.target.name]: event.target.value }
              }, () => {
                console.log(this.state)
              })
            }}></textarea><br/>
            <input type="submit" text="Add post" />
          </div>
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);
