import React from "react";

class TaskAdd extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };
    }

    addTask = () => {
        const { input } = this.state;
        if (input) {
            this.props.addTask(input);
            this.setState({ input: '' })
        }
    };

    addChange = event => {
        this.setState({input: event.target.value})
    };

    handleEnter = event => {
        if (event.key === 'Enter') this.addTask();
    }

    render() {
        const { input } = this.state;
        return (
            <div className="task-input">
                <input type="text" onKeyPress={this.handleEnter} onChange={this.addChange} value={input}/>
                <button onClick={this.addTask}>ADD</button>
            </div>
        );
    }
}

export default TaskAdd;