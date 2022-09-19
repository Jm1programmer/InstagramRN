import { StyleSheet, Text, View,StatusBar,SafeAreaView, ScrollView, FlatList,Dimensions, Image } from 'react-native';
import InstagramLogo from './../../../assets/InstagramLogo.png'
import { useFonts } from 'expo-font';

import LoginForms from './LoginForms'

export default function LoginScreen() {


    const [fontsLoaded] = useFonts({
        'SegoeUI': require('./../../../assets/fonts/SegoeUI.ttf'),
        'SegoeUIBold': require('./../../../assets/fonts/SegoeUIBold.ttf'),
      });
    
     if (!fontsLoaded) {
      return null
     }


    return (
        <SafeAreaView style={styles.SafeArea}>
             
                
              <StatusBar  backgroundColor={'transparent'} barStyle={'dark-content'} hidden={false} />
              <View style={styles.content}>
                <View style={styles.LogoView}>
                    <Image style={styles.LogoImg} source={InstagramLogo} resizeMode='contain' />
                </View>
              
                <LoginForms />
                </View>
        </SafeAreaView>
      
      );
}
const height = Dimensions.get('screen').height
const styles = StyleSheet.create({

    
    LogoView: {
        alignItems: 'center',
      
        height: height / 4.5
    },

    LogoImg: {
        width: '40%'
    },

    content: {
     
        height: height / 1.5,
        justifyContent: 'center',
       
        
    },
    SafeArea: {
        backgroundColor: '#fff',
        height: height,
    }
    
    
});