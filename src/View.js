import React from 'react';
import './App.css';
import Scard from './Scard';
import Col from 'react-bootstrap/Col'

class View extends React.Component {
  

  buildPosts() 
    {
      return this.props.posts.map((current,i) => (
      /*</><Image fluid={true} className="" src={this.props.current.img} alt={this.props.alt} />*/
      <Scard 
          key={i}
          postId={current.postid}
          id={current.id}
          img={current.img}
          comment={current.comment} 
          text={current.text}
          likes={current.likes}
          likeAction={this.props.likeAction}
          unlikeAction={this.props.unlikeAction}
          removeAction={this.props.removeAction} />
    )
    )
  }


  render() {
    return (
      <>
        
         {this.buildPosts()}
        
      </>
    );
  }
}

export default View;
