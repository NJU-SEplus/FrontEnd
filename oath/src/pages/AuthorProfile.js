import React from 'react';
import TestComponent from '../libs/components/TestComponent';
class AuthorProfile extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                <div>Hello World!!</div>
                <TestComponent />
            </>
        )
    }
}

export default AuthorProfile;