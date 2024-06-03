import React from "react";
export class UserClass extends React.Component {
  constructor() {
    console.log("constructor");
    super();
    console.log(this);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {},
    };
    //inorder to access this we should call super()(which calls parent constructor)
    //but inorder show it in render we can directly use this.props
  }
  async componentDidMount() {
    console.log("component mounted");
    const data = await fetch("https://api.github.com/users/sanjanathota9");
    const json = await data.json();
    console.log(json);
    this.setState({ userInfo: json });
  }
  render() {
    const { login, id } = this.state.userInfo;
    console.log("render");
    return (
      <div>
        <button
          className="btn"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Click
        </button>
        <p>{this.props.text}</p>
        <p>Count1 : {this.state.count}</p>
        <p>Count2 : {this.state.count2}</p>
        <p>{login}</p>
        <p>{id}</p>
      </div>
    );
  }
}

//when parent component with child comp loads, the methods loads in below order

//parent constructor
//parent render
//child constructor
//child render
//child didmount called
//parent didmount called
//once after child did mount method is called then only parent did mount method will be called
//component did mount method will be called when componenet is done with rendering//
//we make api calls inside component did mount because it the methods which get called only over render method
//Mounting has two phases--render(constructor and render happens) and commit phase(Dom updates happens)
// so when parent has muliple childs---those child components did mount methods are batched together and rneder,constructor methods are batched togther
//parent constructor
//parent render
//child1 constructor
//child1 render
//child2 constructor
//child2 render
//DOM manipulation happens in batch
//child1 didmount called---(commit phase)
//child2 didmount called---(commit phase)
//parent didmount called

//constrctor called
//render call with iniial value for userInfo
//********HTML with initial value is on screen
//component did mount called
//********api called
//********state value of userInfo changed again render is called
//render called with new values
//********HTML with new values
//component did update called

//Componnent did unmounted called when we navigate to othet page(case where componnet is removed from dom)
//componnet did update is called after every state change
return () => {
  clearInterval();
  console.log("useeffect return");
};
//above should be used to call inside the useEffect to clean for example clearInterval--called when we navigate to other page
//for class based we do this in componenetUnmount
