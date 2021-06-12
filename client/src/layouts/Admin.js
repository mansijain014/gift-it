import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "../components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
import DetailsForm from "../components/DetailsForm";

// views

import MyGiftList from "../views/admin/MyGiftList.js";
import Profile from "views/admin/Profile.js";
import Exchange from "../views/admin/Exchange.js";
import Donate from "../views/admin/Donate.js";
import Shop from "../views/admin/Shop";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/mygiftlist" exact component={MyGiftList} />
            <Route path="/admin/profile" exact component={Profile} />
            <Route path="/admin/exchange" exact component={Exchange} />
            <Route path="/admin/donate" exact component={Donate} />
            <Route path="/admin/shop" exact component={Shop} />
            <Redirect from="/admin" to="/admin/mygiftlist" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
