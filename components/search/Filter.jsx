const Filter = () => {
  return (
    <>
      <div className="col-span-3 space-y-4">
        <div>
          <h3 className="font-bold text-lg">Sort By</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label htmlFor="highToLow">
              <input className="mr-2" type="checkbox" name="highToLow" id="highToLow" />
              Price High to Low
            </label>

            <label htmlFor="lowToHigh">
              <input className="mr-2" type="checkbox" name="lowToHigh" id="lowToHigh" />
              Price Low to high
            </label>
          </form>
        </div>

        <div>
          <h3 className="font-bold text-lg">Price Range</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label htmlFor="range1">
              <input className="mr-2" type="checkbox" name="range1" id="range1" />$ 13 - $ 30
            </label>

            <label htmlFor="range2">
              <input className="mr-2" type="checkbox" name="range2" id="range2" />$ 30 - $ 60
            </label>

            <label htmlFor="range3">
              <input className="mr-2" type="checkbox" name="range3" id="range3" />$ 60 - $ 97
            </label>

            <label htmlFor="range3">
              <input className="mr-2" type="checkbox" name="range3" id="range3" />$ 97 - $ 152
            </label>

            <label htmlFor="range4">
              <input className="mr-2" type="checkbox" name="range4" id="range4" />$ 152 - $ 182
            </label>

            <label htmlFor="range5">
              <input className="mr-2" type="checkbox" name="range5" id="range5" />$ 182+
            </label>
          </form>
        </div>

        <div>
          <h3 className="font-bold text-lg">Star Category</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label htmlFor="fiveStar">
              <input className="mr-2" type="checkbox" name="fiveStar" id="fiveStar" />5 Star
            </label>

            <label htmlFor="fourStar">
              <input className="mr-2" type="checkbox" name="fourStar" id="fourStar" />4 Star
            </label>

            <label htmlFor="threeStar">
              <input className="mr-2" type="checkbox" name="threeStar" id="threeStar" />3 Star
            </label>

            <label htmlFor="twoStar">
              <input className="mr-2" type="checkbox" name="twoStar" id="twoStar" />2 Star
            </label>

            <label htmlFor="oneStar">
              <input className="mr-2" type="checkbox" name="oneStar" id="oneStar" />1 Star
            </label>
          </form>
        </div>

        <div>
          <h3 className="font-bold text-lg">Amenities</h3>
          <form action="" className="flex flex-col gap-2 mt-2">
            <label htmlFor="wifi">
              <input className="mr-2" type="checkbox" name="wifi" id="wifi" />
              Wi-fi
            </label>

            <label htmlFor="swimmingPool">
              <input className="mr-2" type="checkbox" name="swimmingPool" id="swimmingPool" />
              Swimming Pool
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default Filter;
