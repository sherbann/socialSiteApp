import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css'
//import Image from 'react-bootstrap/Image';
//import Image from '@bit/react-bootstrap.react-bootstrap.image';
//import FileUploadComponent from './components/fileUpload.component';


class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postId: "",
      id: "",
      text: "",
      img: "",
      comment: "",
      likes: undefined
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

  componentDidMount() {
    console.log(this.props.lastid)
    this.setState({
      postId:this.props.lastid
    })
  }

  handleChange(event) {
    const newState = { ...this.state };
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  submitHandler(event) {
    event.preventDefault();
    const newId = this.props.lastid + 1;
    console.log(newId)
    this.props.onsubmit(newId, this.state.id, this.state.text, this.state.img, this.state.comment, 0);
    toastr.success("post added");
    this.setState({
      postId: newId,
      id: "",
      text: "",
      img: "",
      comment: "",
      likes: 0,
    }, console.log(this.state))
  }
  render() {
    return (
      <>
        <Form onSubmit={(e) => this.submitHandler(e)} >
          <Form.Group controlId="userID">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              name="id"
              type="text"
              value={this.state.id}
              onChange={(e) => this.handleChange(e)} />
          </Form.Group>

          <Form.Group controlId="text">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="text"
              type="text"
              value={this.state.text}
              placeholder="write your message here"
              onChange={(e) => this.handleChange(e)} />
          </Form.Group>

          <Form.Group controlId="img">
            <Form.Label>Add your Image Address</Form.Label>
            <Form.Control
              name="img"
              type="text"
              value={this.state.img}
              placeholder="insert url for image"
              onChange={(e) => this.handleChange(e)} />
          </Form.Group>

          <Form.Group controlId="comment">
            <Form.Label>Comments</Form.Label>
            <Form.Control
              name='comment'
              type='text'
              value={this.state.comment}
              placeholder="add comments here"
              disabled={true} />
          </Form.Group>
          <div><br /></div>
          <Button variant="primary" type="submit">
            Add Post
          </Button>

        </Form>
      </>
    );
  }

}
export default Add;
