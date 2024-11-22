'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import { FaRegSadTear } from 'react-icons/fa';

const NoHotels = () => {
    const searchParams = useSearchParams();
    const {replace}= useRouter();


    const handleReset = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete('category');

        // Update the URL without reloading the page
        replace(`?${params.toString()}`);
    };

    return (
        <div className="p-8 mb-10 text-center bg-gradient-to-r from-blue-50 to-white rounded-lg shadow-lg">
            <div className="flex justify-center mb-6 text-blue-600">
                <FaRegSadTear size={50} className="animate-bounce" />
            </div>
            <h2 className="mb-4 text-3xl font-extrabold text-gray-800">
                No Hotels Found
            </h2>
            <p className="mb-6 text-lg text-gray-600">
                Unfortunately, we couldn&apos;t find any results matching your search.
                Consider refining your search criteria or try a different location.
            </p>
            {/* <button onClick={handleReset} className="px-6 py-3 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700">
                Reset Filters
            </button> */}
        </div>
    );
};

export default NoHotels;