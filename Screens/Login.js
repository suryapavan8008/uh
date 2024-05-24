import {View ,StyleSheet,Text,TouchableOpacity,Image,TextInput,Alert, ScrollView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useEffect, useState } from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Error from 'react-native-vector-icons/MaterialIcons';
import auth from "../services/FireBaseAuth";
import { signInWithEmailAndPassword,onAuthStateChanged} from "firebase/auth";




export default function SecondS(){
    const navigation=useNavigation();
    const[Email,setEmail]=useState("");
    const[EmailVerify,setEmailVerify]=useState(false);
    const[Password,setPassword]=useState("");
    const[PasswordVerify,setPasswordVerify]=useState(false);
    const[ValidationVerify,setValidationVerify]=useState("");
    const[error,setError]=useState('');

    const  checkIfLoggedIn=()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                navigation.navigate('DashBoardScreen');
            }
        })
        }

        useEffect(()=>{
        checkIfLoggedIn();
        })

    const EmailVal=(e)=>{
        const EmailVar=e.nativeEvent.text;
        setEmail(EmailVar);
        setEmailVerify(false);
        if(/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{3,}$/.test(EmailVar)){
            setEmail(EmailVar);
            setEmailVerify(true);
        }
        // if(EmailVar===''){
        //     setValidationVerify('');
        // }
    }

    const PassValid=(e)=>{
        const PassVar=e.nativeEvent.text;
        setPassword(PassVar);
        setPasswordVerify(false);
        if(/(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,}/.test(PassVar)){
            setPassword(PassVar);
            setPasswordVerify(true);
        }
        // if(PassVar===''){
        //     setValidationVerify('');
        // }
    }
    
    const btnValid=()=>{
        setError('')
        if(Email===''||Password===''){
            setValidationVerify('These is mandatory field')
        }
        else{
            signInWithEmailAndPassword(auth,Email,Password).then((userCredentials)=>{
                const user=userCredentials.user
                console.log(user);
            })
            .catch((error)=>{
                 setError(error.message)
                })
            }
        }
    return(
        <ScrollView style={style.container}>
                {/* <Button title="SecondScreen" onPress={()=>navigation.navigate('SignupScreen')}/> */}
                <View>
                    <Icon name="arrow-left" size={30} style={style.topIcon} onPress={()=>navigation.navigate("HomeScreen")}/>
                    <View style={style.topContainer}>
                        <Text style={style.topHead}>Welcome!</Text>
                        <Text style={style.topText}>Sign in to continue</Text>
                    </View>
                </View> 
                <View style={style.input1}>
                    <View style={style.inputSecond}>
                    <TextInput style={style.InputTwo} placeholder="example@gmail.com" onChange={e=>EmailVal(e)}/>
                    {Email.length<1 ? null:EmailVerify?(<Feather name="check-circle" color="green" size={20} style={style.inputFirstIcon}/>):(<Error name="check-circle" color="red" size={20} style={style.inputFirstIcon}/>)}
                    </View>
                    {!Email.length<1?null:ValidationVerify?<Text  style={style.inputFirstMess}>{ValidationVerify}</Text>:null}
                    {Email.length<1 ? null:EmailVerify?null:<Text style={style.inputFirstMess}>Enter proper Email Address</Text>}
                </View>
                <View style={style.input2}>
                    <View style={style.inputSecond}>
                        <TextInput style={style.InputTwo} placeholder="Password" onChange={e=>PassValid(e)} secureTextEntry/>
                        {Password.length<1 ? null:PasswordVerify?(<Feather name="check-circle" color="green" size={20} style={style.inputFirstIcon}/>):(<Error name="check-circle" color="red" size={20} style={style.inputFirstIcon}/>)}
                    </View>
                    {!Password.length<1?null:ValidationVerify?<Text  style={style.inputFirstMess}>{ValidationVerify}</Text>:null}
                    {Password.length<1 ? null:PasswordVerify?null:<Text style={style.inputFirstMess}>Enter proper Password</Text>}
                </View>
                <View style={style.loginBtndiv}>
                <TouchableOpacity style={style.loginBtn} onPress={btnValid}>
                    <Text style={style.loginText}>LOGIN</Text>
                </TouchableOpacity>
                <Text style={style.loginbtnPass}>Forgot Password?</Text>
                {error && <Text style={style.errorMessage}>{error}</Text>}
                </View>
                <View style={style.border}>
                    <Text style={style.borderLeft}></Text>
                    <Text style={style.borderText}>or</Text>
                    <Text style={style.borderRight}></Text>
                </View>
                <View style={style.SocialMedia}>
                    <Text style={style.bottomText}>Social Media Login</Text>
                    <View style={style.SocialLogos}>
                        <TouchableOpacity >
                        <Image source={{uri:"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"}} style={style.Google}/>
                        </TouchableOpacity>
                        <Image source={{uri:"https://e7.pngegg.com/pngimages/175/452/png-clipart-facebook-logo-facebook-icon-logo-facebook-icon-blue-text-thumbnail.png"}} style={style.Facebook}/>
                        <Image source={{uri:"https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"}}  style={style.Facebook}/>
                    </View>
                </View>
                <View style={style.bottomLine}>
                    <Text style={style.bottomLineLeft}>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text style={style.bottomLineRight} onPress={()=>navigation.navigate("SignupScreen")}>Sign up</Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
    );
};

