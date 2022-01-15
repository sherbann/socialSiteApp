import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Likes from './Likes';
import './index.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'

class Scard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "",
      comment: []
    }
    toastr.options = {
      closeButton: true,
      debug: false,
      extendedTimeOut: "1000",
      hideDuration: "1000",
      hideEasing: "linear",
      hideMethod: "fadeOut",
      newestOnTop: false,
      onclick: null,
      positionClass: "toast-top-full-width",
      preventDuplicates: true,
      progressBar: true,
      showDuration: "300",
      showEasing: "swing",
      showMethod: "fadeIn",
      timeOut: "5000",
    };
    toastr.clear();
  }
  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }
  submitHandler(event) {
    event.preventDefault();
    this.prop.onsubmit(this.state.comment);
    toastr.success("comment added");
    this.setState({
      comment: ""
    }, console.log(this.state))
  }
  removeHandler(event) {
    console.log(this.props.postId)
    this.props.removeAction(this.props.postId);
  }

  render() {
    return (
      <>
        <Card className="mx-auto text-center mt-2 customCard" >
          <Card.Header className="cardHeader" as="h3" >{this.props.name}</Card.Header>
          <Card.Body className=" text-center  ">
            {/*<Card.Img thumbnail className="mh-50 mw-50" src={this.props.img} alt="" />*/}
            <Card.Text className=" text-center">{this.props.text}</Card.Text>
            <Likes
              no={this.props.likes}
              likeAction={this.props.likeAction}
              unlikeAction={this.props.unlikeAction}
              removeAction={this.props.removeAction}
              postId={this.props.postId}
              comment={this.state.comment} />
            <Form onSubmit={(e) => this.submitHandler(e)} >
              <Form.Group controlId="comment">
                <Form.Label ></Form.Label>
                <Form.Control name="comment" type="text" value={this.state.comment}
                  placeholder="for comments after posted" onChange={(e) => this.handleChange(e)} />
              </Form.Group>
            </Form>
            <Button variant="success" type="submit" size="xs" className="removeButton" >
              Add Comment
            </Button>
            <Button onClick={() => this.removeHandler()}
              className="removeButton" size="xs"
              variant="primary" >Remove Post</Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default Scard;