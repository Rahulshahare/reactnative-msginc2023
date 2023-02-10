import { View, Text , Image, ActivityIndicator} from 'react-native'
import React, { useEffect, useState } from 'react'

export default function  FriendPic ({url}) {
    const [imgSource, SetImgSource] = useState('');

    const loadImageFromUrl = (imageToGet) =>{
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://msginc.ml/imgtobase.php?imageName='+imageToGet, true);
        xhr.onload = function () {
            // do something to response
             //console.log(this.responseText);
             SetImgSource(this.responseText);
        };
        xhr.send();
    }
    useEffect(() => {
        if(url != undefined){
            loadImageFromUrl(url); 
            //console.log(url);
        }
      });
    const imageGen = imgSource == '' 
                        ? <ActivityIndicator style={{width:70, height:70}}/> 
                        :   <Image source={{uri: imgSource}}
                            style={{width: 70, height: 70,borderRadius:50,}}
                            />
  return (
    <>
    {imageGen}
    </>
  )
}