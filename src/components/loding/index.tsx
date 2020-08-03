import React from 'react'
import {Spinner} from 'react-bootstrap';

const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#343a40',
    height: '100vh',
    color: '#fff'
}
const Loading = () => {
    return (
        <div style={style}>
            <Spinner animation={'grow'} />
        </div>
    )
}

export default Loading