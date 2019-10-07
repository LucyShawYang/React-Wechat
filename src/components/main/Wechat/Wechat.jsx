import React from "react";
import WechatHeader from "./WechatHeader/WechatHeader"
import MessageList from "../../../containers/Message/Message"

export default class Wechat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }    
    render() {
        return <div>
            <WechatHeader></WechatHeader>
            <MessageList></MessageList>
        </div>
    }
}