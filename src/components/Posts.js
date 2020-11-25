import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'
import PropTypes from 'prop-types'

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    return (
      <div>
        { this.props.posts.map((post) => {
          return <div key={ post.id }>
            <h3>{ post.title}</h3>
            <p>{ post.body}</p>
          </div>
        })}
      </div>
    )
  }
}

Posts.propTypes = {
  fetchPosts: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts.items
  }
}

export default connect(mapStateToProps, { fetchPosts })(Posts)
