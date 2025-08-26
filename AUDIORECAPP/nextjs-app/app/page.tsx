import VoiceRecorder from '@/components/voice-recorder'
import InterviewSession from '@/components/interview-session'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center text-white mb-12">
          <h1 className="text-6xl font-bold mb-4">💼 InterviewMedic</h1>
          <p className="text-xl opacity-90">Interviews made simple!</p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Interview practice</h2>
            <p className="text-2x1 opacity-90">Start recording!</p>
            <VoiceRecorder />
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Features</h2>
            <div className="space-y-4 text-white">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Real-time audio recording</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Audio playback controls</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Voice transcription ready</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <span>Audio visualization</span>
              </div>
            </div>
          </div>
        </div>

        {/* Interview Session Section */}
        <div className="mt-12 bg-blue-200/50 backdrop-blur-sm rounded-lg p-6">
          <h2 className="text-2xl font-bold text-black-900 mb-4">Interview Session </h2>
          <InterviewSession />
        </div>
      </div>
    </main>
  )
}
