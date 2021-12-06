import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image'
import Likes from './Likes'
import './index.css'

class Scard extends React.Component {

  render() {
    return (
      <>
        <Card className=" customeCard" >
          <Card.Header as="h4" style={{ backgroundColor: 'lightgreen' }}>{this.props.id}</Card.Header>
          <Image fluid className="mx-auto" src={this.props.img} alt={this.props.alt} />
          <Card.Body >
            <Card.Text style={{ backgroundColor: 'lightblue' }}>{this.props.text}</Card.Text>
            <Likes 
               no={this.props.likes} 
               likeaction={this.props.likeaction}
               removeAction={this.props.removeAction}
               postId={this.props.postId} />
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Scard;