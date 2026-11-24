'use client';
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const StarCategoryFilter = () => {
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const { replace } = useRouter();

    const [query, setQuery] = useState([]);

    useEffect(() => {
        const category = searchParams.get('category');
        if (category) {
            setQuery(decodeURI(category).split('|'));
        } else {
            setQuery([]);
        }
    }, [searchParams]);

    const handleChange = (event) => {
        const name = event.target.name;
        const checked = event.target.checked;
        const updated = checked
            ? [...query, name]
            : query.filter(item => item !== name);

        setQuery(updated);

        const params = new URLSearchParams(searchParams.toString());
        if (updated.length > 0) {
            params.set('category', encodeURI(updated.join("|")));
        } else {
            params.delete('category');
        }

        replace(`${pathName}?${params.toString()}`);
    };

    return (
        <div>
            <h3 className="font-bold text-lg">Star Category</h3>
            <form className="flex flex-col gap-2 mt-2">
                {[5, 4, 3, 2, 1].map((stars) => (
                    <label key={stars} htmlFor={`star-${stars}`} className="cursor-pointer hover:text-blue-600">
                        <input
                            onChange={handleChange}
                            checked={query.includes(String(stars))}
                            className="mr-2"
                            type="checkbox"
                            name={String(stars)}
                            id={`star-${stars}`}
                        />
                        {stars} Star
                    </label>
                ))}
            </form>
        </div>
    );
};

export default StarCategoryFilter;
