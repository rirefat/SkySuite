import HotelList from "@/components/hotel/HotelList";
import Filter from "@/components/filter/Filter";
import Search from "@/components/search/Search";
import { Suspense } from "react";

const refinedQuery = (category) => {
    if (!category || category === "undefined") return "";
    return decodeURI(category);
};

export default async function HotelListPage(props) {
    const searchParams = await props.searchParams;
    const { destination, checkIn, checkOut, category, sort, amenities } = searchParams || {};

    return (
        <>
            {/* Search Modify Area */}
            <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
                <div className="container items-center py-12">
                    <div className="lg:max-h-[250px]">
                        <Search
                            fromList={true}
                            destination={destination}
                            checkIn={checkIn}
                            checkOut={checkOut}
                        />
                    </div>
                </div>
            </section>

            {/* Search Result Area */}
            <section className="py-12">
                <div className="container grid grid-cols-12 gap-8">
                    {/* Filtering area */}
                    <Filter />

                    {/* Hotel list area */}
                    <Suspense fallback={<p className="text-center w-full col-span-12 md:col-span-9 py-12">Loading hotels...</p>}>
                        <HotelList
                            destination={destination}
                            checkIn={checkIn}
                            checkOut={checkOut}
                            category={refinedQuery(category)}
                            sort={sort}
                            amenities={refinedQuery(amenities)}
                        />
                    </Suspense>
                </div>
            </section>
        </>
    );
}
