
import { StyleSheet, Text, View,StatusBar,SafeAreaView, Image, ScrollView, Dimensions } from 'react-native';
import ProfilePic from "../../../assets/FaceBookProfilePic.png"
import ProfilePic2 from "../../../assets/images.jpeg"

export default function StoriesFeed() {
    
    
  return <>
    <View style={styles.StorieFlex}>
        <ScrollView style={styles.StorieScroll} horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.Stories}>
            <View style={styles.Storie}>
                <Image style={styles.StorieImage} source={ProfilePic2} />
            </View>
            <Text style={styles.StorieText}>Seu Story</Text>
        </View>

        <View style={styles.Stories}>
            <View style={styles.Storie}>
                <Image style={styles.StorieImage} source={ProfilePic} />
            </View>
            <Text style={styles.StorieText}>User.name</Text>
        </View>
        
        <View style={styles.Stories}>
            <View style={styles.Storie}>
                <Image style={styles.StorieImage} source={ProfilePic} />
            </View>
            <Text style={styles.StorieText}>User.name</Text>
        </View>

        
        <View style={styles.Stories}>
            <View style={styles.Storie}>
                <Image style={styles.StorieImage} source={ProfilePic} />
            </View>
            <Text style={styles.StorieText}>User.name</Text>
        </View>

        
        <View style={styles.Stories}>
            <View style={styles.Storie}>
                <Image style={styles.StorieImage} source={ProfilePic} />
            </View>
            <Text style={styles.StorieText}>User.name</Text>
        </View>

        
        <View style={styles.Stories}>
            <View style={styles.Storie}>
                <Image style={styles.StorieImage} source={ProfilePic} />
            </View>
            <Text style={styles.StorieText}>User.name</Text>
        </View>

        
        <View style={styles.Stories}>
            <View style={styles.Storie}>
                <Image style={styles.StorieImage} source={ProfilePic} />
            </View>
            <Text style={styles.StorieText}>User.name</Text>
        </View>

        
        <View style={styles.Stories}>
            <View style={styles.Storie}>
                <Image style={styles.StorieImage} source={ProfilePic} />
            </View>
            <Text style={styles.StorieText}>User.name</Text>
        </View>

        
        <View style={styles.Stories}>
            <View style={styles.Storie}>
                <Image style={styles.StorieImage} source={ProfilePic} />
            </View>
            <Text style={styles.StorieText}>User.name</Text>
        </View>
        
        
        </ScrollView>
        
       
      
    </View>

    </>;
}
const height = Dimensions.get('screen').height
const styles = StyleSheet.create({
    StorieFlex: {
       width: "100%",
       height: height/7,
        flexDirection: "row",
        justifyContent: 'space-between',
       

    },

    StorieScroll: {
        width: "100%",
      
    },
    Storie: {
        width: 75,
        height: 75,
        backgroundColor: "#808080",
        borderRadius: 40,
        marginHorizontal:12 ,
       alignItems: 'center',
    },

    StorieImage: {
        width: 75,
        height: 75,
        backgroundColor: "#808080",
        borderRadius: 40,
        marginHorizontal:12 ,
        
    },

    StorieText: {
        paddingVertical: 6,
        color: '#000',
        fontSize: 13,
        textAlign: 'center',
    }
});