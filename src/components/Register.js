import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    Animated
} from 'react-native';


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            opacity: new Animated.Value(0)
        })
    }
    componentDidMount() {
        Animated.timing(
            this.state.opacity, {
                toValue: 1,
                duration: 1000
            }
        ).start();
    }

    goToLogin(newState) {
        this.props.childChange(newState)
    }
    render() {
        let fadeIn = {
            opacity: this.state.opacity
        }
        return (

            <Animated.View style={[styles.container, fadeIn]}>
                <TouchableOpacity style={[styles.button, styles.loginBtn]} onPress={() => this.goToLogin(true)}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.google.com/search?q=cats&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiS-KXFx7XbAhUPjlkKHfmeCdoQ_AUICigB&biw=1366&bih=662')}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://www.google.com/search?tbm=isch&q=cats&chips=q:cats,g_5:bunny&sa=X&ved=0ahUKEwiXtZjHx7XbAhWMrFkKHd67AVMQ4lYIMCgB&biw=1366&bih=662&dpr=1')}>
                    <Text style={styles.buttonText}>Forgot</Text>
                </TouchableOpacity>

            </Animated.View>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    button: {
        width: 220,
        height: 40,
        paddingHorizontal: 10,
        marginVertical: 8,
        backgroundColor: '#00207e',
        borderRadius: 2,
        paddingVertical: 8,
    },
    loginBtn: {
        backgroundColor: '#16d0cd'
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
    }

});

/* //Original Login Component Contents
<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>

            <View>
                <TextInput style={styles.inputBox}
                placeholder="Username"
                blurOnSubmit={ false }
                onSubmitEditing={() => {
                this.focusNextField('Password');
                }}
                ref={ input => {
                this.inputs['Username'] = input;
                }}
                returnKeyType="next"  
                underlineColorAndroid='rgba(0,0,0,0)'
                />
                />
                <TextInput style={styles.inputBox}
                placeholder="Password"
                blurOnSubmit={ true }
                returnKeyType={ "done" }
                ref={ input => {
                this.inputs['Password'] = input;
                }}
                returnKeyType="go" 
                underlineColorAndroid='rgba(0,0,0,0)'
                secureTextEntry={true}
                />
            </View>

            <View style={styles.btnContainer}>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Return</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.button, styles.loginBtn]}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

            </View>

            </KeyboardAvoidingView>
*/