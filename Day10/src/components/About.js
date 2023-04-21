import React from "react";
import Profile from "./ProfileClass";

class About extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: 'Mayuri'
        }
        console.log(`Parent constructor `);
    }

    componentDidMount(){
        console.log('Parent componentDidMount');
    }

    async componentDidUpdate(){
        console.log(`Parent componentDidUpdate `);
    }

    render(){
        console.log('Parent Render');
        return (
            <>
              <h2> I am about Page</h2>
              <button onClick={()=> this.setState({
                    name : 'New Name'})}>Name</button>
              <Profile name={this.state.name} occupation="Software engineer" child='first'/>
              <Profile name="xyz" occupation="Government Servent" child='second'/>
            </>
          );
    }
}

export default About;
