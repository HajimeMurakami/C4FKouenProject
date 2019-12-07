import React from 'react'
import { Button, View, Text } from 'react-native'
import { firestore }  from '../Firebase';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';



export default class PictureScreen extends React.Component {

  componentDidMount = () => {
    this.getPermissionAsync();
  }

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
        const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            alert('カメラ利用の許可が必要です。')
        }
    }
  }

  onChooseImagePress = async () => {
    let result = await ImagePicker.launchCameraAsync();
    //ライブラリから選ぶ場合
    // let result = await ImagePicker.launchImageLibraryAsyn();

    if (!result.cancelled) {
        this.uploadImage(result.uri, "test-image")
            .then(() => {
                alert("success");
            })
            .catch(e => {
                alert(JSON.stringify(e));
            })
    }
  }
  uploadImage = async (uri, imageName) => {

    //元のファイルからblobを生成
    const response = await fetch(uri);
    const blob = await response.blob();

    //firestoreの保存場所指定
    var ref = firestore.storage().ref().child("images/" + imageName);

    //保存場所にput
    return ref.put(blob);
  }


  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>写真を選択/写真を撮る</Text>
          <Button
              title="写真を選択"
              onPress={() => this.onChooseImagePress()}
          />
      </View>
  );
  }
}


