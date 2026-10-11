'use client';

import React, { useState, useEffect } from 'react';
import {
  Lock,
  Sparkles,
  Copy,
  CheckCircle2,
  ExternalLink,
  Star,
  LogOut,
  AlertCircle,
  RefreshCw,
  MessageSquareQuote,
} from 'lucide-react';

async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fallback
    }
  }

  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    textArea.setAttribute('readonly', '');
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    return successful;
  } catch {
    return false;
  }
}

export default function AdminReplyClient() {
  const [password, setPassword] = useState<string>('');
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string>('');
  const [isVerifying, setIsVerifying] = useState<boolean>(false);

  // Form State
  const [reviewText, setReviewText] = useState<string>('');
  const [rating, setRating] = useState<number>(5);
  const [customerName, setCustomerName] = useState<string>('');
  const [generatedReply, setGeneratedReply] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generateError, setGenerateError] = useState<string>('');
  const [isCopied, setIsCopied] = useState<boolean>(false);

  // Restore stored session password if available
  useEffect(() => {
    const saved = sessionStorage.getItem('vcj_admin_reply_token');
    if (saved) {
      setPassword(saved);
      setIsUnlocked(true);
    }
  }, []);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setAuthError('Please enter admin password.');
      return;
    }

    setIsVerifying(true);
    setAuthError('');

    try {
      const res = await fetch('/api/admin-verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();
      if (res.ok && data.valid) {
        setIsUnlocked(true);
        sessionStorage.setItem('vcj_admin_reply_token', password);
      } else {
        setAuthError(data.error || 'Incorrect password.');
      }
    } catch {
      setAuthError('Failed to verify password. Please try again.');
    } finally {
      setIsVerifying(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('vcj_admin_reply_token');
    setPassword('');
    setIsUnlocked(false);
    setGeneratedReply('');
  };

  const handleGenerateReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewText.trim()) {
      setGenerateError('Please enter the customer review text.');
      return;
    }

    setIsGenerating(true);
    setGenerateError('');
    setIsCopied(false);

    try {
      const res = await fetch('/api/reply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': password,
        },
        body: JSON.stringify({
          reviewText: reviewText.trim(),
          rating,
          customerName: customerName.trim() || undefined,
          password,
        }),
      });

      const data = await res.json();

      if (res.status === 429) {
        setGenerateError('Rate limit exceeded (max 10 requests per minute). Please wait a moment.');
        return;
      }

      if (res.status === 401) {
        setAuthError('Session expired or invalid password. Please login again.');
        setIsUnlocked(false);
        return;
      }

      if (res.ok && data.reply) {
        setGeneratedReply(data.reply);
      } else {
        setGenerateError(data.error || 'Failed to generate reply. Please try again.');
      }
    } catch {
      setGenerateError('Network error while generating reply. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopyReply = async () => {
    if (!generatedReply.trim()) return;
    const success = await copyToClipboard(generatedReply.trim());
    if (success) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  // Password Lock Screen
  if (!isUnlocked) {
    return (
      <main className="min-h-screen bg-[#faf8f5] dark:bg-[#0c0e12] flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-white dark:bg-[#15181f] rounded-2xl p-6 shadow-md border border-[#e8dfcf] dark:border-[#2a2e39] text-center">
          <div className="w-12 h-12 rounded-full bg-[#c5a059]/15 text-[#c5a059] flex items-center justify-center mx-auto mb-3">
            <Lock className="w-6 h-6" />
          </div>

          <h1 className="font-serif text-xl font-bold text-[#1c1917] dark:text-[#f8f5ee]">
            Owner Reply Assistant
          </h1>
          <p className="text-xs text-[#786c5e] dark:text-[#9e9487] mt-1 mb-5">
            Enter admin password to access Vimal Changal Jewellers review reply generator.
          </p>

          <form onSubmit={handleUnlock} className="space-y-3">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Admin Password"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#faf8f5] dark:bg-[#0e1014] border border-[#e2d8c7] dark:border-[#2b303d] text-sm text-[#1c1917] dark:text-[#f8f5ee] focus:outline-none focus:ring-2 focus:ring-[#c5a059]/50"
                autoFocus
              />
            </div>

            {authError && (
              <div className="flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 p-2 rounded-lg text-left">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isVerifying}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#b8903c] text-white font-semibold text-sm shadow hover:brightness-105 active:scale-[0.98] transition-all disabled:opacity-60"
            >
              {isVerifying ? 'Checking...' : 'Unlock Assistant'}
            </button>
          </form>
        </div>
      </main>
    );
  }

  // Unlocked Dashboard
  const wordCount = generatedReply.trim() ? generatedReply.trim().split(/\s+/).length : 0;

  return (
    <main className="min-h-screen bg-[#faf8f5] dark:bg-[#0c0e12] text-[#221f1a] dark:text-[#f3eee5] py-8 px-4">
      <div className="w-full max-w-2xl mx-auto space-y-6">
        
        {/* Top Bar */}
        <header className="flex items-center justify-between border-b border-[#e8dfcf] dark:border-[#262b35] pb-4">
          <div>
            <span className="text-[10px] tracking-wider uppercase font-semibold text-[#c5a059]">
              Google Business Profile Tool
            </span>
            <h1 className="font-serif text-xl sm:text-2xl font-bold text-[#1c1917] dark:text-[#f8f5ee]">
              Owner Review Reply Assistant
            </h1>
            <p className="text-xs text-[#786c5e] dark:text-[#9e9487]">
              Vimal Changal Jewellers, Jaunpur
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex items-center gap-1 text-xs text-[#786c5e] hover:text-rose-600 dark:text-[#9e9487] dark:hover:text-rose-400 px-3 py-1.5 rounded-lg border border-[#e8dfcf] dark:border-[#2a2e39] transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Lock</span>
          </button>
        </header>

        {/* Input Form Card */}
        <form
          onSubmit={handleGenerateReply}
          className="bg-white dark:bg-[#15181f] rounded-2xl p-5 shadow-sm border border-[#e8dfcf] dark:border-[#2a2e39] space-y-4"
        >
          {/* Customer Name */}
          <div>
            <label className="block text-xs font-semibold text-[#5a5043] dark:text-[#b8ada0] mb-1">
              Customer Name (Optional)
            </label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="e.g. Ramesh Verma, Priya Singh"
              className="w-full px-3.5 py-2 rounded-xl bg-[#faf8f5] dark:bg-[#0e1014] border border-[#e2d8c7] dark:border-[#2b303d] text-sm text-[#1c1917] dark:text-[#f8f5ee] focus:outline-none focus:ring-2 focus:ring-[#c5a059]/40"
            />
          </div>

          {/* Rating Selector */}
          <div>
            <label className="block text-xs font-semibold text-[#5a5043] dark:text-[#b8ada0] mb-1.5">
              Review Rating
            </label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  className={`p-2 rounded-xl border flex items-center gap-1 text-xs font-medium transition-all ${
                    rating === star
                      ? 'bg-[#c5a059]/20 border-[#c5a059] text-[#8a6824] dark:text-[#dfb76c]'
                      : 'bg-[#faf8f5] dark:bg-[#0e1014] border-[#e2d8c7] dark:border-[#2a2e39] text-[#6b5f51] dark:text-[#8c7f70]'
                  }`}
                >
                  <Star
                    className={`w-4 h-4 ${
                      star <= rating
                        ? 'fill-[#f59e0b] text-[#f59e0b]'
                        : 'text-neutral-300 dark:text-neutral-600'
                    }`}
                  />
                  <span>{star} ★</span>
                </button>
              ))}
              <span className="text-xs text-[#786c5e] dark:text-[#9e9487] ml-2">
                {rating >= 4 ? 'Positive Review' : 'Needs Apology & Care'}
              </span>
            </div>
          </div>

          {/* Review Text */}
          <div>
            <label className="block text-xs font-semibold text-[#5a5043] dark:text-[#b8ada0] mb-1">
              Customer Review Text
            </label>
            <textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={4}
              placeholder="Paste the customer's Google review here..."
              className="w-full p-3 rounded-xl bg-[#faf8f5] dark:bg-[#0e1014] border border-[#e2d8c7] dark:border-[#2b303d] text-sm text-[#1c1917] dark:text-[#f8f5ee] focus:outline-none focus:ring-2 focus:ring-[#c5a059]/40"
              required
            />
          </div>

          {generateError && (
            <div className="flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/30 p-2.5 rounded-xl">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{generateError}</span>
            </div>
          )}

          <div className="flex items-center justify-between pt-1">
            <span className="text-[11px] text-[#786c5e] dark:text-[#8c7f70]">
              Generates 20-40 words in warm Hinglish
            </span>

            <button
              type="submit"
              disabled={isGenerating || !reviewText.trim()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#b8903c] text-white font-semibold text-sm shadow hover:brightness-105 active:scale-[0.98] transition-all disabled:opacity-50 cursor-pointer"
            >
              {isGenerating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Generating reply...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Owner Reply</span>
                </>
              )}
            </button>
          </div>
        </form>

        {/* Output Reply Card */}
        {generatedReply && (
          <section className="bg-white dark:bg-[#15181f] rounded-2xl p-5 shadow-sm border border-[#c5a059]/40 dark:border-[#c5a059]/30 space-y-3 animate-in fade-in slide-in-from-top-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#8a6824] dark:text-[#dfb76c]">
                <MessageSquareQuote className="w-4 h-4" />
                <span>Generated Owner Reply (Hinglish)</span>
              </div>
              <span className="text-xs text-[#786c5e] dark:text-[#8c7f70]">
                {wordCount} words
              </span>
            </div>

            <textarea
              value={generatedReply}
              onChange={(e) => setGeneratedReply(e.target.value)}
              rows={3}
              className="w-full p-3 rounded-xl bg-[#faf8f5] dark:bg-[#0e1014] border border-[#e2d8c7] dark:border-[#2b303d] text-sm text-[#1c1917] dark:text-[#f8f5ee] focus:outline-none focus:ring-2 focus:ring-[#c5a059]/40"
            />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                type="button"
                onClick={handleCopyReply}
                className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm ${
                  isCopied
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#c5a059] text-white hover:bg-[#b8903c]'
                }`}
              >
                {isCopied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Reply</span>
                  </>
                )}
              </button>

              <a
                href="https://business.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs text-[#786c5e] dark:text-[#a89d8f] hover:text-[#1c1917] dark:hover:text-white px-4 py-2 rounded-xl border border-[#e8dfcf] dark:border-[#2a2e39]"
              >
                <span>Open Google Business Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
