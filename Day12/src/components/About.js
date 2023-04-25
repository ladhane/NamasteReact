import React from "react";
import Profile from "./ProfileClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mayuri",
    };
    console.log(`Parent constructor `);
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  async componentDidUpdate() {
    console.log(`Parent componentDidUpdate `);
  }

  render() {
    console.log("Parent Render");
    return (
      <>
        <h2> This is about Page</h2>
        <UserContext.Consumer>
          {({ user }) => {
            return (
              <h2>
                {user.name} - {user.email}
              </h2>
            );
          }}
        </UserContext.Consumer>
        <p>
            This is Chapter 11 of Namaste React Class
        </p>
      </>
    );
  }
}

export default About;
