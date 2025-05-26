import React from 'react';
import { Camera, Share2, UserPlus } from 'lucide-react';

export default function HeroBanner() {
  return (
    <div className="relative h-64 rounded-xl overflow-hidden mb-8">
      <img
        src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&q=80"
        alt="Profile Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      
      <button className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-lg transition-colors">
        <Camera className="w-5 h-5 text-white" />
      </button>
      
      <div className="absolute bottom-4 left-4 flex items-end space-x-4">
        <div className="relative group">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 group-hover:border-blue-400 transition-colors">
            <img
              src="https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?auto=format&fit=crop&q=80"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 right-0 bg-blue-500 p-1.5 rounded-full">
            <Camera className="w-4 h-4 text-white" />
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <h1 className="text-3xl font-bold text-white">ProGamer123</h1>
            <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-sm">
              Verified
            </span>
          </div>
          <p className="text-white/80 mt-1">Master of Strategy</p>
          <p className="text-white/60 text-sm">ID: #123456</p>
        </div>
        
        <div className="flex space-x-2">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center space-x-2">
            <UserPlus className="w-4 h-4" />
            <span>Add Friend</span>
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}