import React from 'react'

const hello = {
    fontSize: '40px',
    color: 'green'
}
function Inline() {
    return (
        <div>
            <h1 style={hello}>Hello world!</h1>
        </div>
    )
}

export default Inline
