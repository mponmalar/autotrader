import { Outlet, NavLink } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import { useSelector } from "react-redux";
import GetAccounts from "../components/accounts/GetAccounts";

export default function Root() {

  let currentUser = useSelector((state) => state.login.user);

    return (
      <>
        <div id="sidebar">
          <h1>Auto Trader</h1>
          <div><GoogleAuth /></div>
          <nav>
            {currentUser ? 
            <ul>
              <li>
                <NavLink to='GetAccounts'
                className={({ isActive, isPending }) =>
                   isActive
                   ? "active"
                   : isPending
                   ? "pending"
                   : ""
                 }
                >Accounts</NavLink>
              </li>
              <li>
                <NavLink to='Menu2'>All Positions</NavLink>
              </li>
            </ul>
            :''}
          </nav>
        </div>
        <div id="detail">
            <Outlet />
        </div>
      </>
    );
  }