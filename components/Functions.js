import { MsgStore } from "../store/Store";

function UpdateFriendList(list){
    MsgStore.update(s =>{s.friendList = list})
}
export const GetFriendList = (myId) =>{
    const Buffer = require("buffer").Buffer;
    let encodedId = new Buffer(myId).toString("base64");

    var data = new FormData();
        data.append('identification', 'ReactNativeApp');
        data.append('id',  encodedId);

            var xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://msginc.ml/api/info?u=1&ss=ed25519', true);
            xhr.onload = function () {
                // do something to response
                 //console.log(this.responseText);
                 var returnObject = JSON.parse(this.responseText);
                 if(returnObject.identification == 'ReactNativeApp' && returnObject.friendList != 'NODATA'){
                    //assign the list 
                    UpdateFriendList(returnObject.friendList);
                    //console.log(returnObject.friendList);
                 }
            };
            xhr.send(data);
}