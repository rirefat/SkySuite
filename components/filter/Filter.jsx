import AmenitiesFilter from "./AmenitiesFilter";
import StarCategoryFilter from "./StarCategoryFilter";
import HotelSort from "./HotelSort";

const Filter = () => {
  return (
    <aside className="col-span-12 md:col-span-3 space-y-6">
      <HotelSort />
      <StarCategoryFilter />
      <AmenitiesFilter />
    </aside>
  );
};

export default Filter;
