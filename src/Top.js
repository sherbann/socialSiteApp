import React from 'react';
import './App.css';
import Scard from './Scard';



class Top extends React.Component {
    buildPosts() {
        return this.props.posts.sort((a, b) => b["likes"] - a["likes"]).map((current, i) => (
            <Scard
                key={i}
                postId={current.postId}
                id={current.id}
                img={current.img}
                text={current.text}
                likes={current.likes}
                likeaction={this.props.likeaction}
                removeAction={this.props.removeAction} />
        )
        )
    }
    render() {
        return (
            <>
                <div>
                    {this.buildPosts()}
                </div>
            </>
        );
    }
}

export default Top;
