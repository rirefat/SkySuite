import AmenitiesFilter from "./AmenitiesFilter";
import StarCategoryFilter from "./StarCategoryFilter";
import HotelSort from "./HotelSort";
import PriceFilter from "./PriceFilter";

const Filter = () => {
  return (
    <>
      <div className="col-span-3 space-y-4">

        <HotelSort />
        <PriceFilter />
        <StarCategoryFilter />
        <AmenitiesFilter />
      </div>
    </>
  );
};

export default Filter;
