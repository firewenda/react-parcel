import React from "react";
import ReactDOM from "react-dom";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            liked: 0
        };
        this.likedCallback = this.likedCallback.bind(this);
    }

    likedCallback(){
        let liked = this.state.liked;
        liked++;
        this.setState({
            liked: liked
        });
    }

    render(){
        return(
            <div>
                <h1>My name is {this.props.name}</h1>
                <h1>My age is {this.props.age}</h1>
                <button onClick={this.likedCallback}>Liked</button>
                <h2>Total liked: {this.state.liked}</h2>
            </div>
        )
    }
}

export default Profile;