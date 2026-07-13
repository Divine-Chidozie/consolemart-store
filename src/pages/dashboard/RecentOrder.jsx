const DashboardCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-5 mb-8">
      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500">Orders</h3>
        <h2 className="text-3xl font-bold">24</h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500">Products</h3>
        <h2 className="text-3xl font-bold">12</h2>
      </div>

      <div className="bg-white p-5 rounded-xl shadow">
        <h3 className="text-gray-500">Spent</h3>
        <h2 className="text-3xl font-bold">₦350,000</h2>
      </div>
    </div>
  );
};

export default DashboardCards;
