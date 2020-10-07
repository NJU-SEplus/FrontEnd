import React from 'react';
class testComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    }

    handleClick() {
        // const curVis = this.state.count;
        // this.setState({ count: curVis+1 })
        this.setState({count: this.state.count+1})
    }

    render(){
        return (
            <div>
                <div>count: {this.state.count}</div>
                <button onClick={this.handleClick.bind(this)}>click me</button>
            </div>
            
        )
    }
}

export default testComponent;