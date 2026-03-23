import { Calendar, BookOpen, Mail, CheckCircle2 } from "lucide-react";

export function BrandingSide() {
  return (
    <div className="relative bg-gradient overflow-hidden mx-auto h-full w-full">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-40 w-32 h-32 border-2 border-purple-300/30 rounded-3xl rotate-12" />
      <div className="absolute top-60 right-20 w-20 h-20 bg-blue-400/20 rounded-2xl rotate-45" />
      <div className="absolute bottom-40 left-16 w-24 h-24 border-2 border-blue-300/20 rounded-full" />
      <div className="absolute top-1/3 right-60 w-16 h-16 bg-white/10 rounded-full" />
      <div className="absolute bottom-20 right-10 w-40 h-40 border border-white/10 rounded-3xl -rotate-12" />

      {/* Floating Task Cards — desktop only */}
      <div className="lg:block hidden">
        <div className="absolute top-24 left-12">
          <div className="bg-white/90 backdrop-blur rounded-xl px-4 py-3 shadow-lg flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Morning workout</span>
          </div>
        </div>

        <div className="absolute left-8 top-1/2 -translate-y-1/2">
          <div className="bg-white/90 backdrop-blur rounded-xl px-4 py-3 shadow-lg flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-medium text-gray-700">Read a book</span>
          </div>
        </div>

        <div className="absolute bottom-28 right-32">
          <div className="bg-white/90 backdrop-blur rounded-xl px-4 py-3 shadow-lg flex items-center gap-2">
            <Mail className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Finish project</span>
          </div>
        </div>

        <div className="absolute top-1/3 right-12">
          <div className="bg-white/90 backdrop-blur rounded-xl px-4 py-3 shadow-lg flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Team meeting</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center h-full px-12">
        {/* App Icon */}
        <div className="relative mb-8">
          <div className="bg-white rounded-3xl p-6 shadow-2xl">
            <CheckCircle2 className="w-16 h-16 text-blue-600" />
          </div>

        </div>

        {/* Title */}
        <h1 className="text-6xl font-bold text-white mb-4">DayOne</h1>

        {/* Subtitle */}
        <p className="text-white/90 text-lg font-medium mb-8 flex items-center gap-2">
          Don&apos;t say &apos;one day&apos;, it&apos;s <span>↑</span>
        </p>

        {/* Description */}
        <p className="text-white/80 text-center max-w-md px-4 mb-12">
          Transform your tasks into achievements, one day at a time
        </p>

        {/* Feature List */}
        <div className="space-y-4 max-w-md">
          <div className="flex items-start gap-3 text-white/90">
            <div className="bg-white/20 rounded-lg p-2 mt-0.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold mb-1 text-white">Smart Task Management</div>
              <div className="text-sm text-white/70">Organize your day with intelligent task prioritization</div>
            </div>
          </div>
          <div className="flex items-start gap-3 text-white/90">
            <div className="bg-white/20 rounded-lg p-2 mt-0.5">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold mb-1 text-white">Calendar Integration</div>
              <div className="text-sm text-white/70">Sync seamlessly with your favorite calendar apps</div>
            </div>
          </div>
          <div className="flex items-start gap-3 text-white/90">
            <div className="bg-white/20 rounded-lg p-2 mt-0.5">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="font-semibold mb-1 text-white">Progress Tracking</div>
              <div className="text-sm text-white/70">Visualize your productivity with detailed analytics</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
