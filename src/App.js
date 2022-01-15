import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import CardGroup from 'react-bootstrap/CardGroup';
import './App.css';
import View from './View';
import Add from './Add';
import Top from './Top';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logo from './img/logo.png'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import Image from 'react-bootstrap/Image';
//import Image from '@bit/react-bootstrap.react-bootstrap.image';
//import ReactBootstrapStyle from '@bit/react-bootstrap.react-bootstrap.internal.style-links';
//import FileUploadComponent from './components/fileUpload.component';



class App extends React.Component {
  //define properties of class App: 
  // obj state with 2 elements posts and postId
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      postId: undefined
    }
  }
  componentDidMount() {

    //extract the values from posts into string
    const listContents = localStorage.getItem("posts");
    let postValue = 0
    // if posts not empty then postValue equal 
    if (listContents) {
      // create an object postValue from string listContents
      //postValue = (JSON.parse(listContents)[JSON.parse(listContents).length - 1].postid)
      postValue = postValue +1;
    }
    //set the new state of app 
    this.setState(
      {
        posts: JSON.parse(listContents) || [],
        postId: postValue
      }
    )
  }
  //update new object with new values 
  updateListItems(postid, id, text, img, comment, likes) {

    //new object postItem with 5 properties with and no value
    const postItem = { postid, id, text, img, comment, likes }
    this.setState((state) => ({
      // assign values to keys properties for the new object postItem
      posts: state.posts.concat(postItem)
      // save the new object posts as JSON on local
    }), () => localStorage.setItem("posts", JSON.stringify(this.state.posts)))
  }

  addLike(id) {
    this.setState((state) => ({
      posts: state.posts.map(
        //if postid strict equal with id then update object posts prop likes value
        post => post.postid === id ? { ...post, likes: post.likes + 1 } : post
      )
      // store locally the new object as JSON
    }), () => localStorage.setItem("posts", JSON.stringify(this.state.posts)))
  }
  unLike(id) {
    this.setState((state) => ({
      posts: state.posts.map(
        //if postid strict equal with id then update object posts prop likes value
        post => post.postid === id ? { ...post, likes: post.likes - 1 } : post
      )
      // store locally the new object as JSON
    }), () => localStorage.setItem("posts", JSON.stringify(this.state.posts)))
  }

  removePost(postid) {
    this.setState((state) => ({
      posts: state.posts.filter(post => post.postid !== postid)
    }), () => localStorage.setItem("posts", JSON.stringify(this.state.posts)))
  }

  render() {
    return (
      <Router>
        <Navbar expand="md auto-mx">
          <Navbar.Brand className="navbar-brand d-inline-block align-top"
            width="30" height="30">
            <p id="logo name">FunnyPosts</p>
            <img src={Logo} alt="like logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/add">Add</Link>
              <Link className="nav-link" to="/" >View</Link>
              <Link className="nav-link" to="/top">Top-posts</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Container>
          <Switch>
            <Route path="/add">
              <div className="container-fluid">
                <Row className="Add">
                  <Col md>
                    <Add
                      onsubmit={(postid, id, text, img, comment, likes) => this.updateListItems(postid, id, text, img, comment, likes)}
                      lastid={this.state.postId} />
                  </Col>
                </Row>
              </div>
            </Route>
            <Route exact path="/">
              <CardGroup id="cardGroup">
                <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                  <View posts={this.state.posts}
                    likeAction={(id) => this.addLike(id)}
                    unlikeAction={(id) => this.unLike(id)}
                    removeAction={(id) => this.removePost(id)} />
                </div>
              </CardGroup>

            </Route>
            <Route path="/top">
              <Row className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4" id="cardGroup">
                <Top
                  posts={this.state.posts}
                  likeAction={(name) => this.addLike(name)}
                  unlikeAction={(id) => this.unLike(id)}
                  removeAction={(name) => this.removePost(name)} />

              </Row>
            </Route>
            <Route path="/">
              <Col md>
                Error: 404 not found
              </Col>

            </Route>
          </Switch>
        </Container>
      </Router>

    );
  }

}
export default App;
