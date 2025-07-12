import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OdometerCounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
  className?: string;
}

const OdometerCounter: React.FC<OdometerCounterProps> = ({
  value,
  decimals = 0,
  suffix = '',
  className = '',
}) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setDisplayValue(value);
    }, 100); // Delay to allow animation

    return () => clearTimeout(animationTimeout);
  }, [value]);

 const formatValue = (val: number | undefined | null) => {
  const safeVal = typeof val === 'number' && !isNaN(val) ? val : 0;
  const fixed = safeVal.toFixed(decimals);
  const [integer, decimal] = fixed.split('.');
  return { integer, decimal };
};
  const { integer, decimal } = formatValue(displayValue);

  return (
    <div className={`font-mono text-lg font-bold ${className}`}>
      <div className="inline-flex items-center">
        {/* Integer part */}
        {integer.split('').map((digit, index) => (
          <div key={index} className="relative h-6 w-4 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={`${digit}-${index}`}
                initial={{ y: 24 }}
                animate={{ y: 0 }}
                exit={{ y: -24 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {digit}
              </motion.div>
            </AnimatePresence>
          </div>
        ))}

        {/* Decimal part */}
        {decimal && (
          <>
            <span className="mx-1">.</span>
            {decimal.split('').map((digit, index) => (
              <div key={`decimal-${index}`} className="relative h-6 w-4 overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`${digit}-decimal-${index}`}
                    initial={{ y: 24 }}
                    animate={{ y: 0 }}
                    exit={{ y: -24 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {digit}
                  </motion.div>
                </AnimatePresence>
              </div>
            ))}
          </>
        )}

        {/* Optional suffix */}
        {suffix && <span className="ml-1">{suffix}</span>}
      </div>
    </div>
  );
};

export default OdometerCounter;
