import PropTypes from "prop-types";
export const FriendListItem = ({ friend }) => {
    return (
                <li key={friend.id} className="item">
         <span style={colorStatus(friend.isOnline)} className="status">&#10003;</span>
                    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p className="name">{friend.name}</p>
        </li>
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
    
FriendListItem.propTypes = {
    friend: PropTypes.object.isRequired,
}