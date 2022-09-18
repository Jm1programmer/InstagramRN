
import { StyleSheet, Text, View,StatusBar,SafeAreaView, ScrollView, FlatList } from 'react-native';
import MenuFeed from "./MenuFeed"
import StoriesFeed from "./StoriesFeed"
import PostFeed from "./FeedPost"
export default function FeedInsta() {
    
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
       <Text>OIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOIOOIOIOIOIOIOIOIOIOIOIOI</Text>
        </ScrollView>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    SafeArea: {
        flex: 1
    }
});