import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";

const AddButton = () => {
  return (
    <Link to="/create">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-3 p-4 rounded-full shadow-lg"
      >
        <AiFillPlusCircle size={60} />
      </motion.button>
    </Link>
  );
};

export default AddButton;
