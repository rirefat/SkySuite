import HotelList from "@/components/hotel/HotelList";
import Filter from "@/components/search/Filter";
import Search from "@/components/search/Search";
import { getAllHotels } from "@/database/queries/queries";

export default async function HotelListPage() {
    const allHotels = await getAllHotels();
    console.log(allHotels);

    return (
        <>
            {/* Search Modify Area  */}
            <section className="bg-[url('/hero-bg.jpg')] bg-cover bg-no-repeat bg-center pt-[100px] pb-[60px]">
                <div className="container items-center py-12 ">
                    <div className="lg:max-h-[250px] ">
                        <Search fromList={true} />
                    </div>
                </div>
            </section>

            {/* Search Result Area  */}
            <section className="py-12">
                <div className="container grid grid-cols-12">
                    {/* Filtering area */}
                    <Filter />

                    {/* Hotel list area */}
                    <HotelList />
                </div>

            </section>
        </>
    );
}