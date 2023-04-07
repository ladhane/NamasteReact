import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 1,
            count2: 2
        }
        console.log(`Child constructor -  ${this.props.child}`);
    }

    async componentDidMount(){
        //for API callling
        console.log(`Child ComponentDidMount - ${this.props.child}`);
        this.timer = setInterval(()=>{
            console.log("Timer");
        },1000)
    }

    async componentDidUpdate(){
        //for API callling
        console.log(`Child componentDidUpdate - ${this.props.child}`);
    }

    componentWillUnmount(){
        clearInterval(this.timer);
        console.log('child componentWillUnmount');
    }

    render(){
        console.log(`render - ${this.props.child}`);
        const {count,count2} = this.state;
        return(
            <div>
                <h1>I am {this.props.name}</h1>
                <h2>{this.state.count}</h2>
                <h3>{this.state.count2}</h3>
                <h2>{count}</h2>
                <h3>{count2}</h3>
                <button onClick={()=> this.setState({
                    count : count+1,
                    count2: count2+1
                })}>Increase</button>
            </div>
        )
    }
}

export default Profile;