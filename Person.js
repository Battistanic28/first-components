const Person = (props) => {
    return (
    <div> 
        <h2>Learn some information about this person</h2> 
        <p>Name: {props.name}</p>   
        <p>Age: {props.age}</p>   
        <b>You {(props.age >= 18) ? "please go vote!" : "you must be 18"}!</b>
        <h3>Hobbies</h3>
        <ul>
            {props.hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </div>
      )
  }


ReactDOM.render(<Person/>, document.getElementById("root"))