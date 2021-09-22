import {combineReducers} from 'redux';
import * as type from '../_actions/types';

const chatStates = {
    chatList: [],
    socketId: null
}

const chatReducer = (state = chatStates, action) =>{
    switch(action.type){
        case "MY_SOCKET_ID":
            return{...state, socketId:action.socketId};
        case type.RECEIVE_CHAT:
            let newChatList = state.chatList.slice();
            newChatList.push(action.data);
            return{...state, chatList:newChatList};
        case "CLEAR_CHAT":
            return{...state, chatList:[]};
        default:
            return state;
    }
}

const rootReducer = combineReducers({chatReducer});

export default rootReducer;