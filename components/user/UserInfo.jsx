import React from 'react';

const UserInfo = () => {
    return (
        <div className="container">
            {/* profile info  */}
            <div className="flex flex-col items-center py-8 text-center">
                {/* profile image  */}
                <div
                    className="relative max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px] bg-blue-600 grid place-items-center text-4xl text-white">
                    R
                </div>
                {/* name , email  */}
                <div>
                    <h3 className="text-2xl font-semibold lg:text-[28px]">
                        Rafiul Islam
                    </h3>
                    <p className="leading-[231%] lg:text-lg">rirefat@gmail.com</p>
                </div>


                <div className="w-3/4 border-b border-[#a4a4a4] py-6 lg:py-4"></div>
            </div>
            {/* end profile info  */}
        </div>
    );
};

export default UserInfo;