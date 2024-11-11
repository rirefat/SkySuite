import Image from "next/image";

export default function HotelDetailsPage() {
    return (
        <>
            <section className="py-4 mt-[100px] ">
                <div className="flex container">
                    <div className="flex-1 container">
                        <h2 className="font-bold text-2xl">Effotel By Sayaji Jaipur</h2>
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
                        <button className="btn-primary ">Book Now</button>
                    </div>
                </div>
            </section>

            <section className="container">
                <div className="grid grid-cols-2 imageshowCase">
                    <Image src="/1.png" className="h-[400px]" alt="Hotel Image"  width={250} height={100}/>

                    <div className="grid grid-cols-2 grid-rows-2 h-[400px]" />
                    <Image src="/2.png" alt="Hotel Image"  width={250} height={100}/>
                    <Image src="/3.png" alt="Hotel Image"  width={250} height={100}/>
                    <Image src="/4.png" alt="Hotel Image"  width={250} height={100}/>
                    <Image src="/5.png" alt="Hotel Image"  width={250} height={100}/>
                </div>
            </section >

            <section>
                <div className="container py-8">
                    <h2 className="font-bold text-xl my-4">Overview</h2>
                    <p className="text-gray-600 leading-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi sit nobis saepe
                        enim
                        iusto quod possimus
                        cupiditate reiciendis necessitatibus, similique consequatur quibusdam nulla cumque quisquam facilis?
                        <br />
                        Recusandae assumenda, quam quaerat voluptas aut vel dignissimos et. Itaque voluptate cum, quidem ipsam autem
                        eaque quo possimus dolorem nisi dolore commodi. Rem, vero labore dolorum obcaecati sequi corporis magni quos
                        hic, delectus velit, inventore tenetur. Voluptatibus, ipsum, aspernatur ducimus sint odit in mollitia nulla
                        sunt possimus deleniti dolore error excepturi, distinctio delectus recusandae. Fugit, explicabo tenetur soluta
                        quidem maxime quod autem eius et? Assumenda velit numquam facilis recusandae. Modi asperiores voluptatum iusto
                        voluptates ab optio! Quisquam porro architecto deleniti quod. Quae reiciendis veniam dignissimos accusantium
                        cumque temporibus? Inventore facere dolorem obcaecati! A obcaecati praesentium explicabo ipsa ratione ducimus
                        ea porro optio, iste et, nemo, accusamus consectetur dolorem eius velit molestiae. Dolor totam pariatur iusto
                        a beatae. Unde ullam iste alias illum temporibus possimus totam placeat? Laboriosam ratione reiciendis, ex
                        atque ipsa eligendi ad nam ducimus cum ea, nihil natus non iure reprehenderit eum soluta voluptate
                        corrupti<br /><br />
                        necessitatibus totam minus dolore repudiandae libero! Labore eius a sint quos soluta quae libero delectus
                        sequi eum rem, accusamus dolor amet earum! Animi tempora reiciendis nostrum hic assumenda, similique doloribus
                        libero nesciunt minima earum aperiam qui quas maiores magnam temporibus fugiat molestias? Labore tenetur ad
                        odio repudiandae commodi doloremque ea fuga quaerat vel nam deserunt similique facere totam dolorum deleniti

                        itaque placeat, consequuntur culpa laudantium animi perspiciatis obcaecati? Laborum impedit harum dolore
                        cumque officia dolores vitae sequi.
                    </p>
                </div>
            </section>
        </>
    );
}