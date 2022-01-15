import React from 'react';
import './App.css';
import Scard from './Scard';



class Top extends React.Component {
    buildPosts() {
        return this.props.posts.sort((a, b) => b["likes"] - a["likes"]).map((current, i) => (
            <Scard
                key={i}
                postId={current.postId}
                name={current.name}
                img={current.img}
                text={current.text}
                likes={current.likes}
                likeAction={this.props.likeAction}
                unlikeAction={this.props.unlikeAction}
                removeAction={this.props.removeAction}
                />
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

export default Top;
