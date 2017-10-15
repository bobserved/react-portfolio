import React from 'react'

export default class Button extends React.Component {
    render () {
        return (
            <button onClick={this.props.onPress} style={{ width: 200, height: 50, borderRadius: 8, backgroundColor: 'lightgreen' }}>{this.props.children}</button>
        )
    }
}