import { motion, useReducedMotion } from 'framer-motion';

/**
 * Wraps children in a Framer Motion scroll-triggered reveal.
 * Automatically disables animation when prefers-reduced-motion is set.
 *
 * @param {object} props
 * @param {'up'|'left'|'right'|'none'} [props.direction='up']
 * @param {number} [props.delay=0]
 * @param {string} [props.className]
 */
export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}) {
  const shouldReduce = useReducedMotion();

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  const directionOffset = {
    up: { y: 32, x: 0 },
    left: { y: 0, x: -32 },
    right: { y: 0, x: 32 },
    none: { y: 0, x: 0 },
  };

  const offset = directionOffset[direction] || directionOffset.up;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}
