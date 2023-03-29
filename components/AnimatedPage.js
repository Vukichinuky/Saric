import { motion } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

const AnimatedPage = ({ children }) => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 200], [0, 1]); // Change the second value (300) to adjust when the animation triggers

    return (
        <motion.div style={{ opacity }}>
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
