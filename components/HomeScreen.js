import React from 'react'
import { Button, View, Text, StyleSheet } from 'react-native'

class HomeScreen extends React.Component {
  render(){
    return (
      <View style={styles.mainViewContainer}>
        <Text>Code 4 Fukuoka</Text>
        <Text>公園アプリ</Text>
        <View style={styles.buttonContainer}>
        <Button
          title="投稿する"
          titleStyle={styles.buttonStyle}
          onPress={() => this.props.navigation.navigate('Picture')}
        />
        </View>
        <View style={styles.buttonContainer}>
        <Button
          title="公園一覧"
          titleStyle={{ width: 200 }}
          onPress={() => this.props.navigation.navigate('List')}
        />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  mainViewContainer:{
    alignItems: 'center',
    width:"100%",
  },
  buttonContainer: {
    marginTop:5,
    alignItems: 'center',
  },
  buttonStyle:{
    fontSize: 20,
  },
});

export default HomeScreen;