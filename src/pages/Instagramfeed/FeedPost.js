
import { StyleSheet, Text, View,StatusBar,SafeAreaView,Dimensions,TouchableOpacity,Image,ScrollView } from 'react-native';
import ProfilePic from "../../../assets/FaceBookProfilePic.png"
import PostImage from "../../../assets/WomanVacation.jpg"
import Icon from 'react-native-vector-icons/AntDesign'
import Icons from 'react-native-vector-icons/Fontisto'
import Micons from 'react-native-vector-icons/MaterialIcons'
import Ficons from 'react-native-vector-icons/Feather'
export default function PostFeed() {
    
    StatusBar.setBarStyle('dark', true);
  return <>
        
        <View style={styles.post}>
         
            <View style={styles.PostprofileInfo}>
            <TouchableOpacity style={styles.ProfileTouchable}>
                <View style={styles.ProfileInfo}>
                    
                    
                    <View style={styles.profilePic}>
                       <Image style={styles.profilePicImg} source={ProfilePic} />
                    </View>
                    <Text style={styles.profileName}>User.name</Text>
                   
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.postImage}>
                <Image style={styles.postImageImg} source={PostImage} resizeMode="cover" />
            </View>

            <View style={styles.TopDownInfo}>
                <View style={styles.TopDownFunctional}>
                    <TouchableOpacity>
                <Icon  name="hearto" size={30} color="#000" style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Ficons  name="message-circle" size={30} color="#000" style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity>
                <Ficons  name="send" size={30} color="#000" style={styles.icon}/>
                </TouchableOpacity>
              

                <View style={styles.share}>
                <TouchableOpacity>
                <Ficons  name="bookmark" size={30} color="#000" style={[styles.icon,styles.Share]}/>
                </TouchableOpacity>
                </View>


                </View>
            </View>
            
        </View>


        <View style={styles.post}>
         
         <View style={styles.PostprofileInfo}>
         <TouchableOpacity style={styles.ProfileTouchable}>
             <View style={styles.ProfileInfo}>
                 
                 
                 <View style={styles.profilePic}>
                    <Image style={styles.profilePicImg} source={ProfilePic} />
                 </View>
                 <Text style={styles.profileName}>User.name</Text>
                
             </View>
             </TouchableOpacity>
         </View>
         <View style={styles.postImage}>
             <Image style={styles.postImageImg} source={PostImage} resizeMode="cover" />
         </View>

         <View style={styles.TopDownInfo}>
             <View style={styles.TopDownFunctional}>
                 <TouchableOpacity>
             <Icon  name="hearto" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Ficons  name="message-circle" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Ficons  name="send" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
           

             <View style={styles.share}>
             <TouchableOpacity>
             <Ficons  name="bookmark" size={30} color="#000" style={[styles.icon,styles.Share]}/>
             </TouchableOpacity>
             </View>


             </View>
         </View>
         
     </View>


     <View style={styles.post}>
         
         <View style={styles.PostprofileInfo}>
         <TouchableOpacity style={styles.ProfileTouchable}>
             <View style={styles.ProfileInfo}>
                 
                 
                 <View style={styles.profilePic}>
                    <Image style={styles.profilePicImg} source={ProfilePic} />
                 </View>
                 <Text style={styles.profileName}>User.name</Text>
                
             </View>
             </TouchableOpacity>
         </View>
         <View style={styles.postImage}>
             <Image style={styles.postImageImg} source={PostImage} resizeMode="cover" />
         </View>

         <View style={styles.TopDownInfo}>
             <View style={styles.TopDownFunctional}>
                 <TouchableOpacity>
             <Icon  name="hearto" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Ficons  name="message-circle" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Ficons  name="send" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
           

             <View style={styles.share}>
             <TouchableOpacity>
             <Ficons  name="bookmark" size={30} color="#000" style={[styles.icon,styles.Share]}/>
             </TouchableOpacity>
             </View>


             </View>
         </View>
         
     </View>


     <View style={styles.post}>
         
         <View style={styles.PostprofileInfo}>
         <TouchableOpacity style={styles.ProfileTouchable}>
             <View style={styles.ProfileInfo}>
                 
                 
                 <View style={styles.profilePic}>
                    <Image style={styles.profilePicImg} source={ProfilePic} />
                 </View>
                 <Text style={styles.profileName}>User.name</Text>
                
             </View>
             </TouchableOpacity>
         </View>
         <View style={styles.postImage}>
             <Image style={styles.postImageImg} source={PostImage} resizeMode="cover" />
         </View>

         <View style={styles.TopDownInfo}>
             <View style={styles.TopDownFunctional}>
                 <TouchableOpacity>
             <Icon  name="hearto" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Ficons  name="message-circle" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Ficons  name="send" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
           

             <View style={styles.share}>
             <TouchableOpacity>
             <Ficons  name="bookmark" size={30} color="#000" style={[styles.icon,styles.Share]}/>
             </TouchableOpacity>
             </View>


             </View>
         </View>
         
     </View>


     <View style={styles.post}>
         
         <View style={styles.PostprofileInfo}>
         <TouchableOpacity style={styles.ProfileTouchable}>
             <View style={styles.ProfileInfo}>
                 
                 
                 <View style={styles.profilePic}>
                    <Image style={styles.profilePicImg} source={ProfilePic} />
                 </View>
                 <Text style={styles.profileName}>User.name</Text>
                
             </View>
             </TouchableOpacity>
         </View>
         <View style={styles.postImage}>
             <Image style={styles.postImageImg} source={PostImage} resizeMode="cover" />
         </View>

         <View style={styles.TopDownInfo}>
             <View style={styles.TopDownFunctional}>
                 <TouchableOpacity>
             <Icon  name="hearto" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Ficons  name="message-circle" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Ficons  name="send" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
           

             <View style={styles.share}>
             <TouchableOpacity>
             <Ficons  name="bookmark" size={30} color="#000" style={[styles.icon,styles.Share]}/>
             </TouchableOpacity>
             </View>


             </View>
         </View>
         
     </View>


     <View style={styles.post}>
         
         <View style={styles.PostprofileInfo}>
         <TouchableOpacity style={styles.ProfileTouchable}>
             <View style={styles.ProfileInfo}>
                 
                 
                 <View style={styles.profilePic}>
                    <Image style={styles.profilePicImg} source={ProfilePic} />
                 </View>
                 <Text style={styles.profileName}>User.name</Text>
                
             </View>
             </TouchableOpacity>
         </View>
         <View style={styles.postImage}>
             <Image style={styles.postImageImg} source={PostImage} resizeMode="cover" />
         </View>

         <View style={styles.TopDownInfo}>
             <View style={styles.TopDownFunctional}>
                 <TouchableOpacity>
             <Icon  name="hearto" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Ficons  name="message-circle" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Ficons  name="send" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
           

             <View style={styles.share}>
             <TouchableOpacity>
             <Ficons  name="bookmark" size={30} color="#000" style={[styles.icon,styles.Share]}/>
             </TouchableOpacity>
             </View>


             </View>
         </View>
         
     </View>


     <View style={styles.post}>
         
         <View style={styles.PostprofileInfo}>
         <TouchableOpacity style={styles.ProfileTouchable}>
             <View style={styles.ProfileInfo}>
                 
                 
                 <View style={styles.profilePic}>
                    <Image style={styles.profilePicImg} source={ProfilePic} />
                 </View>
                 <Text style={styles.profileName}>User.name</Text>
                
             </View>
             </TouchableOpacity>
         </View>
         <View style={styles.postImage}>
             <Image style={styles.postImageImg} source={PostImage} resizeMode="cover" />
         </View>

         <View style={styles.TopDownInfo}>
             <View style={styles.TopDownFunctional}>
                 <TouchableOpacity>
             <Icon  name="hearto" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Ficons  name="message-circle" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Ficons  name="send" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
           

             <View style={styles.share}>
             <TouchableOpacity>
             <Ficons  name="bookmark" size={30} color="#000" style={[styles.icon,styles.Share]}/>
             </TouchableOpacity>
             </View>

                

             </View>
                
         </View>
         
     </View>


     <View style={styles.post}>
         
         <View style={styles.PostprofileInfo}>
         <TouchableOpacity style={styles.ProfileTouchable}>
             <View style={styles.ProfileInfo}>
                 
                 
                 <View style={styles.profilePic}>
                    <Image style={styles.profilePicImg} source={ProfilePic} />
                 </View>
                 <Text style={styles.profileName}>User.name</Text>
                
             </View>
             </TouchableOpacity>
         </View>
         <View style={styles.postImage}>
             <Image style={styles.postImageImg} source={PostImage} resizeMode="cover" />
         </View>

         <View style={styles.TopDownInfo}>
             <View style={styles.TopDownFunctional}>
                 <TouchableOpacity>
             <Icon  name="hearto" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Ficons  name="message-circle" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
             <TouchableOpacity>
             <Ficons  name="send" size={30} color="#000" style={styles.icon}/>
             </TouchableOpacity>
           

             <View style={styles.share}>
             <TouchableOpacity>
             <Ficons  name="bookmark" size={30} color="#000" style={[styles.icon,styles.Share]}/>
             </TouchableOpacity>
             </View>


             </View>
         </View>
         
     </View>

        
    
      </>
}
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
const styles = StyleSheet.create({

    post: {
        marginVertical: 10,
    },
    postImage: {
        width: '100%',
      
        backgroundColor: 'gray',
        marginVertical: 15,
        alignItems: 'center',
        
    },

    postImageImg: {
        width: '100%',
        height: width,

    },

    PostprofileInfo: {
       marginHorizontal: 10,
    },

   ProfileInfo: {
        width: "100%",
        flexDirection: 'row',
        alignItems: 'center',
    },


    profilePic: {
      
        width: "10%",
        height: width / 10,
        backgroundColor: "#808080",
        borderRadius: 30,
    },

    profilePicImg: {
        width: "100%",
        height: "100%",
        borderRadius: 30,
    },

    profileName: {
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft: 10,
    },

    TopDownFunctional: {
        width:"100%",
        flexDirection: "row",
       
        marginHorizontal: 12,
    },
    
    icon: {
        marginHorizontal: 10,
      
    },

    share: {
        marginHorizontal: '40%'
    },

    descText: {
        color: 'black'
    }
    
});