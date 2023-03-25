import PropTypes from "prop-types";
import "./Friends.css"
export const FriendList = ({ friends }) => { 
    return (
        <ul className="friend-list">
            {friends.map((friend) => (
                <li key={friend.id} class="item">
         <span style={colorStatus(friend.isOnline)} classMame="status">&#10003;</span>
                    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p className="name">{friend.name}</p>
        </li>
             ))}
        </ul>
           )
        }

function colorStatus(value) { 
    if (value) {
        return {
            color  : "green"
        }
    }  else { 
        return {
            color: "red"
        }
    }
}
    
FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}

