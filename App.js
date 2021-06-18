const App = () => (
    <div>
        {/* Part 1 */}
        <FirstComponent />
        <NamedComponent name='Nick' />
        <Tweet user='Nick' date='20210617' message='My first tweet 🤩' />
        <Tweet user='Jane' date='20210617' message='My first tweet 🤩' />
        <Tweet user='John' date='20210617' message='My first tweet 🤩' />
        {/* {Part 2} */}
        <Person name='Nick' age='30' hobbies={['bikes', 'coding', 'cooking']} />
        <Person name='Jane' age='15' hobbies={['dogs', 'running', 'hang gliding']} />
        <Person name='John' age='18' hobbies={['baking', 'grilling', 'backpacking']} />


    </div>
);

ReactDOM.render(<App/>, document.getElementById("root"));