import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef,  } from 'react';
import { MsgStore } from '../store/Store';

export default function MessageComponent({ route, navigation }) {
    const { userName,userTwoId } = route.params;
    const scrollViewRef = useRef();

    function SetUserTwoId(id){
        MsgStore.update(s=>{s.userTwoId = id})
    }
    useEffect( ()=>{
        SetUserTwoId(userTwoId)
    });
  return (
    <View style={styles.container}>
      <ScrollView style={styles.msgBox}
      ref={scrollViewRef}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      >
        <Text>msgOne</Text>
            <View style={{padding:10,alignItems:'flex-end',margin:5}}>
                <Text style={{padding:10,borderWidth:1,backgroundColor:"#fff",maxWidth:"60%"}}>
                at FlowParserMixin.parseStatementLike (C:\Users\rahul\Desktop\reactnative-msginc\node_modules\@babel\parser\lib\index.js:12535:17)
                </Text>
            </View>
            <View style={{padding:10,alignItems:'flex-end',margin:5}}>
                <Text style={{padding:10,borderWidth:1,backgroundColor:"#fff",maxWidth:"60%"}}>
                at FlowParserMixin.parseStatementLike (C:\Users\rahul\Desktop\reactnative-msginc\node_modules\@babel\parser\lib\index.js:12535:17)
                </Text>
            </View>
            <View style={{padding:10,alignItems:'flex-start',margin:5}}>
                <Text style={{padding:10,borderWidth:1,backgroundColor:"#fff",maxWidth:"60%"}}>
                at FlowParserMixin.parseStatementLike (C:\Users\rahul\Desktop\reactnative-msginc\node_modules\@babel\parser\lib\index.js:12535:17)
                </Text>
            </View>
            <View style={{padding:10,alignItems:'flex-end',margin:5}}>
                <Text style={{padding:10,borderWidth:1,backgroundColor:"#fff",maxWidth:"60%"}}>
                at FlowParserMixin.parseStatementLike (C:\Users\rahul\Desktop\reactnative-msginc\node_modules\@babel\parser\lib\index.js:12535:17)
                </Text>
            </View>
            <View style={{padding:10,alignItems:'flex-start',margin:5}}>
                <Text style={{padding:10,borderWidth:1,backgroundColor:"#fff",maxWidth:"60%"}}>
                at FlowParserMixin.parseStatementLike (C:\Users\rahul\Desktop\reactnative-msginc\node_modules\@babel\parser\lib\index.js:12535:17)
                </Text>
            </View>
            <View style={{padding:10,alignItems:'flex-end',margin:5}}>
                <Text style={{padding:10,borderWidth:1,backgroundColor:"#fff",maxWidth:"60%"}}>
                at FlowParserMixin.parseStatementLike (C:\Users\rahul\Desktop\reactnative-msginc\node_modules\@babel\parser\lib\index.js:12535:17)
                </Text>
            </View>
            <View style={{padding:10,alignItems:'flex-start',margin:5}}>
                <Text style={{padding:10,borderWidth:1,backgroundColor:"#fff",maxWidth:"60%"}}>
                at FlowParserMixin.parseStatementLike (C:\Users\rahul\Desktop\reactnative-msginc\node_modules\@babel\parser\lib\index.js:12535:17)
                </Text>
            </View>
            <View style={{padding:10,alignItems:'flex-end',margin:5}}>
                <Text style={{padding:10,borderWidth:1,backgroundColor:"#fff",maxWidth:"60%"}}>
                at FlowParserMixin.parseStatementLike (C:\Users\rahul\Desktop\reactnative-msginc\node_modules\@babel\parser\lib\index.js:12535:17)
                </Text>
            </View>
            <View style={{padding:10,alignItems:'flex-start',margin:5}}>
                <Text style={{padding:10,borderWidth:1,backgroundColor:"#fff",maxWidth:"60%"}}>
                at FlowParserMixin.parseStatementLike (C:\Users\rahul\Desktop\reactnative-msginc\node_modules\@babel\parser\lib\index.js:12535:17)
                </Text>
            </View>
            <View style={{padding:10,alignItems:'flex-end',margin:5}}>
                <Text style={{padding:10,borderWidth:1,backgroundColor:"#fff",maxWidth:"60%"}}>
                at FlowParserMixin.parseStatementLike (C:\Users\rahul\Desktop\reactnative-msginc\node_modules\@babel\parser\lib\index.js:12535:17)
                </Text>
            </View>
            <View style={{padding:10,alignItems:'flex-end',margin:5}}>
                <Text style={{padding:10,borderWidth:1,backgroundColor:"#fff",maxWidth:"60%"}}>
                at FlowParserMixin.parseStatementLike (C:\Users\rahul\Desktop\reactnative-msginc\node_modules\@babel\parser\lib\index.js:12535:17)
                </Text>
            </View>
            <View style={{padding:10,alignItems:'flex-end',margin:5}}>
                <Text style={{padding:10,borderWidth:1,backgroundColor:"#fff",maxWidth:"60%"}}>
                LAst msg
                </Text>
            </View>
      </ScrollView>
      <View style={styles.inputBox}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#09f",
        flexDirection:'column'
    },
    msgBox:{
        flex:0.90,
    },
    inputBox:{
        flex:0.10,
        backgroundColor:"#000",
    },
});