import React from 'react'
import { Content, Button, View, Text, List, ListItem, FlatList,StyleSheet } from 'react-native'
import { firestore }  from '../Firebase';
const db = firestore;


function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default class ListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allKouenList:[]
    };
  }

  componentDidMount = () => {
      this.getKouenList();
  }

  getKouenList = () => {
  
    let citiesRef = db.collection('kouen');
    let allCities = citiesRef.get()
    .then(snapshot => {
      var tempKouenList = []
      snapshot.forEach(doc => {
        tempKouenList.push(doc.data());
      });
      this.setState({allKouenList: tempKouenList});
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });
  }

  render() {
    return (
      <View style={styles.mainViewContainer}>
      <Text>公園情報を取得して一覧を表示しよう</Text>
      <FlatList
      data={this.state.allKouenList}
      renderItem={({item}) => <Item title={item.kouenmei} />}
      />
      </View>
    
    );
  }
}

const styles = StyleSheet.create({
  mainViewContainer:{
    alignItems: 'center',
    width:"100%",
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});


