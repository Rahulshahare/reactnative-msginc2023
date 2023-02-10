import { Store } from "pullstate";

export const MsgStore = new Store({
    isLoggedIn : false,
    userDetails: {},
});