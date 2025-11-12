import React, { act, useState } from "react";
import Sidebar from "./Sidebar";
import ProfileInfo from "./ProfileInfo";
import OrderHistory from "./OrderHistory";
import Settings from "./Settings";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    // switch (activeTab) {
    // case "orders":
    //   return <OrderHistory />;
    // case "settings":
    //   return <Settings />;
    // case "profileinfo":
    //   return <ProfileInfo />;
    // }

    if (activeTab === "orders") {
      return <OrderHistory />;
    } else if (activeTab === "settings") {
      return <Settings />;
    }
  };
  return (
    <div className="dashboard flex">
      <Sidebar setActiveTab={setActiveTab} />
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard;
