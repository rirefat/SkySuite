import HotelList from "@/components/hotel/HotelList";
import Filter from "@/components/filter/Filter";
import Search from "@/components/search/Search";
import { Suspense } from "react";

const refinedCategory = (category) => {
    const decodedCategory = decodeURI(category);

    if (decodedCategory === "undefined") {
        return "";
    } else {
        return decodedCategory;
    }
}

export default async function HotelListPage({ searchParams: { destination, checkIn, checkOut, category, sort } }) {

    return (
        <>
            {/* Search Modify Area  */}
            <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
                <div className="container items-center py-12 ">
                    <div className="lg:max-h-[250px] ">
                        <Search
                            fromList={true}
                            destination={destination}
                            checkIn={checkIn}
                            checkOut={checkOut}
                        />
                    </div>
                </div>
            </section>

            {/* Search Result Area  */}
            <section className="py-12">
                <div className="container grid grid-cols-12">
                    {/* Filtering area */}
                    <Filter />

                    {/* Hotel list area */}
                    <Suspense fallback={<p className="text-center w-full">Loading...</p>}>
                        <HotelList
                            destination={destination}
                            checkIn={checkIn}
                            checkOut={checkOut}
                            category={refinedCategory(category)}
                            sort={sort}
                        />
                    </Suspense>
                </div>

            </section>
        </>
    );
}