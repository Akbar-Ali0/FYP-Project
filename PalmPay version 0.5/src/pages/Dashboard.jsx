const transactions = [
  { id: 1, type: 'Deposit', amount: 200.0, date: '2025-05-25' },
  { id: 2, type: 'Payment to ABC Store', amount: -45.0, date: '2025-05-26' },
  { id: 3, type: 'Received from John', amount: 100.0, date: '2025-05-27' },
  { id: 4, type: 'Subscription - Music App', amount: -10.0, date: '2025-05-28' },
]
  const balance = 1245.5
  const totalSpent = transactions.filter(t => t.amount < 0).reduce((sum, t) => sum + Math.abs(t.amount), 0)
  const totalReceived = transactions.filter(t => t.amount > 0).reduce((sum, t) => sum + t.amount, 0)

function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500">Current Balance</h2>
          <p className="text-3xl font-semibold text-green-600">${balance.toFixed(2)}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500">Total Received</h2>
          <p className="text-3xl font-semibold text-blue-600">${totalReceived.toFixed(2)}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-gray-500">Total Spent</h2>
          <p className="text-3xl font-semibold text-red-600">${totalSpent.toFixed(2)}</p>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Transactions</h2>
        <ul className="divide-y divide-gray-200">
          {transactions.map(tx => (
            <li key={tx.id} className="py-3 flex justify-between items-center">
              <div>
                <p className="text-gray-700">{tx.type}</p>
                <p className="text-sm text-gray-400">{tx.date}</p>
              </div>
              <div className={`text-lg font-medium ${tx.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                {tx.amount < 0 ? '-' : '+'}${Math.abs(tx.amount).toFixed(2)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Dashboard