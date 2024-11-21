import AmenitiesFilter from "./AmenitiesFilter";
import HotelSort from "./HotelSort";
import PriceFilter from "./PriceFilter";
import RatingsFilter from "./RatingsFilter";

const Filter = () => {
  return (
    <>
      <div className="col-span-3 space-y-4">

        <HotelSort />
        <PriceFilter />
        <RatingsFilter />
        <AmenitiesFilter />
      </div>
    </>
  );
};

export default Filter;
