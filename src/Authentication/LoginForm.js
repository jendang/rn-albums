import React from 'react'
import {
    TextInput,
    StyleSheet
} from 'react-native'
import {
    Card,
    CardSection,
    Button
} from '../../src/ReuseComponents'

class LoginForm extends React.Component {
    state = {
        text: ''
    }
    render() {
        const { textInput } = styles
        return(
            <Card>
                <CardSection>
                    <TextInput 
                        value={this.state.text}
                        onChangeText={text => this.setState({text})}
                        style={textInput}
                    />
                </CardSection>

                <CardSection>
                    <TextInput 
                        style={textInput}
                    />
                </CardSection>

                <CardSection>
                    <Button text={`Login`}/>
                </CardSection>
            </Card>
        )
    }
}

export default LoginForm

const styles = StyleSheet.create({
    textInput: {
        height: 20,
        width: 100
    }
})