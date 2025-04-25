import {LineChart} from '@mui/x-charts/LineChart';


const Home = () => {
  return (
    <div className="flex justify-between h-screen p-2 bg-gray-200 w-[77vw]">
      {/* Left side */}
      <div className="flex flex-col w-2/3">
        <div className="flex w-[50vw]">
          <div className="bg-white h-52 w-52 m-5 shadow-md rounded-xl flex flex-col justify-center items-center">
            <div className="h-32 w-32 m-5 border-[10px] border-red-400 rounded-full flex justify-center items-center">
              <h2 className="font-bold text-2xl">667</h2>
            </div>
            <h2 className="font-semibold text-xl">Products</h2>
          </div>
          <div className="bg-white h-52 w-52 m-5 shadow-md rounded-xl flex flex-col justify-center items-center">
            <div className="h-32 w-32 m-5 border-[10px] border-orange-400 rounded-full flex justify-center items-center">
              <h2 className="font-bold text-2xl">555</h2>
            </div>
            <h2 className="font-semibold text-xl">Orders</h2>
          </div>
          <div className="bg-white h-52 w-52 m-5 shadow-md rounded-xl flex flex-col justify-center items-center">
            <div className="h-32 w-32 m-5 border-[10px] border-yellow-400 rounded-full flex justify-center items-center">
              <h2 className="font-bold text-2xl">4000</h2>
            </div>
            <h2 className="font-semibold text-xl">Users</h2>
          </div>
        </div>

        {/* table */}
        <div className="bg-white m-5 p-5 rounded-xl shadow-md">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-bold mb-4">Latest Transactions</h3>
            <table className="min-w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4">Customer</th>
                  <th className="py-2 px-4">Amount</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-2 px-4">faten lahlouh</td>
                  <td className="py-2 px-4">$ 200</td>
                  <td className="py-2 px-4">Approved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex flex-col w-1/3 bg-white m-5 rounded-xl shadow-md">
       <div className="bg-gray-50 p-5 rounded-lg shadow-xl mb-5 flex flex-col items-center">
   <h2 className="font-bold text-2xl">Total Revenue: $200,000</h2>
       </div>
       <div className="bg-gray-50 p-5 rounded-lg shadow-xl mb-5 flex flex-col items-center">
   <h2 className="font-bold text-2xl">Total Losses: $0</h2>
       </div>
       <LineChart
  xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
  series={[
    {
      data: [2, 5.5, 2, 8.5, 1.5, 5],
    },
  ]}
  height={300}
/>


       
      </div>
    </div>
  );
};

export default Home;
