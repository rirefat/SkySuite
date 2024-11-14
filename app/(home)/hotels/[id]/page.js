import Gallery from "@/components/hotel/details/Gallery";
import Overview from "@/components/hotel/details/Overview";
import Summary from "@/components/hotel/details/Summary";
import Image from "next/image";

export default function HotelDetailsPage() {
    return (
        <>
            {/* Summery section */}
            <Summary />

            {/* Hotel Image Gallery */}
            <Gallery />

            {/* Hotel overview section */}
            <Overview />
        </>
    );
}