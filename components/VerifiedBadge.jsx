import { MdCheckCircle } from 'react-icons/md';

const VerifiedBadge = () => {
  return (
    <span className="flex items-center justify-center text-green-600" title='Verified'>
      <MdCheckCircle size={20} className="hover:scale-110 transition-transform duration-200" />
    </span>
  );
};

export default VerifiedBadge;