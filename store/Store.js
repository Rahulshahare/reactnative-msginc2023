import { registerInDevtools, Store } from "pullstate";

export const MsgStore = new Store({
    isLoggedIn : false,
    userDetails: '',
    friendList: '',
});


registerInDevtools({
    MsgStore,
});