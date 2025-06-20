import { motion } from 'framer-motion';

const Preloader = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="flex h-screen w-screen items-center justify-center bg-primary flex-col"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative overflow-hidden">
        <motion.div
          className="text-5xl font-bold text-white"
          variants={itemVariants}
        >
          <span className="text-secondary">Dream</span>Cars
        </motion.div>
        <motion.div
          className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
          animate={{ x: "200%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
        />
      </div>
      <motion.div
        className="text-white/80 mt-4 tracking-widest text-sm"
        variants={itemVariants}
      >
        LUXURY. PERFORMANCE. ELEGANCE.
      </motion.div>
    </motion.div>
  );
};

export default Preloader; 