import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Animated
} from 'react-native';
import * as firebase from 'firebase';

const fireBaseconfig = {
    apiKey: "AIzaSyA1VtGXlRqWxHWomrOHmoTnTqwFdCFcOYY",
    authDomain: "dinder-1c519.firebaseapp.com",
    databaseURL: "https://dinder-1c519.firebaseio.com",
    projectId: "dinder-1c519",
    storageBucket: "dinder-1c519.appspot.com",
    messagingSenderId: "787556077437"
  };
  
  firebase.initializeApp(fireBaseconfig)


export default class Login extends Component {

    constructor(props) {
        super(props);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.focusNextField = this.focusNextField.bind(this);
        this.inputs = {};

        this.state = ({
            Yposition: new Animated.Value(50),
            opacity: new Animated.Value(0),
            email: '',
            password: '',
            loggedIn: true
        })
    }

    loginUser(email,password){
        let goToMainPage = ()=>{ this.props.goToMain() }
        firebase.auth().signInWithEmailAndPassword(email,password).then(function(user){
            goToMainPage();
        })
        .catch(function(error){
            alert(error);
        })
    }

    focusNextField(id) {
        this.inputs[id].focus();
    }

    goToRegister(newState) {
        this.props.childChange(newState)
    }
    componentDidMount() {
        Animated.timing(
            this.state.Yposition, {
                toValue: 0,
                duration: 1000
            }
        ).start();
        Animated.timing(
            this.state.opacity, {
                toValue: 1,
                duration: 1000
            }
        ).start();
    }
    
    render() {
        let fadeInUp = {
            transform: ([{ translateY: this.state.Yposition }]),
            opacity: this.state.opacity,
        }
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Animated.View style={fadeInUp}>
                    <View>
                        <TextInput style={styles.inputBox}
                            placeholder="Username"
                            blurOnSubmit={false}
                            onSubmitEditing={() => {
                                this.focusNextField('Password');
                            }}
                            ref={input => {
                                this.inputs['Username'] = input;
                            }}
                            returnKeyType="next"
                            underlineColorAndroid='rgba(0,0,0,0)'
                            onChangeText={(email) => this.setState({email})}
                        />
                        />
                        <TextInput style={styles.inputBox}
                            placeholder="Password"
                            blurOnSubmit={true}
                            returnKeyType={"done"}
                            onSubmitEditing={() =>
                                this.loginUser(this.state.email,this.state.password)
                            }
                            ref={input => {
                                this.inputs['Password'] = input;
                            }}
                            returnKeyType="go"
                            underlineColorAndroid='rgba(0,0,0,0)'
                            secureTextEntry={true}
                            onChangeText={(password) => this.setState({password})}
                        />
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.button} onPress={() => this.goToRegister(false)}>
                            <Text style={styles.buttonText}>Return</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.button, styles.loginBtn]}
                        onPress={()=> this.loginUser(this.state.email,this.state.password)}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>

                    </View>
                </Animated.View>
            </KeyboardAvoidingView>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    inputBox: {
        backgroundColor: '#fff',
        width: 220,
        height: 40,
        borderRadius: 5,
        paddingHorizontal: 10,
        fontSize: 16,
        color: '#000000',
        marginVertical: 8,
    },
    btnContainer: {
        flexDirection: 'row',
        width: 220,
        justifyContent: 'space-between',
        marginVertical: 15,
    },
    button: {
        width: 100,
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

