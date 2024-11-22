'use client'
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
                        checked={query.includes('fiveStar')}
                        className="mr-2"
                        type="checkbox"
                        name="fiveStar"
                        id="fiveStar"
                    />5 Star
                </label>

                <label htmlFor="fourStar" className="cursor-pointer hover:text-blue-600">
                    <input
                        onChange={handleChange}
                        checked={query.includes('fourStar')}
                        className="mr-2"
                        type="checkbox"
                        name="fourStar"
                        id="fourStar"
                    />4 Star
                </label>

                <label htmlFor="threeStar" className="cursor-pointer hover:text-blue-600">
                    <input
                        onChange={handleChange}
                        checked={query.includes('threeStar')}
                        className="mr-2"
                        type="checkbox"
                        name="threeStar
                      " id="threeStar
                      " />3 Star
                </label>

                <label htmlFor="twoStar" className="cursor-pointer hover:text-blue-600">
                    <input
                        onChange={handleChange}
                        checked={query.includes('twoStar')}
                        className="mr-2"
                        type="checkbox"
                        name="twoStar"
                        id="twoStar" />
                    2 Star
                </label>

                <label htmlFor="oneStar" className="cursor-pointer hover:text-blue-600">
                    <input
                        onChange={handleChange}
                        checked={query.includes('oneStar')}
                        className="mr-2"
                        type="checkbox"
                        name="oneStar"
                        id="oneStar" />
                    1 Star
                </label>
            </form>
        </div>
    );
};

export default StarCategoryFilter;