import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Reviews from "@/components/hotel/details/Reviews";
import Summary from "@/components/hotel/details/Summary";
import { getSingleHotel } from "@/database/queries";

export default async function HotelDetailsPage({ params: { id } , searchParams: {checkIn, checkOut} }) {
    const hotelInfo = await getSingleHotel(id);

    return (
        <>
            <Summary id={id} />
            <Gallery gallery={hotelInfo?.gallery} />
            <Overview description={hotelInfo?.shortDescription} />
            <Reviews id={id} />
        </>
    );
}