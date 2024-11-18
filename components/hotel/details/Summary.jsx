import HotelSummaryInfo from "../HotelSummaryInfo";

const Summary = ({id}) => {
  return (
    <section className="py-4 mt-[100px] ">
      <div className="flex container">
        <HotelSummaryInfo source="details" id={id}/>
      </div>
    </section>
  );
};

export default Summary;

