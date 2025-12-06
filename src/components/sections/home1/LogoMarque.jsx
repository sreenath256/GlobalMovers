import { motion } from "framer-motion";

const LogoMarque = () => {
  const img =
    "https://globaliconmovers.com/wp-content/uploads/2023/11/global-icon-movers-client-2-1-jpeg.webp";

  return (
    <div className="w-full bg-secondary overflow-hidden ">
      <motion.div
        className="flex whitespace-nowrap items-center"
        drag="x"
        dragConstraints={{ left: -800, right: 0 }} // user can swipe
        animate={{ x: ["0%", "-100%"] }} // auto-scroll loop
        transition={{
          duration: 18,
          ease: "linear",
          repeat: Infinity,
        }}
        whileHover={{
          animationPlayState: "paused", // stop on hover
        }}
      >
        {/* Duplicate logos for perfect looping */}
        {[...Array(20)].map((_, i) => (
          <img
            key={i}
            src={img}
            alt="client"
            className="w-32 h-auto mx-6 object-contain pointer-events-none"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoMarque;
