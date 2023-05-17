import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AddButton = () => {
  return (
    <Link to="/create">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-4 right-4 p-4 rounded-full bg-blue-500 text-white shadow-lg"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
        />
      </svg>
    </motion.button>
    </Link>
  );
};

export default AddButton;
