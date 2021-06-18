const Tweet = (props) => {
    return (
    <ul>
        <h1>Tweet</h1>
        <li>User: {props.user}</li>
        <li>Date: {props.date}</li>
        <li>Message: {props.message}</li>
    </ul>
    ) 
}


ReactDOM.render(<Tweet/>, document.getElementById("root"))