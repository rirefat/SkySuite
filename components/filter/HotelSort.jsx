/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const HotelSort = () => {
    const [sorting, setSorting] = useState("");
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const params = new URLSearchParams(searchParams);

    const handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value;

        if (value) {
            setSorting(value)
        } else {

            setSorting("");
        }
    }

    useEffect(()=>{
        const sortValue = params.get('sort')
        if(sortValue){
            setSorting(sortValue);
        }
    },[])

    useEffect(() => {
        if (sorting) {
            params.set('sort', sorting)
        } else {
            params.delete('sort')
        }

        replace(`${pathName}?${params.toString()}`);
    }, [sorting])


    return (
        <div>
            <h3 className="font-bold text-lg">Sort By</h3>
            <form action="" className="flex flex-col gap-2 mt-2">
                <label htmlFor="highToLow" className="cursor-pointer hover:text-blue-600">
                    <input
                        onChange={handleChange}
                        className="mr-2"
                        type="radio"
                        name="hotelSort"
                        id="highToLow"
                        value="highToLow"
                        checked={sorting === "highToLow"}
                    />
                    Price High to Low
                </label>

                <label htmlFor="lowToHigh" className="cursor-pointer hover:text-blue-600">
                    <input
                        onChange={handleChange}
                        className="mr-2"
                        type="radio"
                        name="hotelSort"
                        id="lowToHigh"
                        value="lowToHigh"
                        checked={sorting === "lowToHigh"}
                    />
                    Price Low to high
                </label>

            </form>
        </div>
    );
};

export default HotelSort;