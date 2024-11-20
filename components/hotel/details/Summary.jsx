import HotelSummaryInfo from "../HotelSummaryInfo";

const Summary = ({ id, destination, checkIn, checkOut }) => {
  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummaryInfo
          source="details"
          id={id}
          destination={destination}
          checkIn={checkIn}
          checkOut={checkOut}
        />
      </div>
    </section>
  );
};

export default Summary;

