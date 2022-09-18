
import { StyleSheet, Text, View,StatusBar,SafeAreaView, ScrollView, FlatList,Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import MenuFeed from "./MenuFeed"
import StoriesFeed from "./StoriesFeed"
import PostFeed from "./FeedPost"
export default function FeedInsta() {

  const [fontsLoaded] = useFonts({
    'SegoeUI': require('./../../../assets/fonts/SegoeUI.ttf'),
    'SegoeUIBold': require('./../../../assets/fonts/SegoeUIBold.ttf'),
  });

 if (!fontsLoaded) {
  return null
 }
    
    StatusBar.setBarStyle('dark', true);
  return (
    <SafeAreaView style={styles.SafeArea} >
    <View style={styles.container}>
      <StatusBar  backgroundColor={'#fff'} barStyle={'dark-content'} hidden={false} />
        <MenuFeed />
        <ScrollView  >
            <View style={{ flexGrow: 0.95 }}>
            <StoriesFeed />
        <PostFeed />
            </View>
            <View style={styles.whiteback}></View>
        </ScrollView>
    </View>
    </SafeAreaView>
  );
}
const height = Dimensions.get('screen').height
const styles = StyleSheet.create({
    SafeArea: {
        flex: 1
    },
    whiteback: {
      height: height /9
    }
});