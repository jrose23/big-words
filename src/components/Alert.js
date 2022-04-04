import { motion, AnimatePresence } from 'framer-motion';
import { FaExclamationTriangle } from '@react-icons/all-files/fa/FaExclamationTriangle';

function Alert({ text, showAlert }) {
    return (
        <AnimatePresence>
            <motion.div
                className="alert"
                initial={{ y: '-100', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    type: 'spring'
                }}
            >
                <FaExclamationTriangle />
                <p>{text}</p>
            </motion.div>
        </AnimatePresence>
    );
}

export default Alert;
