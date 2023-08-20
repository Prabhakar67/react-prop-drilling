import React, { Component } from 'react';

class Comp5 extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        console.log('constructor-super');
    }
    onClick() {
        console.log(this);
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps');
    }

    // shouldComponentUpdate(nextProps, nextState) {
        
    // }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render(props) {
        return (
            <div>
                <h2 onClick={this.onClick.bind(this)}>{this.props.roomShape}</h2>
            </div>
        );
    }
}

Comp5.propTypes = {

};

export default Comp5;