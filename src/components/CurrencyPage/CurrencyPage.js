import React, { Component } from 'react'

export default class CurrencyPage extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            coinID: props.match.params
        })
    }
    render() {
        console.log(this.state.coinID)
        return (
            <div>
                YOU ARE IN CURRENCY PAGE
            </div>
        )
    }
}
