import PropTypes from "prop-types";
export const FriendList = ({ friends }) => { 
    return (
        <ul className="friend-list">
            {friends.map((friend) => (
                <li key={friend.id} class="item">
         <span style={colorStatus(friend.status) } class="status"></span>
                    <img class="avatar" src={friend.avatar}  alt="User avatar" width="48" />
                    <p class="name">{friend.name}</p>
</li>
                
            ))}
</ul>

    )
}
FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}

function colorStatus(value) { 
    if (value) {
        return {
            color  : "green"
        }
    }  else { 
            return {
                color: "red"
            };
        }
       

    }
