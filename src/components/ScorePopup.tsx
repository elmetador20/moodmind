import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ScorePopupProps {
  score: number;
  onClose: () => void;
}

export function ScorePopup({ score, onClose }: ScorePopupProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-xl max-w-md w-full mx-4 relative animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Your Mood Score</h2>
          <div className="text-5xl font-bold text-purple-600 mb-4">{score}</div>
          <p className="text-gray-600">
            {score >= 80 ? "You're feeling great! Let's keep the energy up!" :
             score >= 60 ? "You're doing well! Here's some music to match your mood." :
             score >= 40 ? "Feeling balanced? Let's find the perfect tunes." :
             score >= 20 ? "Need a pick-me-up? We've got just the right songs." :
             "Let's lift your spirits with some uplifting music!"}
          </p>
        </div>
      </div>
    </div>
  );
}