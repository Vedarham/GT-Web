import React from 'react';
import { Edit, Trophy, Gamepad2 } from 'lucide-react';

export default function ProfileCard() {
  return (
    <div className="relative bg-gray-900/60 rounded-xl p-6 backdrop-blur-sm border border-white/10">
      <button className="absolute top-4 right-4 bg-blue-500 p-2 rounded-full hover:bg-blue-600 transition-colors">
        <Edit className="w-4 h-4 text-white" />
      </button>
      
      <div className="flex items-center space-x-6">
        <div className="relative group">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 group-hover:border-blue-400 transition-colors">
            <img
              src="https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?auto=format&fit=crop&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <Edit className="w-6 h-6 text-white" />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">ProGamer123</h2>
          <p className="text-blue-200 mb-2">Conqueror of Arenas | Rank #125</p>
          <div className="flex space-x-4">
            <div className="flex items-center space-x-2 text-white/80">
              <Trophy className="w-4 h-4" />
              <span>156 Wins</span>
            </div>
            <div className="flex items-center space-x-2 text-white/80">
              <Gamepad2 className="w-4 h-4" />
              <span>342 Matches</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}