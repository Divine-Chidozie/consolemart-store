import { Link, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import DashboardCard from "./DashboardCard";
import RecentOrder from "./RecentOrder";
import UserProfile from "./UserProfile";
// import { useNavigate } from "react-router-dom";a

const Dashboard = () => {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const totalSpent = orders.reduce((acc, order) => acc + (order.total || 0), 0);

  function handleLogout() {
    localStorage.removeItem("userSignIn");
    navigate("/signin");
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="bg-gray-900 text-white w-full md:w-64 min-h-screen p-6">
          <h1 className="text-2xl font-bold mb-10">GameVault</h1>

          <nav className="flex flex-col gap-3">
            <Link to="/dashboard" className="bg-gray-800 px-4 py-3 rounded-lg">
              Dashboard
            </Link>

            <Link
              to="/shop"
              className="hover:bg-gray-800 px-4 py-3 rounded-lg transition"
            >
              Shop
            </Link>

            <Link
              to="/cart"
              className="hover:bg-gray-800 px-4 py-3 rounded-lg transition"
            >
              Cart
            </Link>

            <Link
              to="/orders"
              className="hover:bg-gray-800 px-4 py-3 rounded-lg transition"
            >
              Orders
            </Link>

            <button
              onClick={handleLogout}
              className="bg-red-600 mt-5 py-3 rounded-lg"
            >
              Logout
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Header */}
          <section className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-5">
              <div>
                <h2 className="text-3xl font-bold">Welcome Back 👋</h2>

                <p className="text-gray-500 mt-1">
                  Manage your GameVault account
                </p>
              </div>

              {/* Avatar */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white text-xl font-bold">
                  {user?.userFirstName?.charAt(0) || "G"}
                </div>

                <div>
                  <h3 className="font-semibold">
                    {user?.userFirstName} {user?.userLastName}
                  </h3>

                  <p className="text-sm text-gray-500">{user?.userEmail}</p>
                </div>
              </div>
            </div>
          </section>

          {/* Analytics Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-500 text-sm">Total Orders</p>

              <h3 className="text-4xl font-bold mt-2">{orders.length}</h3>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-500 text-sm">Cart Items</p>

              <h3 className="text-4xl font-bold mt-2">{cartItems.length}</h3>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <p className="text-gray-500 text-sm">Total Spent</p>

              <h3 className="text-3xl font-bold mt-2 text-green-600">
                ₦{totalSpent.toLocaleString()}
              </h3>
            </div>
          </section>

          {/* Account Information */}
          <section className="bg-white rounded-xl shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Account Information</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 text-sm">First Name</p>

                <p className="font-medium">{user?.userFirstName}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Last Name</p>

                <p className="font-medium">{user?.userLastName}</p>
              </div>

              <div>
                <p className="text-gray-500 text-sm">Email Address</p>

                <p className="font-medium">{user?.userEmail}</p>
              </div>
            </div>
          </section>

          {/* Recent Orders */}
          <section className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-5">Recent Orders</h2>

            {orders.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500">No orders found.</p>

                <Link
                  to="/shop"
                  className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-md"
                >
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3">Order ID</th>

                      <th className="text-left py-3">Status</th>

                      <th className="text-left py-3">Amount</th>

                      <th className="text-left py-3">Date</th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-4">{order.id}</td>

                        <td className="py-4">
                          <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                            {order.status}
                          </span>
                        </td>

                        <td className="py-4">
                          ₦{order.total?.toLocaleString()}
                        </td>

                        <td className="py-4">{order.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
