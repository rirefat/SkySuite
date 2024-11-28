'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AmenitiesFilter = () => {
    const [amenities, setAmenities] = useState([]);
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();
    const params = new URLSearchParams(searchParams);

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const checked = event.target.checked;

        if (checked) {
            setAmenities(prev => [...prev, name])
        } else {
            const filteredAmenities = amenities.filter(item => item !== name);
            setAmenities(filteredAmenities);
        }
    }

    useEffect(() => {
        const amenities = params.get('amenities');
        if (amenities) {
            const decodedAmenities = decodeURI(amenities);
            const amenitiesInQuery = decodedAmenities.split("|");
            setAmenities(amenitiesInQuery);
        }
    }, []);

    useEffect(() => {
        if (amenities.length > 0) {
            params.set('amenities', encodeURI(amenities.join('|')));
        } else {
            params.delete('amenities');
        }

        replace(`${pathName}?${params.toString()}`);
    }, [amenities])

    return (
        <div>
            <h3 className="font-bold text-lg">Amenities</h3>
            <form action="" className="flex flex-col gap-2 mt-2">
                <label htmlFor="wifi" className="cursor-pointer hover:text-blue-600">
                    <input
                        onChange={handleChange}
                        className="mr-2"
                        type="checkbox"
                        name="wifi"
                        id="wifi"
                        checked={amenities.includes("wifi")}
                    />
                    Wi-Fi
                </label>

                <label htmlFor="swimmingPool" className="cursor-pointer hover:text-blue-600">
                    <input
                        onChange={handleChange}
                        className="mr-2"
                        type="checkbox"
                        name="swimmingPool"
                        id="swimmingPool"
                        checked={amenities.includes("swimmingPool")}
                    />
                    Swimming Pool
                </label>
                <label htmlFor="taxiService" className="cursor-pointer hover:text-blue-600">
                    <input
                        onChange={handleChange}
                        className="mr-2"
                        type="checkbox"
                        name="taxiService"
                        id="taxiService"
                        checked={amenities.includes("taxiService")}
                    />
                    Taxi Service
                </label>
                <label htmlFor="tourGuide" className="cursor-pointer hover:text-blue-600">
                    <input
                        onChange={handleChange}
                        className="mr-2"
                        type="checkbox"
                        name="tourGuide"
                        id="tourGuide"
                        checked={amenities.includes("tourGuide")}
                    />
                    Tour Guide
                </label>
            </form>
        </div>
    );
};

export default AmenitiesFilter;