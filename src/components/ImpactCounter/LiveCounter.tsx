import { useState, useEffect } from "react";
import { Shirt, Recycle, Globe } from "lucide-react";

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

  // Simulate live counter updates
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setCounts(prev => ({
        clothesShared: prev.clothesShared + Math.floor(Math.random() * 3),
        wasteSaved: prev.wasteSaved + Math.floor(Math.random() * 2),
        co2Saved: prev.co2Saved + Math.floor(Math.random() * 2)
      }));

      setTimeout(() => setIsAnimating(false), 600);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => {
    return num.toLocaleString();
  };

  return (
    <div className="bg-gradient-eco text-white rounded-xl p-6 shadow-eco">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold font-poppins">Global Impact</h3>
        <p className="text-sm opacity-90">Real-time sustainability tracker</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Clothes Shared */}
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <Shirt className="w-6 h-6" />
          </div>
          <div className={`counter-flip text-xl md:text-2xl font-bold transition-all duration-600 ${
            isAnimating ? 'scale-110 text-amber' : ''
          }`}>
            {formatNumber(counts.clothesShared)}
          </div>
          <div className="text-xs opacity-80">Clothes Shared</div>
        </div>

        {/* Waste Saved */}
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <Recycle className="w-6 h-6" />
          </div>
          <div className={`counter-flip text-xl md:text-2xl font-bold transition-all duration-600 ${
            isAnimating ? 'scale-110 text-amber' : ''
          }`}>
            {formatNumber(counts.wasteSaved)} kg
          </div>
          <div className="text-xs opacity-80">Waste Saved</div>
        </div>

        {/* CO2 Saved */}
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <Globe className="w-6 h-6" />
          </div>
          <div className={`counter-flip text-xl md:text-2xl font-bold transition-all duration-600 ${
            isAnimating ? 'scale-110 text-amber' : ''
          }`}>
            {formatNumber(counts.co2Saved)} kg
          </div>
          <div className="text-xs opacity-80">CO₂ Saved</div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
          <div className="w-2 h-2 bg-amber rounded-full animate-pulse"></div>
          <span className="text-xs font-medium">Live Updates</span>
        </div>
      </div>
    </div>
  );
};