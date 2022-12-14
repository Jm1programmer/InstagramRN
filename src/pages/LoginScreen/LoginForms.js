import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,StatusBar,SafeAreaView, ScrollView, FlatList,Dimensions, Image, TextInput, TouchableOpacity } from 'react-native';

import { useForm, Controller} from 'react-hook-form'
import { yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

import FacebookLogo from '../../../assets/FacebookLogo.png'

import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Feather'

export default function LoginForms() {
   
    const [ButtonForm, setButtonForm] = useState(false)

    const [HideText, sethideText] = useState(true);
    
    const schema = yup.object({
        UserNameEmail: yup.string().required(),
        Password:  yup.string().min(6)
        
    })
    

    const { control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })
   
    
  
    function Login(data) {
      
        console.log(data);
       
    
}
 
    return <>
        <View style={styles.InputView}>

            
<Controller control={control} name="UserNameEmail"
            render={({ field: { onChange, onBlur, value}}) => (
                <View style={styles.Input}>
                <TextInput style={styles.InputText}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Phone number, username or email"
                    selectionColor={'#909090'}
                />
            </View>
             
            )}/>

            <Controller control={control} name="Password"
            render={({ field: { onChange, onBlur, value}}) => (
                <View style={styles.Input}>
                <TextInput style={styles.InputText}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Password"
                    selectionColor={'#909090'}
                    secureTextEntry={HideText}
                />
                <TouchableOpacity  onPress={() => sethideText(!HideText) 
                 }>
                    { HideText ?
                     <Icons  name="eye-off" size={30} color="#909090" style={styles.IconEye}/>
                         :
                         <Icons  name="eye" size={30} color="#909090" style={styles.IconEye}/>
                    }
             
                 </TouchableOpacity>
             </View>

             
            )}/>

         
                
           
             

                
        </View>

        <View style={styles.forgotPasswordView}>
                    <TouchableOpacity>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                    {

                    }
                     {( errors.UserNameEmail || errors.Password ) && <View style={styles.buttonView} onPress={handleSubmit(Login)}>
                     <View style={styles.buttonInCorrect}>
                         <Text style={styles.buttonText}>Log in</Text>
                     </View>
                     </View>
                     
                     }

                     
                    { (!errors.UserNameEmail && !errors.Password ) &&   <TouchableOpacity  style={styles.buttonView} onPress={handleSubmit(Login)}>
                     <View style={styles.buttonCorrect}>
                         <Text style={styles.buttonText}>Log in</Text>
                     </View>
                     </TouchableOpacity>

                     }

                  
                     
                    
                         
                      
                    
                    

                    
                        
                  
                    <View style = {styles.lineStyleOr}>
                             <View style = {styles.lineStyle} />
                             <Text style = {styles.Or}>OR</Text>
                    </View>
                    <TouchableOpacity>
                  <View style={styles.LogInFace}>
                    <Image style={styles.LogInFaceLogo} resizeMode="contain" source={FacebookLogo} />
                  <Text style={styles.LogInFaceText}>Log in with Facebook</Text>
                  </View>
                  </TouchableOpacity>
                  
                  <View style={styles.LoginView}>
                  <View style={styles.LoginBox}>
                    <Text style={styles.DcountText}>Don't have an accont?</Text>
                    <TouchableOpacity>
                        <Text style={[styles.DcountText, styles.Sign]}>Sign Up</Text>
                    </TouchableOpacity>
                    </View>
                  </View>
                
        </>
        
}
const height = Dimensions.get('screen').height
const styles = StyleSheet.create({

    InputView: {
        width: '100%',
        height: height /8,
        alignItems: 'center',
     
    },

    Input: {
        width: '95%',
        flexDirection: 'row',
        height: height / 20,
        backgroundColor: '#FAFAFA',
        marginVertical: 5,
        alignItems: 'center',
       justifyContent: 'space-between',
       borderWidth: 1,
       borderColor: '#dbdbdb',
       borderRadius: 5,
        paddingHorizontal: 25,
    },

    InputText: {
        fontFamily: 'SegoeUI',
        fontSize: 15,
        color: '#909090',
       width: '90%',
     
    },
    
    IconEye: {
        marginHorizontal: 10,
    },

    forgotPasswordView: {
        width: '100%',
        alignItems: 'flex-end',
        paddingHorizontal: 10,
    },

    forgotPasswordText: {
        fontFamily: 'SegoeUIBold',
        fontSize: 13,
        color: '#49A3F2',
        marginVertical: 10,
       
    },

    buttonView: {
        alignItems: 'center',
        width: '100%',
        marginVertical: 15,
    },

    buttonCorrect: {
        width: '95%',
        height: height / 18,
        backgroundColor: '#57B7F2',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },  

    buttonInCorrect: {
        width: '95%',
        height: height / 18,
        backgroundColor: '#57b7f26e',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },  


    buttonText: {
        fontFamily: 'SegoeUIBold',
        fontSize: 15,
        color: '#fff',
        marginVertical: 10,
    },

    lineStyleOr: {
        justifyContent: 'center',
    },

    lineStyle:{
        marginVertical: 25,
        borderWidth: 0.45,
        borderColor:'#909090',
        margin:10,
   },
   Or: {
    fontFamily: 'SegoeUIBold',
    fontSize: 13,
    color: '#909090',
    width: '10%',
    alignSelf: 'center',
    textAlign: 'center',
    position: 'absolute',
    backgroundColor: '#fff',
    marginVertical: 10,
   },

   LogInFace: {
    flexDirection: 'row',
    alignItems: 'center',
    height: height/ 18,
    justifyContent: 'center'
   },
   LogInFaceLogo: {
    width: '6%',
   },

   LogInFaceText: {
    fontFamily: 'SegoeUIBold',
    marginHorizontal: 10,
    fontSize: 13,
    color: '#38A8F2',
    marginVertical: 10,
   },

   LoginView: {
    position: 'absolute',
    width: '100%',
    height: height / 1.157,
        
        justifyContent: 'flex-end'
   },
   LoginBox: {
  
    borderWidth: 0.45,
    borderColor:'#909090',
  
    alignSelf: 'flex-end',
        width: '100%',
        height: height / 10,
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'center',
   },

   DcountText: {
    fontFamily: 'SegoeUI',
    fontSize: 15,
    color: '#909090',
   },

   Sign: {
    fontFamily: 'SegoeUIBold',
    color: '#38A8F2',
        marginHorizontal: 5,
   },
});