const style=StyleSheet.create({
    container:{
        backgroundColor:"lightgrey",
        flex:1
    },
    topIcon:{
        marginLeft:20,
        paddingTop:30
    },
    topContainer:{
        paddingVertical:20
    },
    topHead:{
        fontSize:35,
        fontWeight:'bold',
        marginLeft:35,
        letterSpacing:5,
        paddingBottom:10
    },
    topText:{
        fontSize:20,
        marginLeft:35,
        color:"grey",
        letterSpacing:2
    },
    loginBtndiv:{
        alignItems:"center",
        paddingBottom:15
    },
    loginBtn:{
        backgroundColor:"blue",
        width:"70%",
        alignItems:'center',
        borderRadius:5,
        marginBottom:10
    },
    loginText:{
        fontSize:18,
        color:"white",
        padding:10,
        fontWeight:"bold"
    },
    loginbtnPass:{
        letterSpacing:2
    },
    border:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'center',
        gap:15,
        paddingBottom:15
    },
    borderLeft:{
        borderBottomWidth:1,
        width:"32%"
    },
    borderRight:{
        borderBottomWidth:1,
        width:"32%",
    },
    borderText:{
       marginTop:15,
       fontSize:20
    },
    bottomText:{
        fontSize:18,
        color:"grey"
    },
    SocialMedia:{
        justifyContent:"center",
        alignItems:"center"
    },
    SocialLogos:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        gap:20
    },
    Google:{
        height:100,
        width:50,
        resizeMode:"contain"
    },
    Facebook:{
        height:90,
        width:40,
        resizeMode:"contain"
    },
    Apple:{
        height:100,
        width:50,
        resizeMode:"contain"
    },
    bottomLine:{
        flexDirection:'row',
        marginLeft:45,
        gap:10
    },
    bottomLineLeft:{
        fontSize:15,
        color:"grey"
    },
    bottomLineRight:{
        fontSize:15,
        color:"blue",
        fontWeight:"bold",
    },
    inputSecond:{
        flexDirection:'row',
        position:"relative"
    },
    input1: {
        marginBottom:70,
        marginTop:20
    },
    input2:{
        marginBottom:60
    },
    InputTwo:{
        borderBottomWidth:1,
        width:"75%",
        marginLeft:35, 
    },
    inputFirstIcon:{
        position:"absolute",
        right:55,
        bottom:5
     },
     inputFirstMess:{
        paddingLeft:35,
        color:"red",
        // paddingTop:5
    },
    errorMessage:{
        color:"red"
    }
})