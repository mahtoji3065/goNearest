import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { View, Text, Button, TextInput, StyleSheet,ActivityIndicator  } from 'react-native';
import {DEFAULT_MOBILE_LENGTH,APIURL,X_API_KEY,DEFAULT_MOBILE_CODE} from '@env';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            mobile_no:'',
            DEFAULT_MOBILE_LENGTH: DEFAULT_MOBILE_LENGTH,
            fields: {
                mobile_no: ''
            },
            formFieldError: {
                mobile_no: ''
            },
            showButton: false,
            formSubmitted: false,
            isLoading:false,
            setIsLoading:false
        }

    }

    registerUser() {
        const mobile_no = this.state.mobile_no;
        if (mobile_no) {
            this.setState({ formSubmitted: true });
            const API_HEADER = {
                headers: {
                    'X-API-KEY': X_API_KEY,
                    'crossdomain': true
                }
            };
            const URL = APIURL + "user/registerNewUser";
            const postData = {
                mobile_code: DEFAULT_MOBILE_CODE,
                mobile_no: mobile_no
            }
            axios.post(URL, postData, API_HEADER)
                .then(res => {
                    // console.log('res====',res);
                    // alert(JSON.stringify(res));
                    if (res.data.status) {
                        //setIsLoading(false);
                        console.log('res====',res.data);
                        this.props.navigation.navigate('TestComponent', { name: 'Jane' });
                        // localStorage.setItem('optDetailsID', res.data.otp_id);
                        // window.location.href = process.env.PUBLIC_URL + '/OtpVerification';
                    }
                })
                .catch(error => {
                    //setIsLoading(false);
                    this.setState({ formSubmitted: true });
                    alert(JSON.stringify(error));
                });
        } else {
            ///setIsLoading(false);
            alert("please Enter the phone Number");
            // let formFieldError = this.state.formFieldError;
            // formFieldError['mobile_no'] = "Please Enter Mobile Number";
            // this.setState({ formFieldError });
        }

    }

    render() {
        return (
            <View style={styles.centered}>
                <TextInput placeholder='Mobile Number' id='mobile_no' style={styles.textbox}
                onChangeText={(e) => this.setState({mobile_no :e})}></TextInput>
                <Button title='Proceed' onPress={(e) => this.registerUser()} disabled={this.state.formSubmitted}
                style={{ display: (this.state.showButton) ? 'block' : 'none' }} />
                {(this.state.formSubmitted) ? (<ActivityIndicator size="large" />) : ('')}                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centered: {
        // position: "absolute",
        top: 50,
        left: 0,
        right: 0,
        bottom: 0,
        //justifyContent: "center",
        //alignItems: "center",
    },
    textbox: {
        borderColor: 'skyblue',
        borderWidth: 2,
        padding: 10,
        marginVertical: 20
    }
});

export default Login;