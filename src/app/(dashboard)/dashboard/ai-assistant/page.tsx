"use client";

import { useState } from "react";
import { Sparkles, Send, Copy } from "lucide-react";

export default function AIAssistantPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = () => {
    if (!prompt) return;
    setIsLoading(true);
    // ডামি এআই রেসপন্স (পরে এখানে API কল হবে)
    setTimeout(() => {
      setResult(`Based on your input "${prompt}", here is a suggested professional summary:\n\n"Results-driven professional with a proven track record of delivering high-quality solutions. Adept at collaborating with cross-functional teams to drive project success and exceed expectations."`);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
          <Sparkles size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Writing Assistant</h1>
          <p className="text-gray-500">Let AI help you write your professional summary and experience.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[600px]">
        {/* Input Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-gray-50 font-medium text-gray-700">
            Your Prompt
          </div>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g., Write a professional summary for a Frontend Developer with 5 years of React experience..."
            className="flex-1 p-4 resize-none outline-none"
          />
          <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-end">
            <button 
              onClick={handleGenerate}
              disabled={isLoading || !prompt}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 disabled:opacity-50 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              {isLoading ? "Generating..." : <><Send size={18} /> Generate</>}
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col overflow-hidden">
          <div className="p-4 border-b border-gray-100 bg-gray-50 font-medium text-gray-700 flex justify-between items-center">
            AI Output
            {result && (
              <button 
                onClick={() => navigator.clipboard.writeText(result)}
                className="text-sm text-gray-500 hover:text-gray-900 flex items-center gap-1"
              >
                <Copy size={14} /> Copy
              </button>
            )}
          </div>
          <div className="flex-1 p-4 overflow-y-auto text-gray-700 whitespace-pre-wrap">
            {isLoading ? (
              <div className="flex items-center justify-center h-full text-purple-500 animate-pulse">
                AI is thinking...
              </div>
            ) : result ? (
              result
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <Sparkles size={48} className="mb-4 opacity-20" />
                <p>Generated text will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}