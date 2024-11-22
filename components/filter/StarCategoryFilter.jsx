'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const StarCategoryFilter = () => {
    const [query, setQuery] = useState([]);
    const pathName = usePathname();
    const searchParams = useSearchParams();
    const { replace } = useRouter();

    const params = new URLSearchParams(searchParams);

    const handleChange = (event) => {
        event.preventDefault();
        const name = event.target.name;
        const checked = event.target.checked;

        if (checked) {
            setQuery(prev => [...prev, name]);
        } else {
            const filteredQuery = query.filter(item => item !== name);
            setQuery(filteredQuery);
        }
    }

    useEffect(() => {
        const category = params.get('category');

        if (category) {
            const decodedCategory = decodeURI(category);
            const categoryInQuery = decodedCategory.split('|');
            setQuery(categoryInQuery);
        }
    }, [])

    useEffect(() => {
        if (query.length > 0) {
            params.set('category', encodeURI(query.join("|")))
        } else {
            params.delete('category');
        }

        replace(`${pathName}?${params.toString()}`);
    }, [query]);

    return (
        <div>
            <h3 className="font-bold text-lg">Star Category</h3>
            <form action="" className="flex flex-col gap-2 mt-2">
                <label htmlFor="fiveStar" className="cursor-pointer hover:text-blue-600">
                    <input
                        onChange={handleChange}
                        checked={query.includes('5')}
                        className="mr-2"
                        type="checkbox"
                        name="5"
                        id="fiveStar"
                    />5 Star
                </label>

                <label htmlFor="fourStar" className="cursor-pointer hover:text-blue-600">
                    <input
                        onChange={handleChange}
                        checked={query.includes('4')}
                        className="mr-2"
                        type="checkbox"
                        name="4"
                        id="fourStar"
                    />4 Star
                </label>

                <label htmlFor="threeStar" className="cursor-pointer hover:text-blue-600">
                    <input
                        onChange={handleChange}
                        checked={query.includes('3')}
                        className="mr-2"
                        type="checkbox"
                        name="3"
                       id="threeStar"
                       />3 Star
                </label>

                <label htmlFor="twoStar" className="cursor-pointer hover:text-blue-600">
                    <input
                        onChange={handleChange}
                        checked={query.includes('2')}
                        className="mr-2"
                        type="checkbox"
                        name="2"
                        id="twoStar" />
                    2 Star
                </label>

                <label htmlFor="oneStar" className="cursor-pointer hover:text-blue-600">
                    <input
                        onChange={handleChange}
                        checked={query.includes('1')}
                        className="mr-2"
                        type="checkbox"
                        name="1"
                        id="oneStar" />
                    1 Star
                </label>
            </form>
        </div>
    );
};

export default StarCategoryFilter;