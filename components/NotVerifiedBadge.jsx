import { MdErrorOutline } from 'react-icons/md';

const NotVerifiedBadge = () => {
    return (
        <span className="flex items-center mx-2 px-3 py-1 text-xs md:text-sm font-normal text-red-600 bg-red-50 border border-red-200 rounded-full">
            <MdErrorOutline className="mr-1 text-red-600" size={14} />
            Not Verified
        </span>
    );
};

export default NotVerifiedBadge;