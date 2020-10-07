import React from 'react';
import request from '../libs/utils/request'

class Test1 extends React.Component {
    constructor(props) {
        super(props);
        request('aaaa').then((r)=>{
            console.log(r)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
    render() {
        return (
            <>
                <div>11111111111111111111111111111</div>
            </>
        )
    }
}

export default Test1;