import { BookOpen, Calendar, CheckCircle2 } from "lucide-react";

export default function MobileIcon() {
  return (
    <div className="relative bg-gradient overflow-hidden w-full h-48 flex items-center justify-center">
      {/* Decorative Elements */}
      <div className="absolute top-4 right-10 w-16 h-16 border-2 border-purple-300/30 rounded-2xl rotate-12" />
      <div className="absolute top-6 right-4 w-10 h-10 bg-blue-400/20 rounded-xl rotate-45" />
      <div className="absolute bottom-4 left-8 w-12 h-12 border-2 border-blue-300/20 rounded-full" />
      <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-white/10 rounded-full" />

      {/* Content */}
      <div className="flex items-center gap-4 z-10">
        <div className="relative">
          <div className="absolute top-16 left-32 opacity-40 text-nowrap">
            <div className="bg-white/90 backdrop-blur rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">workout</span>
            </div>
          </div>

          <div className="absolute right-0 bottom-20  opacity-40 text-nowrap">
            <div className="bg-white/90 backdrop-blur rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-orange-500" />
              <span className="text-sm font-medium text-gray-700">Reading</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-3 shadow-2xl">
            <CheckCircle2 className="w-10 h-10 text-blue-600" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-white">DayOne</h1>
      </div>
    </div>
  );
}
