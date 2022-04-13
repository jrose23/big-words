import { motion } from 'framer-motion';
import Badge from './Badge';

function Error({ message }) {
    return (
        <motion.div
            className="definition"
            initial={{ y: '50vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                type: 'spring',
                damping: 15
            }}
        >
            <Badge color="dark" text="Error" />
            <p className="definition-text">{message}</p>
        </motion.div>
    );
}

export default Error;
