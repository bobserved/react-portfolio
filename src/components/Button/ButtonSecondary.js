import React from 'react'

export default class ButtonPrimary extends React.Component {
    render () {
        return (
            <button
                className='btn btn--secondary'
                onClick={this.props.onPress}
            >
                <span className='btn__text'>{this.props.children}</span>
            </button>
        )
    }
}