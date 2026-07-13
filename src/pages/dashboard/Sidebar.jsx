import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-5">
      <h2 className="text-2xl font-bold mb-8">GameVault</h2>

      <nav className="flex flex-col gap-3">
        <Link to="/dashboard" className="hover:bg-gray-800 px-3 py-2 rounded">
          Dashboard
        </Link>

        <Link
          to="/dashboard/orders"
          className="hover:bg-gray-800 px-3 py-2 rounded"
        >
          Orders
        </Link>

        <Link
          to="/dashboard/profile"
          className="hover:bg-gray-800 px-3 py-2 rounded"
        >
          Profile
        </Link>

        <Link to="/shop" className="hover:bg-gray-800 px-3 py-2 rounded">
          Shop
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
