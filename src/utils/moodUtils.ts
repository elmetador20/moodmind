interface Song {
  title: string;
  artist: string;
  mood: 'low' | 'medium-low' | 'medium' | 'medium-high' | 'high';
  spotifyId: string;
}

const songDatabase: Song[] = [
  // Low mood songs (uplifting)
  { title: "Don't Stop Believin'", artist: "Journey", mood: 'low', spotifyId: "4bHsxqR3GMrXTxEPLuK5ue" },
  { title: "Happy", artist: "Pharrell Williams", mood: 'low', spotifyId: "60nZcImufyMA1MKQY3dcCH" },
  { title: "Walking on Sunshine", artist: "Katrina & The Waves", mood: 'low', spotifyId: "05wIrZSwuaVWhcv5FfqeH0" },
  { title: "I Gotta Feeling", artist: "The Black Eyed Peas", mood: 'low', spotifyId: "2H1047e0oMSj10dgp7p2VG" },
  { title: "Good Life", artist: "OneRepublic", mood: 'low', spotifyId: "4E5P1XyAFtrjpiIxkydly4" },
  { title: "Shake It Off", artist: "Taylor Swift", mood: 'low', spotifyId: "0cqRj7pUJDkTCEsJkx8snD" },
  
  // Medium-low mood songs
  { title: "Three Little Birds", artist: "Bob Marley", mood: 'medium-low', spotifyId: "6A9mKXlFRPMPem6ygQSt7z" },
  { title: "Here Comes the Sun", artist: "The Beatles", mood: 'medium-low', spotifyId: "6dGnYIeXmHdcikdzNNDMm2" },
  { title: "Shake It Off", artist: "Taylor Swift", mood: 'medium-low', spotifyId: "0cqRj7pUJDkTCEsJkx8snD" },
  { title: "Sunday Best", artist: "Surfaces", mood: 'medium-low', spotifyId: "1Cv1YLb4q0RzL6pybtaMLo" },
  { title: "Better When I'm Dancin'", artist: "Meghan Trainor", mood: 'medium-low', spotifyId: "1NZWiXPb3pfVVthz4qfmGM" },
  { title: "Best Day of My Life", artist: "American Authors", mood: 'medium-low', spotifyId: "2wvMC5EyKwXrZtpYbXY0P0" },
  
  // Medium mood songs
  { title: "Good Vibrations", artist: "The Beach Boys", mood: 'medium', spotifyId: "4nDYCrLbM3jq0uRKnrVp6m" },
  { title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", mood: 'medium', spotifyId: "32OlwWuMpZ6b0aN2RZOeMS" },
  { title: "I Wanna Dance with Somebody", artist: "Whitney Houston", mood: 'medium', spotifyId: "2tUBqZG2AbRi7Q0BIrVrEj" },
  { title: "Levitating", artist: "Dua Lipa", mood: 'medium', spotifyId: "39LLxExYz6ewLAcYrzQQyP" },
  { title: "Blinding Lights", artist: "The Weeknd", mood: 'medium', spotifyId: "0VjIjW4GlUZAMYd2vXMi3b" },
  { title: "24K Magic", artist: "Bruno Mars", mood: 'medium', spotifyId: "6b8Be6ljOzmkOmFslEb23P" },
  
  // Medium-high mood songs
  { title: "Can't Stop the Feeling!", artist: "Justin Timberlake", mood: 'medium-high', spotifyId: "1WkMMavIMc4JZ8cfMmxHkI" },
  { title: "Good as Hell", artist: "Lizzo", mood: 'medium-high', spotifyId: "3Yh9lZcWyKrK9GjbhuS0hR" },
  { title: "September", artist: "Earth, Wind & Fire", mood: 'medium-high', spotifyId: "2grjqo0Frpf2okIBiifQKs" },
  { title: "Dynamite", artist: "BTS", mood: 'medium-high', spotifyId: "4saklk6nie3yiGePpBwUoc" },
  { title: "High Hopes", artist: "Panic! At The Disco", mood: 'medium-high', spotifyId: "1rqqCSm0Qe4I9rUvWncaom" },
  { title: "The Greatest Show", artist: "Hugh Jackman", mood: 'medium-high', spotifyId: "0KMGxYKeUzK9wc5DZCt3HT" },
  
  // High mood songs (calming)
  { title: "Weightless", artist: "Marconi Union", mood: 'high', spotifyId: "0KZk4p2qxhRlWUHkEEP9Cm" },
  { title: "Claire de Lune", artist: "Claude Debussy", mood: 'high', spotifyId: "7kCALn2M9YnVgaMlQhJYVF" },
  { title: "Somewhere Over the Rainbow", artist: "Israel Kamakawiwo'ole", mood: 'high', spotifyId: "4jO7qMWjnQXPQvxEYtOd8N" },
  { title: "River Flows in You", artist: "Yiruma", mood: 'high', spotifyId: "4BBrglqqrKZZjH3JMHwZSF" },
  { title: "Experience", artist: "Ludovico Einaudi", mood: 'high', spotifyId: "1BncfTJAWxrsxyT9culBrj" },
  { title: "The Sea", artist: "Ólafur Arnalds", mood: 'high', spotifyId: "3Pxrz1RSGDWxL2dZ5KgLOF" }
];

export const getMoodScore = (answers: number[]): number => {
  const sum = answers.reduce((acc, curr) => acc + curr, 0);
  return Math.round((sum / (answers.length * 5)) * 100);
};

export const getSongRecommendations = (score: number): Song[] => {
  let mood: 'low' | 'medium-low' | 'medium' | 'medium-high' | 'high';
  
  if (score < 20) mood = 'low';
  else if (score < 40) mood = 'medium-low';
  else if (score < 60) mood = 'medium';
  else if (score < 80) mood = 'medium-high';
  else mood = 'high';
  
  return songDatabase
    .filter(song => song.mood === mood)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
};