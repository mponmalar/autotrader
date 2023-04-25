import { React} from 'react';
import { useSelector } from 'react-redux';

function ShowAccountSummary() {

    let accountDetails = useSelector((state) => state.account.accountDetails);
    
    return (
      <div id="accounts">
        { accountDetails ? 
        <ul>
            <li>Account:{accountDetails.id}</li>
            <li>Currency:{accountDetails.currency}</li>
            <li>Balance:{accountDetails.balance}</li>
            <li>Available Margin: {accountDetails.marginAvailable}</li>
            <li>Used Margin: {accountDetails.marginUsed}</li>
        </ul>
        : '' }
      </div>
    );
  }

  export default ShowAccountSummary;