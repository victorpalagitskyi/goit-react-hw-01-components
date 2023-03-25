import { FriendListItem } from "./FriendListItem";
import "./Friends.css"
export const FriendList = ({ friends }) => { 
    return (
        <ul className="friend-list">
            {friends.map((friend) => (
                <FriendListItem friend={friend} />))
            }
        </ul>
           )
        }



