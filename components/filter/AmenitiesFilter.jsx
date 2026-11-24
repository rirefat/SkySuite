'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const AmenitiesFilter = () => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const [amenities, setAmenities] = useState([]);

    useEffect(() => {
        const amenitiesParam = searchParams.get('amenities');
        if (amenitiesParam) {
            setAmenities(decodeURI(amenitiesParam).split("|"));
        } else {
            setAmenities([]);
        }
    }, [searchParams]);

    const handleChange = (event) => {
        const name = event.target.name;
        const checked = event.target.checked;
        const updated = checked
            ? [...amenities, name]
            : amenities.filter(item => item !== name);

        setAmenities(updated);

        const params = new URLSearchParams(searchParams.toString());
        if (updated.length > 0) {
            params.set('amenities', encodeURI(updated.join('|')));
        } else {
            params.delete('amenities');
        }

        replace(`${pathName}?${params.toString()}`);
    };

    return (
        <div>
            <h3 className="font-bold text-lg">Amenities</h3>
            <form className="flex flex-col gap-2 mt-2">
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
