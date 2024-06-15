import { useQuery } from "@tanstack/react-query";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { SiGoogleclassroom, SiTrainerroad } from "react-icons/si";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts';
import { useState } from "react";
import { Spinner } from "flowbite-react";
const Balance = () => {
    // static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';
    const [activeIndex, setActiveIndex] = useState(0);
    const axiosSecure = useAxiosSecure();
    const { data, isLoading } = useQuery({
        queryKey: ['stats'],
        queryFn: async () => {
            const { data } = await axiosSecure('/balance/stats')
            return data
        }
    })

    const totalPaidData = [
        { name: 'Paid Members', value: data?.paid || 0 },
    ];
    const totalSubscribers = [
        { name: 'Subscribers', value: data?.subscribers || 0 },
    ];
    const renderActiveShape = (props) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';

        return (
            <g>
                <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                    {payload.name}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`Total ${value}`}</text>
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`(Rate ${(percent * 100).toFixed(2)}%)`}
                </text>
            </g>
        );
    };

    const onPieEnter = (_, index) => {
        setActiveIndex(index)

    };
    if (isLoading) {
        return <Spinner className="mx-auto w-full mt-48" color='failure' aria-label="Extra large spinner example" size="xl" />
    }

    return (
        <div>
            <h3 className="font-sedan mb-10 text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">Balance</h3>
            <section className="p-6 my-6 dark:bg-gray-100 dark:text-gray-800">
                <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                    <div className="flex p-4 bg-red-400 text-white space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-default-600">
                            <RiMoneyDollarCircleFill className="text-4xl text-white" />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">${data?.balance}</p>
                            <p className="capitalize">Total Balance</p>
                        </div>
                    </div>
                    <div className="flex p-4 bg-red-400 text-white space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-default-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-9 text-white w-9 dark:text-gray-100">
                                <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                                <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                                <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                                <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">{data?.members}</p>
                            <p className="capitalize">Total Members</p>
                        </div>
                    </div>
                    <div className="flex p-4 bg-red-400 text-white space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-default-600">
                            <SiTrainerroad className="text-white text-3xl " />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">{data?.trainers}</p>
                            <p className="capitalize">Total Trainers</p>
                        </div>
                    </div>
                    <div className="flex p-4 bg-red-400 text-white space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                        <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-default-600">
                            <SiGoogleclassroom className="text-white text-3xl" />
                        </div>
                        <div className="flex flex-col justify-center align-middle">
                            <p className="text-3xl font-semibold leading-none">{data?.classes}</p>
                            <p className="capitalize">Total Class</p>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <h3 className="font-sedan text-center mt-20 md:mt-16 lg:mt-10 text-4xl font-semibold">Latest Transactions</h3>
                <div className="w-full mt-10 overflow-x-auto">
                    <table className="w-full text-left border border-separate rounded border-slate-200" cellSpacing="0">
                        <tbody>
                            <tr>
                                <th scope="col" className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0 stroke-slate-700 text-white bg-red-400">No</th>
                                <th scope="col" className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0 stroke-slate-700 text-white bg-red-400">Customer Name</th>
                                <th scope="col" className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0 stroke-slate-700 text-white bg-red-400">Amount Paid</th>
                                <th scope="col" className="h-12 px-6 text-sm font-medium text-center border-l first:border-l-0 stroke-slate-700 text-white bg-red-400">Order Details</th>

                            </tr>
                            {
                                data?.transaction?.slice(0, 6).map((buyer, index) => {
                                    return <tr key={buyer._id}>
                                        <th scope="row" className="h-12  px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{index + 1}</th>
                                        <td className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{buyer?.name}</td>
                                        <td className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{buyer?.price}</td>
                                        <td className="h-12 px-6 text-sm text-center transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{buyer?.classes?.map((singleClass, index) => <p key={index}>{singleClass}</p>)}</td>

                                    </tr>
                                })
                            }

                        </tbody>

                    </table>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-around">
                <ResponsiveContainer height={400} width={400}>
                    <PieChart width={400} height={400}>
                        <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={totalPaidData}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            onMouseEnter={onPieEnter}
                        />
                    </PieChart>
                </ResponsiveContainer>
                <h3 className="font-bold font-sedan text-5xl">VS</h3>
                <ResponsiveContainer height={400} width={400}>
                    <PieChart width={400} height={400}>
                        <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={totalSubscribers}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            onMouseEnter={onPieEnter}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>

        </div>
    );
};

export default Balance;