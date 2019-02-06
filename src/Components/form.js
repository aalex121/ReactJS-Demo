import React, {Component} from 'react';

class InputForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.weatherMethod}>
                <input type="text" name="city" placeholder="City"></input>
                <button>Get Weather</button>
            </form>
        );
    }
}

export default InputForm;