const RatingsFilter = () => {
    return (
        <div>
            <h3 className="font-bold text-lg">Star Category</h3>
            <form action="" className="flex flex-col gap-2 mt-2">
                <label htmlFor="fiveStar" className="cursor-pointer hover:text-blue-600">
                    <input className="mr-2" type="checkbox" name="fiveStar" id="fiveStar" />5 Star <span className="text-yellow-600 text-lg">★★★★★</span>
                </label>

                <label htmlFor="fourStar" className="cursor-pointer hover:text-blue-600">
                    <input className="mr-2" type="checkbox" name="fourStar" id="fourStar" />4 Star <span className="text-yellow-600 text-lg">★★★★✰</span>
                </label>

                <label htmlFor="threeStar" className="cursor-pointer hover:text-blue-600">
                    <input className="mr-2" type="checkbox" name="threeStar" id="threeStar" />3 Star <span className="text-yellow-600 text-lg">★★★✰✰</span>
                </label>

                <label htmlFor="twoStar" className="cursor-pointer hover:text-blue-600">
                    <input className="mr-2" type="checkbox" name="twoStar" id="twoStar" />2 Star <span className="text-yellow-600 text-lg">★★✰✰✰</span>
                </label>

                <label htmlFor="oneStar" className="cursor-pointer hover:text-blue-600">
                    <input className="mr-2" type="checkbox" name="oneStar" id="oneStar" />1 Star <span className="text-yellow-600 text-lg">★✰✰✰✰</span>
                </label>
            </form>
        </div>
    );
};

export default RatingsFilter;