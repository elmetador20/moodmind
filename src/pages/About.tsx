import React from 'react';
import { Music2, Heart, Sparkles } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Mood & Music</h1>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Music2 className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h2>
                <p className="text-gray-600">
                  We believe in the powerful connection between music and emotions. Our mission is to help you discover the perfect soundtrack for every mood, making your day brighter through the magic of music.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">How It Works</h2>
                <p className="text-gray-600">
                  Through a series of carefully crafted questions, we analyze your current emotional state and energy levels. Our intelligent algorithm then matches you with songs that either complement or enhance your mood.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">The Science</h2>
                <p className="text-gray-600">
                  Our recommendations are based on extensive research in music psychology and the relationship between musical elements and emotional responses. We continuously update our song database to ensure the best possible matches.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}