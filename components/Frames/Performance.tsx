import InfoIcon from '@mui/icons-material/Info';
export default function Performance() {

    return (
        <div className="bg-white h-auto w-full flex flex-col gap-4 p-8 rounded-lg" >
            <h1 className="text-2xl font-bold">Performance</h1>
            <div className="h-[20vh]">
                
            </div>

            <div className=' h-auto'>
                <h1 className='text-lg font-bold'>Fundamentals <InfoIcon className='text-gray-500'/></h1>
                <div className='flex'>
                    
                    <div className=" p-4 w-full h-auto">
                        <table className="w-full">
                            <tbody className='h-auto text-sm'>
                                <tr className="border-b mb-4">
                                    <td className="py-2 px-4 text-left text-gray-500">Bitcoin Price</td>
                                    <td className="py-2 px-4 text-right text-black">$16,815.46</td>
                                </tr>
                                <tr className="border-b mb-4 ">
                                    <td className="py-2 px-4 text-left text-gray-500">24h Low / 24h High</td>
                                    <td className="py-2 px-4 text-right text-black">$16,382.07 / $16,874.12</td>
                                </tr>
                                <tr className="border-b mb-4 ">
                                    <td className="py-2 px-4 text-left text-gray-500">7d Low / 7d High</td>
                                    <td className="py-2 px-4 text-right text-black">$16,382.07 / $16,874.12</td>
                                </tr>
                                <tr className="border-b mb-4 ">
                                    <td className="py-2 px-4 text-left text-gray-500">Trading Volume</td>
                                    <td className="py-2 px-4 text-right text-black">$23,249,202,782</td>
                                </tr>
                                <tr className="border-b mb-4 ">
                                    <td className="py-2 px-4 text-left text-gray-500">Market Cap Rank</td>
                                    <td className="py-2 px-4 text-right text-black">#1</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className=" p-4 w-full h-auto">
                        <table className="w-full">
                            <tbody className='h-auto text-sm'>
                                <tr className="border-b mb-4">
                                    <td className="py-2 px-4 text-left text-gray-500">Market Cap</td>
                                    <td className="py-2 px-4 text-right text-black">$323,507,290,047</td>
                                </tr>
                                <tr className="border-b mb-4 ">
                                    <td className="py-2 px-4 text-left text-gray-500">Market Cap Dominance</td>
                                    <td className="py-2 px-4 text-right text-black">38.343%</td>
                                </tr>
                                <tr className="border-b mb-4 ">
                                    <td className="py-2 px-4 text-left text-gray-500">Volume / Market Cap</td>
                                    <td className="py-2 px-4 text-right text-black">0.0718</td>
                                </tr>
                                <tr className="border-b mb-4 ">
                                    <td className="py-2 px-4 text-left text-gray-500">All-Time High</td>
                                    <td className="py-2 px-4 text-right text-black">$69,044.77 <span className='text-red-600'>-75.6%</span></td>
                                </tr>
                                <tr className="border-b mb-4 ">
                                    <td className="py-2 px-4 text-left text-gray-500">All-Time Low</td>
                                    <td className="py-2 px-4 text-right text-black">$67.81 <span className='text-green-500'>+24729.1%</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}