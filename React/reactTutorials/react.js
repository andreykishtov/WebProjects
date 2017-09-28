// your code here...
class App extends React.Component {
    render() {
        this.message = 'hello world';
        this.react = 'clickme';
        return (
            <div>
                <h1>{this.message}</h1>
                <button>{this.react}</button>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
