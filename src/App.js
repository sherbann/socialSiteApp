import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './App.css';
import View from './View'
import Add from './Add'
import Top from './Top'
import About from './About'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logo from './img/logo.png'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';




class App extends React.Component {
  //define properties of class App: posts and postId
  constructor(props) {
    super(props)
    this.state = {
      posts: [],
      postId: undefined
    }
  }

  componentDidMount() {
    //validation: if something is added then postId and posts
    //are updated
    const listContents = localStorage.getItem("posts");
    let postValue = 0
    if(listContents) {
      postValue = (JSON.parse(listContents)[JSON.parse(listContents).length -1].postid) 
    }
     
    this.setState(
      { posts: JSON.parse(listContents) || [],
        postId: postValue
      }
    )
  }

  updateListItems(postid, id, text, img, likes) {
    //
    const postItem = { postid, id, text, img, likes}
    this.setState((state) => ({
      posts: state.posts.concat(postItem)
    }), () => localStorage.setItem("posts", JSON.stringify(this.state.posts)))
  }

  addLike(id) {

    this.setState((state) => ({
      posts: state.posts.map(
        post => post.postid === id ? { ...post, likes: post.likes +1 } : post
      )
    }), () => localStorage.setItem("posts", JSON.stringify(this.state.posts)))
  }

  removePost(id){
    this.setState ((state) => ({
    posts : state.posts.filter( (post) => post.postid !== id )
    }),() => localStorage.setItem("posts", JSON.stringify(this.state.posts)))
  }

  render() {
    return (
      <Router>
        <Navbar bg="success" expand="md" >
          <Navbar.Brand class="navbar-brand">
            <p>Teams</p>
            <img src={Logo} alt="like logo"/>
            </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className="nav-link" to="/">View</Link>
              <Link className="nav-link" to="/add">Add</Link>
              <Link className="nav-link" to="/top">Top-posts</Link>
              <Link className="nav-link" to="/about">About</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="container-fluid">
          <Switch>            
            <Route path="/add"> 
              <Row className="row">
                <Col xs>      
                  <Add onsubmit={(postid, id, text, img, likes,) => this.updateListItems(postid, id, text, img, likes)} lastid={this.state.postId} /> 
                </Col>
              </Row>
            </Route>
            <Route exact path="/">  
              
                    <View posts={this.state.posts} likeaction={(id) => this.addLike(id)} 
                  removeAction={(id) => this.removePost(id)}/>
              
            </Route>
            <Route exact path="/top">
                <Col xs>
              <Top posts={this.state.posts} likeaction={(id) => this.addLike(id)}
                removeAction={(id) => this.removePost(id)} />
              </Col>
            
            </Route>
            <Route exact path="/about">
              <Col xs>
                <About posts={this.state.posts} likeaction={(id) => this.addLike(id)}
                  removeAction={(id) => this.removePost(id)} />
              </Col>

            </Route>
            <Route path="/">
               <Col xs>
              Error: 404 not found
              </Col>
               
            </Route>   
        </Switch>
        </div>
      </Router>

    );
  }

}
export default App;
