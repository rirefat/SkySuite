import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Reviews from "@/components/hotel/details/Reviews";
import Summary from "@/components/hotel/details/Summary";
import { getSingleHotel } from "@/services/hotel.service";
import { notFound } from "next/navigation";

export default async function HotelDetailsPage(props) {
    const params = await props.params;
    const searchParams = await props.searchParams;
    const id = params?.id;
    const destination = searchParams?.destination;
    const checkIn = searchParams?.checkIn;
    const checkOut = searchParams?.checkOut;

    const hotelInfo = await getSingleHotel(id, checkIn, checkOut);

    if (!hotelInfo) {
        notFound();
    }

    return (
        <>
            <Summary
                id={id}
                destination={destination}
                checkIn={checkIn}
                checkOut={checkOut}
            />
            <Gallery gallery={hotelInfo?.gallery || []} />
            <Overview description={hotelInfo?.overview} />
            <Reviews id={id} />
        </>
    );
}
