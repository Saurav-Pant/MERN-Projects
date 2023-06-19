import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const AddButton = () => {
  return (
    <div>
    <Link to="/create">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-10 right-3 p-4 bg-gray-400 rounded-full shadow-lg"
      >
        <AiOutlinePlus size={20} color="blue" />
      </motion.button>
    </Link>
    </div>
  );
};

export default AddButton;
