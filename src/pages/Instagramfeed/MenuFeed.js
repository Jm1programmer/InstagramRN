import { StyleSheet, Text, View,StatusBar,SafeAreaView,Image,Dimensions, TouchableOpacity } from 'react-native';
import InstagramLogo from './../../../assets/InstagramLogo.png'
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/Fontisto'
import Micons from 'react-native-vector-icons/MaterialIcons'
export default function MenuFeed() {
  

  return <>
    
  <View style={styles.Menu}>
    <TouchableOpacity>
    <View style={styles.LogoView}>
        <Image source={InstagramLogo} style={styles.LogoStyle} resizeMode="contain"/>
        <Micons name="keyboard-arrow-down" size={30} color="#000" style={styles.icon} />
        
    </View>
    </TouchableOpacity>
<View style={styles.MenuFunctions}>
   <TouchableOpacity> 
        <Icon  name="plussquareo" size={30} color="#000" style={styles.icon}/> 
    </TouchableOpacity>

    <TouchableOpacity> 
    <Icon  name="hearto" size={30} color="#000" style={styles.icon}/>
    </TouchableOpacity>

    <TouchableOpacity> 
    <Icons name="messenger" size={30} color="#000" style={styles.icon} />
    </TouchableOpacity>
    
</View>
  </View>
    
    </>
}

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

const styles = StyleSheet.create({

    

    Menu: {
        width: '100%',
        flexDirection: 'row',
        height: height / 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
      
       
    },
    LogoView: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    LogoStyle: {
       
        width: width / 3.5,
        height: width / 5,
    },
    
    MenuFunctions: {
        flexDirection: 'row',
        padding: 0,
    },
    icon: {
        paddingHorizontal: 5,
    }
});