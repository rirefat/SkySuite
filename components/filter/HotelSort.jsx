'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const HotelSort = () => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const [sorting, setSorting] = useState("");

    useEffect(() => {
        const sortValue = searchParams.get('sort');
        setSorting(sortValue || "");
    }, [searchParams]);

    const handleChange = (event) => {
        const value = event.target.value;
        setSorting(value);

        const params = new URLSearchParams(searchParams.toString());
        if (value) {
            params.set('sort', value);
        } else {
            params.delete('sort');
        }

        replace(`${pathName}?${params.toString()}`);
    };

    return (
        <div>
            <h3 className="font-bold text-lg">Sort By</h3>
            <form className="flex flex-col gap-2 mt-2">
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
                    Price Low to High
                </label>
            </form>
        </div>
    );
};

export default HotelSort;
