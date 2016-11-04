import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

export default class Poster extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { 
      posts: {posts},
      poster_actions: {fetchPosts}
    } = this.props;

     return (
      <div>
         <Button bsStyle="primary" onClick={fetchPosts}>GetPosts</Button>
          {
            posts.map((post, index) => (
              <Post post={post}/>
            ))
          }
      </div>
    );
  }
}

export const Post = ({post}) => {
  console.log(post);
  return (
    <div>
      <p><strong> Title : </strong> {post.title}</p>
    </div>
  )
}
