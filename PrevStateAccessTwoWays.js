import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Player extends Component {
    constructor() {
        super()
        this.state = { score: 0 }
    }
    increaseScore() {
        // get previous state from tihs.state
        // this.setState({ score: this.state.score + 1 })

        // get previous state from callback function
        this.setState(prevState => ({ 
            score: prevState.score + 1 }))
    }
    return() {
        <Text>{() => this.increaseScore()}</Text>
        // have also tried <Text>{this.state.score}</Text>
    }
}

export default class App extends Component {
    render() {
        return (
            <View>
                <Player />
            </View>
        )
    }
}
