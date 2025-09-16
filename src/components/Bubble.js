import { motion } from "framer-motion";

export default function Bubble({ label, color, onClick }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`${color} text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg`}
      style={{
        width: `${Math.floor(Math.random() * 80) + 80}px`,
        height: `${Math.floor(Math.random() * 80) + 80}px`,
        margin: "10px",
      }}
      onClick={onClick}
    >
      {label}
    </motion.div>
  );
}
