import { useState, type FormEvent } from 'react';
import { initialMessages, type Announcement } from '../data/messages';

export default function Messages() {
  const [messages, setMessages] = useState<Announcement[]>(initialMessages);
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    if (!content.trim()) {
      setError('Message cannot be empty.');
      return;
    }

    const newMessage: Announcement = {
      id: crypto.randomUUID(),
      author: 'Coach (You)',
      content: content.trim(),
      date: new Date().toISOString().split('T')[0],
    };

    setMessages([newMessage, ...messages]);
    setContent('');
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-800 mb-6">Announcements</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded-lg shadow-sm mb-6"
      >
        {error && (
          <p className="text-red-600 bg-red-50 px-3 py-2 rounded-md text-sm mb-3">
            {error}
          </p>
        )}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Post an update for parents..."
          rows={3}
          className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 mb-3"
        />
        <button
          type="submit"
          className="bg-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition-colors"
        >
          Post Announcement
        </button>
      </form>

      <div className="grid gap-4">
        {messages.map((msg) => (
          <div key={msg.id} className="bg-white rounded-lg shadow-sm p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-semibold text-slate-800">{msg.author}</span>
              <span className="text-sm text-slate-400">{msg.date}</span>
            </div>
            <p className="text-slate-600">{msg.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}