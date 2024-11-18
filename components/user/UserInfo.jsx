import { auth } from "@/auth";
import Image from "next/image";

const UserInfo = async () => {
    const session = await auth();
    console.log(session)
    return (
        <div className="container">
            {/* profile info  */}
            <div className="flex flex-col items-center py-8 text-center">
                {/* profile image  */}
                <div
                    className="relative max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px] bg-slate-200 grid place-items-center text-4xl text-white shadow-lg">
                    <Image
                        src={session?.user?.image ?? '/user.png'}
                        alt={`Image of ${session?.user?.name}`}
                        width={95}
                        height={95}
                        className="rounded-full"
                    />
                </div>
                {/* name , email  */}
                <div>
                    <h3 className="text-2xl font-semibold lg:text-[28px] flex justify-center items-center gap-2">
                        {session?.user?.name ?? "User Name"}
                        <span className="rounded-full border border-gray-300 text-xs md:text-sm font-thin text-slate-500 px-3 rounded">
                            Not Verified
                        </span>
                    </h3>
                    <p className="leading-[231%] lg:text-lg text-gray-600">{session?.user?.email ?? "User Email"}</p>
                </div>


                <div className="w-3/4 border-b border-[#a4a4a4] py-6 lg:py-4"></div>
            </div>
            {/* end profile info  */}
        </div>
    );
};

export default UserInfo;