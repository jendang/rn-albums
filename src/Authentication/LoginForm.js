import React from 'react'
import {
    Card,
    CardSection,
    Button,
    Input
} from '../../src/ReuseComponents'

class LoginForm extends React.Component {
    state = {
        email: '',
        password: ''
    }
    render() {
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Email"
                        placeholder="user@mail.com "
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        secureTextEntry={true} // for secure pass entry
                        label="Password"
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    
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

