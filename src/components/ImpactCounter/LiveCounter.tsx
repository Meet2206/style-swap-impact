import { useState, useEffect } from "react";

interface CounterData {
  clothesShared: number;
  wasteSaved: number;
  co2Saved: number;
}

export const LiveCounter = () => {
  const [counts, setCounts] = useState<CounterData>({
    clothesShared: 12847,
    wasteSaved: 3456,
    co2Saved: 2789
  });

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);

      setCounts(prev => ({
        clothesShared: prev.clothesShared + Math.floor(Math.random() * 3 + 1), // 1–3
        wasteSaved: prev.wasteSaved + Math.floor(Math.random() * 2 + 1),       // 1–2
        co2Saved: prev.co2Saved + Math.floor(Math.random() * 2 + 1)            // 1–2
      }));

      setTimeout(() => setIsAnimating(false), 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toLocaleString();

  return (
    <div className="flex items-center space-x-4 bg-gradient-eco text-white rounded-lg px-4 py-2 shadow-eco">
      {/* Clothes */}
      <div className="text-center min-w-[60px]">
        <div className="text-xs opacity-80">Clothes</div>
        <div className={`text-sm font-bold counter-flip transition-all ${
          isAnimating ? 'scale-105 text-amber' : ''
        }`}>
          {formatNumber(counts.clothesShared)}
        </div>
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-white/30" />

      {/* Waste */}
      <div className="text-center min-w-[60px]">
        <div className="text-xs opacity-80">Waste (kg)</div>
        <div className={`text-sm font-bold counter-flip transition-all ${
          isAnimating ? 'scale-105 text-amber' : ''
        }`}>
          {formatNumber(counts.wasteSaved)}
        </div>
      </div>

      {/* Divider */}
      <div className="h-6 w-px bg-white/30" />

      {/* CO2 */}
      <div className="text-center min-w-[60px]">
        <div className="text-xs opacity-80">CO₂ (kg)</div>
        <div className={`text-sm font-bold counter-flip transition-all ${
          isAnimating ? 'scale-105 text-amber' : ''
        }`}>
          {formatNumber(counts.co2Saved)}
        </div>
      </div>
    </div>
  );
};
