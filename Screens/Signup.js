import { Button, View ,StyleSheet,Text,TouchableOpacity,Image,TextInput,SafeAreaView, Alert, ScrollView, KeyboardAvoidingView, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Error from 'react-native-vector-icons/MaterialIcons';
import {createUserWithEmailAndPassword} from 'firebase/auth'
import auth from "../services/FireBaseAuth";
import React, { useState } from 'react';



export default function SignupScreen(){
    const navigation = useNavigation();
    const[Name,setName]=useState("");
    const[NameVerify,setNameVerify]=useState(false);
    const[Email,setEmail]=useState("");
    const[EmailVerify,setEmailVerify]=useState(false);
    const[Password,setPassword]=useState("");
    const[PasswordVerify,setPasswordVerify]=useState(false);
    const[ValidationVerify,setValidationVerify]=useState("");
    const[error,setError]=useState('');

    const validation=(e)=>{
        const NameVar = e.nativeEvent.text;
        setName(NameVar);
        setNameVerify(false);
        if(NameVar.length>1){
            setNameVerify(true);
        }
        // if(NameVar===''){
        //     setValidationVerify('');
        // }
    }

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
            if(Name===''||Email===''||Password===''){
                setValidationVerify('These is mandatory field')
            }
            else{
                createUserWithEmailAndPassword(auth,Email,Password).then((userCredentials)=>{
                    const user=userCredentials.user
                    navigation.navigate("DashBoardScreen");
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
                        <Text style={style.topHead}>Hi!</Text>
                        <Text style={style.topText}>Create a new account</Text>
                    </View>
                </View> 
                <View>
                    <View style={style.input1}>
                        <View style={style.inputFirst}>
                            <TextInput style={style.InputOne} placeholder="Full Name" onChange={e=>validation(e)}/>
                            {Name.length<1 ? null:NameVerify?(<Feather name="check-circle" color="green" size={20} style={style.inputFirstIcon}/>):(<Error name="check-circle" color="red" size={20} style={style.inputFirstIcon}/>)}
                        </View>
                        {!Name.length<1?null:ValidationVerify?<Text  style={style.inputFirstMess}>{ValidationVerify}</Text>:null}
                        {Name.length<1 ? null:NameVerify?null:<Text style={style.inputFirstMess}>Name should be greater than 1 character</Text>}
                    </View>
                    <View style={style.input2}>
                        <View style={style.inputSecond}>
                            <TextInput style={style.InputTwo} placeholder="example@gmail.com" onChange={e=>EmailVal(e)}/>
                            {Email.length<1 ? null:EmailVerify?(<Feather name="check-circle" color="green" size={20} style={style.inputFirstIcon}/>):(<Error name="check-circle" color="red" size={20} style={style.inputFirstIcon}/>)}
                        </View>
                        {!Email.length<1?null:ValidationVerify?<Text  style={style.inputFirstMess}>{ValidationVerify}</Text>:null}
                        {Email.length<1 ? null:EmailVerify?null:<Text style={style.inputFirstMess}>Enter proper Email Address</Text>}
                        {/* {Email.length < 1 ? (<Text style={style.inputFirstMess}>Please enter your email.</Text>) : null} */}
                    </View>
                    <View style={style.input2}>
                        <View style={style.inputSecond}>
                            <TextInput style={style.InputThree} placeholder="Password"  onChange={e=>PassValid(e)} maxLength={15} secureTextEntry/>
                            {Password.length<1 ? null:PasswordVerify?(<Feather name="check-circle" color="green" size={20} style={style.inputFirstIcon}/>):(<Error name="check-circle" color="red" size={20} style={style.inputFirstIcon}/>)}
                        </View>
                        {!Password.length<1?null:ValidationVerify?<Text  style={style.inputFirstMess}>{ValidationVerify}</Text>:null}
                        {Password.length<1 ? null:PasswordVerify?null:<Text style={style.inputFirstMess}>Enter proper Password</Text>}
                    </View>     
                </View>
                <View style={style.loginBtndiv}>
                <TouchableOpacity style={style.loginBtn} onPress={btnValid}>
                    <Text style={style.loginText}>SIGN UP</Text>
                </TouchableOpacity>
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
                        <Image source={{uri:"https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"}} style={style.Google}/>
                        <Image source={{uri:"https://e7.pngegg.com/pngimages/175/452/png-clipart-facebook-logo-facebook-icon-logo-facebook-icon-blue-text-thumbnail.png"}} style={style.Facebook}/>
                        <Image source={{uri:"https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"}}  style={style.Facebook}/>
                    </View>
                </View>
                <View style={style.bottomLine}>
                    <Text style={style.bottomLineLeft}>Don't have an account?</Text>
                    <TouchableOpacity>
                        <Text style={style.bottomLineRight} onPress={()=>navigation.navigate("SecondScreen")}>Sign in</Text>
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
        paddingBottom:5
    },
    topText:{
        fontSize:20,
        marginLeft:35,
        color:"grey",
        letterSpacing:2
    },
    input1: {
        marginBottom:45
    },
    InputOne:{
        borderBottomWidth:1,
        width:"75%",
        marginLeft:35,
        paddingTop:20,
        
    },
    input2:{
        marginBottom:45
    },
    InputTwo:{
        borderBottomWidth:1,
        width:"75%",
        marginLeft:35, 
    },
    InputThree:{
        borderBottomWidth:1,
        width:"75%",
        marginLeft:35,
    },
    loginBtndiv:{
        alignItems:"center",
        paddingBottom:10
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
    inputFirst:{
    flexDirection:'row',
    position:"relative"
    },
    inputFirstIcon:{
       position:"absolute",
       right:55,
       bottom:5
    },
    inputFirstMess:{
        paddingLeft:35,
        color:"red",
        paddingTop:5
    },
    inputSecond:{
        flexDirection:'row',
        position:"relative"
    },
    inputFirstIcon:{
        position:"absolute",
        right:55,
        bottom:5
     },
     inputFirstMess:{
         paddingLeft:35,
         color:"red",
         paddingTop:5
     },
     errorMessage:{
        color:"red"
     }
})