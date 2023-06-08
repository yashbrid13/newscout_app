import React, { useState } from "react";
import TextInputBox from "../components/TextInputBox";
import SubmitButton from "../components/SubmitButton";
import { View, Text, Linking} from "react-native";
import SignInStyles from "../styles/SignInStyle";
import Header from "../components/Header";
import TextBox from "../components/TextBox";
import { basePrimaryColor, extraDark } from "../styles/Colors"; 
import Checkbox from "../components/Checkbox";
// import { Checkbox } from "react-native-paper";

const SignIn = () =>{

    const [email, setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [isVisible,setVisible] = React.useState(false);

    const emailInput = (emailText) => {
        setEmail(emailText);
    }

    const passwordInput = (event) => {
        setPassword(event);
    }

    const submitCredentials = () =>{
        console.log(email+" "+password);
        fetch('http://192.168.1.48:8000/api/login/',{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "email": email,
              "password": password,
            }),
          })
          .then((res)=>res.json())
          .then((data)=>{
            console.log("DATA IS: ",data);
        }).catch((e)=>{
            console.log("Error: "+e);
        })
    }

    const forgotPassword = () =>{
        Linking.openURL('http://google.com')
    }

    const changeVisible = () => {
        setVisible(!isVisible);
    }

    return(
        <View style={SignInStyles.container}>
            <Header text="Welcome Back"></Header>
            <View style={SignInStyles.inputContainer}>
                <TextBox text="Sign In to your account to explore the article and news." containerStyle={SignInStyles.textBox}></TextBox>
                <TextInputBox onChange={emailInput} placeHolderText="Email"></TextInputBox>
                <TextInputBox onChange={passwordInput} placeHolderText="Password" hide={!isVisible}></TextInputBox>
                <View style={{flexDirection: 'row', alignSelf: 'flex-start',}}>
                        <Checkbox  
                            onClicked={changeVisible}
                        />
                        <Text style={{color:'black'}}>Show Password</Text>
            </View>
            <SubmitButton text="Continue" onClick={submitCredentials} bgStyle={SignInStyles.buttonBgStyle} buttonText={SignInStyles.buttonText}></SubmitButton>
            <Text style={SignInStyles.forgotPassword} onPress={forgotPassword}>Forgot Password</Text>
            <View style={SignInStyles.signUpStyle}>
                <Text style={{fontFamily: 'Poppins-SemiBold', color: extraDark}}> Don't have an account?</Text> 
                <Text style={{fontFamily: 'Poppins-SemiBold', color: basePrimaryColor}}> Sign Up </Text>
            </View>
            </View>
        </View>
    );
}

export default SignIn;