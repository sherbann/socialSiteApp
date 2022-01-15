import React from 'react';
import Image from 'react-bootstrap/Image';
import LikeIcon from './like.png';
import UnlikeIcon from './unlike.png';
import Button from 'react-bootstrap/Button';



class Likes extends React.Component {

  clickHandler(event) {
    console.log(this.props.postId)
    this.props.likeAction(this.props.postId);
  }
  clickHandlerU(event) {
    console.log(this.props.postId)
    this.props.unlikeAction(this.props.postId);
  }
  render() {
    return (
      <>
       <div className='row '>
          <div className="col-4" >
                <Image onClick={() => this.clickHandler()}
                  fluid className="responsive-image" src={LikeIcon}
                  width="30px" alt="like logo"/>
          </div>
          <div className="col-4"></div>
          <div className="col-4">
                <Image onClick={() => this.clickHandlerU()}
                    fluid className="responsive-image" src={UnlikeIcon}
                    width="30px" alt="like logo" />
          </div>
          <div >
                {this.props.no}
          </div>
        </div>  
      </>
    );
  }
}

export default Likes;