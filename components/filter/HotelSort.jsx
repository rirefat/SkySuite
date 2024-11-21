const HotelSort = () => {
    return (
        <div>
            <h3 className="font-bold text-lg">Sort By</h3>
            <form action="" className="flex flex-col gap-2 mt-2">
                <label htmlFor="highToLow" className="cursor-pointer hover:text-blue-600">
                    <input className="mr-2" type="checkbox" name="highToLow" id="highToLow" />
                    Price High to Low
                </label>

                <label htmlFor="lowToHigh" className="cursor-pointer hover:text-blue-600">
                    <input className="mr-2" type="checkbox" name="lowToHigh" id="lowToHigh" />
                    Price Low to high
                </label>
            </form>
        </div>
    );
};

export default HotelSort;