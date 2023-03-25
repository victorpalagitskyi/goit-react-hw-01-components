import { Profile } from "./Profile/Profile";
import user from "../components/Profile/user.json"
import data from "../components/Static/data.json"
import friends from "../components/Friends/friends.json"
import transactions from "../components/TransactionHistory/transactions.json"
import { Statistics } from "./Static/Statistics";
import { FriendList } from "./Friends/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}/>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
    
  );
};


