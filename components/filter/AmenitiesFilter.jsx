const AmenitiesFilter = () => {
    return (
        <div>
            <h3 className="font-bold text-lg">Amenities</h3>
            <form action="" className="flex flex-col gap-2 mt-2">
                <label htmlFor="wifi" className="cursor-pointer hover:text-blue-600">
                    <input className="mr-2" type="checkbox" name="wifi" id="wifi" />
                    Wi-fi
                </label>

                <label htmlFor="swimmingPool" className="cursor-pointer hover:text-blue-600">
                    <input className="mr-2" type="checkbox" name="swimmingPool" id="swimmingPool" />
                    Swimming Pool
                </label>
            </form>
        </div>
    );
};

export default AmenitiesFilter;