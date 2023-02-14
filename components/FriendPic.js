import React, { useState, useEffect } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import { MsgStore } from '../store/Store';

export default function FriendPic({url, index}) {
  const [imageData, setImageData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  

  useEffect(() => {
    fetch('https://msginc.ml/imgtobase.php?imageName='+url)
      .then(response => response.text())
      .then(data => {
        setImageData(data);
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if(imageData != null){
    updateState(index, imageData);
    }
  }, [imageData]);

  
  
  const updateState = (index, imageData)=>{
    //console.log(imageData);
      MsgStore.update(s =>{s.friendList[index].new_image = imageData});
    
  }

  return (
    <View>
      {isLoading ? (
        <ActivityIndicator style={{width:70, height:70}} />
      ) : (
        <Image
          source={{ uri: imageData }}
          style={{ width: 70, height: 70,borderRadius:50,}}
        />
      )}
    </View>
  );
}



