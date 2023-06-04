import Image from "next/legacy/image";
import axios from "axios";

const Order = ({ order }) => {
  const status = order?.status;

  const statusClass = (index) => {
    if (index - status < 1) return "";
    if (index - status === 1) return "animate-pulse";
    if (index - status > 1) return "";
  };
  return (
    <div className="min-h-[calc(100vh_-_433px)] flex justify-between items-center flex-col p-10">
      <div className="flex items-center flex-1 overflow-x-auto w-full">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px]">
          <thead className="text-xs text-gray-400 uppercase bg-gray-700">
            <tr>
              <th scope="col" className="py-3 px-6">
                ORDER ID
              </th>
              <th scope="col" className="py-3 px-6">
                CUSTOMER
              </th>
              <th scope="col" className="py-3 px-6">
                ADDRESS
              </th>
              <th scope="col" className="py-3 px-6">
                TOTAL
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="transition-all bg-secondary hover:bg-primary border-gray-700">
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white flex items-center gap-x-1 justify-center">
                {order?._id.substring(0, 5)}...
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                {order?.customer}
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                {order?.address}
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white">
                ${order?.total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-between w-full p-10 bg-primary mt-6">
        <div className={`relative flex flex-col ${statusClass(0)}`}>
          <Image
            src="/images/paid.png"
            alt=""
            width={40}
            height={40}
            objectFit="contain"
          />
          <span>Payment</span>
        </div>
        <div className={`relative flex flex-col ${statusClass(1)}`}>
          <Image
            src="/images/bake.png"
            alt=""
            width={40}
            height={40}
            objectFit="contain"
          />
          <span>Preparing</span>
        </div>
        <div className={`relative flex flex-col ${statusClass(2)}`}>
          <Image
            src="/images/bike.png"
            alt=""
            width={40}
            height={40}
            objectFit="contain"
          />
          <span>On the way</span>
        </div>
        <div className={`relative flex flex-col ${statusClass(3)}`}>
          <Image
            src="/images/delivered.png"
            alt=""
            width={40}
            height={40}
            objectFit="contain"
          />
          <span>Delivered</span>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/${params.id}`
  );

  return {
    props: {
      order: res.data ? res.data : null,
    },
  };
};

export default Order;
