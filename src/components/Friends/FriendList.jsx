import { FriendListItem } from "./FriendListItem";
import "./Friends.css"
export const FriendList = ({ friends }) => { 
    return (
        <ul className="friend-list">
            <FriendListItem friends={friends}/>
        </ul>
           )
        }



