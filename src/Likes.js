import React from 'react';
import Image from 'react-bootstrap/Image';
import LikeIcon from './like.png';
import Button from 'react-bootstrap/Button';



class Likes extends React.Component {

  clickHandler(event) {
    console.log(this.props.postId)
    this.props.likeaction(this.props.postId);
  }
  removeHandler(event) {
    console.log(this.props.postId)
    this.props.removeAction(this.props.postId);
  }
  render() {
    return (
      <>
       
          
                <Image onClick={() => this.clickHandler()}
                fluid className="mx-auto" src={LikeIcon}
                width="25px" alt="like logo" />
            
                {this.props.no}
              
                <Button onClick={() => this.removeHandler()}
                  fluid className="mx-auto" 
                  width="25px" variant="danger" >Remove Post</Button>
            
        
      </>
    );
  }
}

export default Likes;