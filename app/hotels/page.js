import Filter from "@/components/search/Filter";
import Search from "@/components/search/Search";
import Image from "next/image";

export default function HotelListPage() {
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


                    <div className="col-span-9">
                        {/* <!-- Card Container --> */}
                        <div className="space-y-4">
                            <div className="flex gap-6 border border-gray/20 p-4 rounded-md">
                                <Image src="/image-1.png" className="max-h-[162px] max-w-[240px]" alt="" width={150} height={50}/>
                                    <div className="flex-1">
                                        <h2 className="font-bold text-lg">Effotel By Sayaji Jaipur</h2>
                                        <p>📍 Kolkata</p>
                                        <div className="flex gap-2 items-center my-4">
                                            <div className="bg-primary w-[35px] h-[35px] rounded-sm text-white grid place-items-center font-bold">
                                                5.3
                                            </div>
                                            <span className="font-medium">Very Good</span>
                                            <span>232 Reviews</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2 items-end justify-center">
                                        <h2 className="text-2xl font-bold text-right">$124/night</h2>
                                        <p className=" text-right">Per Night for 4 Rooms</p>
                                        <button className="btn-primary ">Details</button>
                                    </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>
        </>
    );
}