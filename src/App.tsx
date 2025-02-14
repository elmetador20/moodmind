import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Music, Brain, ArrowRight, ExternalLink } from 'lucide-react';
import { questions } from './data/questions';
import { getMoodScore, getSongRecommendations } from './utils/moodUtils';
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Login } from './pages/Login';
import { ScorePopup } from './components/ScorePopup';

function QuizContent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [moodScore, setMoodScore] = useState(0);
  const [showScorePopup, setShowScorePopup] = useState(false);

  const handleAnswer = (score: number) => {
    const newAnswers = [...answers, score];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      const finalScore = getMoodScore(newAnswers);
      setMoodScore(finalScore);
      setShowScorePopup(true);
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setMoodScore(0);
    setShowScorePopup(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100 pt-16">
      <div className="container mx-auto px-4 py-8">
        {!showResult ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-purple-600 rounded-full h-2 transition-all duration-300"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              <h2 className="text-xl font-semibold text-gray-800 mb-6">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((score) => (
                  <button
                    key={score}
                    onClick={() => handleAnswer(score)}
                    className="w-full p-4 text-left rounded-lg border border-gray-200 hover:border-purple-500 hover:bg-purple-50 transition-all duration-200 flex items-center justify-between group"
                  >
                    <span className="text-gray-700 group-hover:text-purple-700">
                      {questions[currentQuestion].options[score - 1]}
                    </span>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Recommended Songs for Your Mood</h2>
              <div className="space-y-4 mb-8">
                {getSongRecommendations(moodScore).map((song, index) => (
                  <a
                    key={index}
                    href={`https://open.spotify.com/track/${song.spotifyId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition-all duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Music className="w-6 h-6 text-purple-500 mr-4" />
                        <div>
                          <h3 className="font-semibold text-gray-800 group-hover:text-purple-700">
                            {song.title}
                          </h3>
                          <p className="text-gray-600">{song.artist}</p>
                        </div>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-purple-500" />
                    </div>
                  </a>
                ))}
              </div>
              <button
                onClick={resetQuiz}
                className="w-full py-3 px-6 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200"
              >
                Take Quiz Again
              </button>
            </div>
          </div>
        )}
      </div>

      {showScorePopup && (
        <ScorePopup
          score={moodScore}
          onClose={() => setShowScorePopup(false)}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<QuizContent />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;