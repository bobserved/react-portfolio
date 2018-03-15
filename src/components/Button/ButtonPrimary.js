import React from 'react'

export default class ButtonPrimary extends React.Component {
    render () {
        return (
            <button
                className='btn btn--primary'
                onMouseDown={this.props.onMouse}
                onTouchStart={this.props.onTouch}
            >
                <span className='btn__text'>{this.props.children}</span>
            </button>
        )
    }
}