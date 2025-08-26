'use client';
import { useState } from 'react';
import VoiceRecorder from './voice-recorder';
import { saveSession } from './interview-store';
import { v4 as uuidv4 } from 'uuid';

export default function InterviewSession() {
  const [title, setTitle] = useState('');
  const [transcript, setTranscript] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  const handleRecordingComplete = async (blob: Blob) => {
    const url = URL.createObjectURL(blob);
    setAudioUrl(url);

    const formData = new FormData();
    formData.append('file', blob);
    const res = await fetch('/api/transcribe', { method: 'POST', body: formData });
    const data = await res.json();
    const transcriptText = data.text || '';

    setTranscript(transcriptText);

    saveSession({
      id: uuidv4(),
      title: title || 'Untitled',
      audioUrl: url,
      transcript: transcriptText,
      timestamp: Date.now(),
    });

    setTitle('');
  };

  return (
    <div className="p-4 bg-white rounded shadow-md space-y-4">
      <h2 className="text-xl font-bold">Interview Session</h2>

      <input
        type="text"
        placeholder="Question / Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <VoiceRecorder onRecordingComplete={handleRecordingComplete} />

      {audioUrl && (
        <div className="space-y-2">
          <audio src={audioUrl} controls className="w-full" />
          <p><strong>Transcript:</strong> {transcript}</p>
        </div>
      )}
    </div>
  );
}
