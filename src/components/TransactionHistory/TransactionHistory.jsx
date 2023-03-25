import PropTypes from "prop-types";
import "./TransactionHistory.css"
export const TransactionHistory = ({ items }) => {  

    return (
            < table className="transaction-history" >
            <thead className="transaction-history-head" > 
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            {items.map((item) => (
                <tbody key={item.id}>
                    <tr>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                </tbody>
            ))}
        </table>
            ) 
}  


TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
}
 
    



