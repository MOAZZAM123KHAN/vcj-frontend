'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Sparkles,
  RefreshCw,
  Copy,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Gem,
  Award,
  Users,
  Tag,
  Star,
  MapPin,
} from 'lucide-react';
import {
  ALLOWED_TAGS,
  ReviewLang,
  ReviewTag,
  getFallbackReviews,
} from '@/lib/reviewTemplates';

const GOOGLE_REVIEW_URL = 'https://g.page/r/CbaZqGf1olHqEBM/review';

const INSTRUCTIONS_BY_LANG: Record<
  ReviewLang,
  {
    cardTitle: string;
    step1: string;
    step2: string;
    step3: string;
    redirectingText: string;
    copyAgainBtn: string;
    copyAgainDone: string;
  }
> = {
  hinglish: {
    cardTitle: 'Google par paste karne ke steps:',
    step1: '1. Review copy ho gaya ✅',
    step2: '2. Google page par review box mein dabake rakho aur Paste dabao',
    step3: '3. Star do aur Post dabao',
    redirectingText: 'Google khul raha hai...',
    copyAgainBtn: 'Dobara copy karein',
    copyAgainDone: 'Dobara copy ho gaya ✅',
  },
  hindi: {
    cardTitle: 'गूगल पर पेस्ट करने के चरण:',
    step1: '1. रिव्यू कॉपी हो गया ✅',
    step2: '2. गूगल पेज पर रिव्यू बॉक्स में दबाकर रखें और Paste दबाएं',
    step3: '3. स्टार दें और Post दबाएं',
    redirectingText: 'गूगल खुल रहा है...',
    copyAgainBtn: 'दोबारा कॉपी करें',
    copyAgainDone: 'दोबारा कॉपी हो गया ✅',
  },
  english: {
    cardTitle: 'Steps to post on Google:',
    step1: '1. Review copied ✅',
    step2: '2. Tap & hold in the Google review box and tap Paste',
    step3: '3. Give star rating and tap Post',
    redirectingText: 'Opening Google page...',
    copyAgainBtn: 'Copy again',
    copyAgainDone: 'Copied again ✅',
  },
};

const TAG_ICONS: Record<ReviewTag, React.ReactNode> = {
  Design: <Sparkles className="w-3.5 h-3.5" />,
  'Bridal / Shaadi set': <Gem className="w-3.5 h-3.5" />,
  'Purity & Hallmark': <ShieldCheck className="w-3.5 h-3.5" />,
  Staff: <Users className="w-3.5 h-3.5" />,
  Price: <Tag className="w-3.5 h-3.5" />,
  'Silver / Diamond': <Award className="w-3.5 h-3.5" />,
};

async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // proceed to fallback
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

export default function ReviewClient() {
  const [lang, setLang] = useState<ReviewLang>('hinglish');
  const [selectedTags, setSelectedTags] = useState<ReviewTag[]>([]);
  const [reviewText, setReviewText] = useState<string>(() => {
    return getFallbackReviews('hinglish', [], 3)[0];
  });
  const [reviewsQueue, setReviewsQueue] = useState<string[]>(() => {
    return getFallbackReviews('hinglish', [], 3).slice(1);
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [isSecondaryCopied, setIsSecondaryCopied] = useState<boolean>(false);
  const redirectTimerRef = useRef<NodeJS.Timeout | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => {
      if (redirectTimerRef.current) {
        clearTimeout(redirectTimerRef.current);
      }
    };
  }, []);

  const instructions = INSTRUCTIONS_BY_LANG[lang] || INSTRUCTIONS_BY_LANG.hinglish;

  // Helper to fetch reviews from API or fallback
  const fetchReviews = useCallback(
    async (selectedLang: ReviewLang, tags: ReviewTag[]): Promise<string[]> => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      const controller = new AbortController();
      abortControllerRef.current = controller;

      try {
        const response = await fetch('/api/review', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            lang: selectedLang,
            tags: tags,
          }),
          signal: controller.signal,
        });

        if (response.ok) {
          const data = await response.json();
          if (Array.isArray(data.reviews) && data.reviews.length > 0) {
            return data.reviews;
          }
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === 'AbortError') {
          return [];
        }
      }

      // Seamless fallback
      return getFallbackReviews(selectedLang, tags, 3);
    },
    []
  );

  // Initial load and updates when lang or tags change
  useEffect(() => {
    let isMounted = true;

    const timer = setTimeout(async () => {
      setIsLoading(true);
      const reviews = await fetchReviews(lang, selectedTags);
      if (!isMounted) return;

      if (reviews.length > 0) {
        setReviewText(reviews[0]);
        setReviewsQueue(reviews.slice(1));
      }
      setIsLoading(false);
    }, 150);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [lang, selectedTags, fetchReviews]);

  // Handle Tag Toggle
  const toggleTag = (tag: ReviewTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Next Suggestion
  const handleNewSuggestion = async () => {
    if (isLoading) return;

    if (reviewsQueue.length > 0) {
      const nextReview = reviewsQueue[0];
      const remainingQueue = reviewsQueue.slice(1);
      setReviewText(nextReview);
      setReviewsQueue(remainingQueue);

      // If queue is now empty, replenish in background
      if (remainingQueue.length === 0) {
        fetchReviews(lang, selectedTags).then((newReviews) => {
          if (newReviews.length > 0) {
            setReviewsQueue(newReviews.filter((r) => r !== nextReview));
          }
        });
      }
      return;
    }

    // Queue is empty, fetch fresh reviews
    setIsLoading(true);
    const fresh = await fetchReviews(lang, selectedTags);
    if (fresh.length > 0) {
      setReviewText(fresh[0]);
      setReviewsQueue(fresh.slice(1));
    } else {
      const fallback = getFallbackReviews(lang, selectedTags, 3);
      setReviewText(fallback[0]);
      setReviewsQueue(fallback.slice(1));
    }
    setIsLoading(false);
  };

  // Main Copy and Redirect action
  const handleCopyAndRedirect = async () => {
    if (isCopied || !reviewText.trim()) return;

    const success = await copyToClipboard(reviewText.trim());

    if (success) {
      setIsCopied(true);

      // Redirect after ~1.8 seconds so the customer can clearly read the 3-step instructions
      if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
      redirectTimerRef.current = setTimeout(() => {
        window.location.href = GOOGLE_REVIEW_URL;
      }, 1800);
    } else {
      if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
      redirectTimerRef.current = setTimeout(() => {
        window.location.href = GOOGLE_REVIEW_URL;
      }, 1000);
    }
  };

  // Secondary Copy action ("Dobara copy karein")
  const handleSecondaryCopy = async () => {
    if (!reviewText.trim()) return;
    const success = await copyToClipboard(reviewText.trim());
    if (success) {
      setIsSecondaryCopied(true);
      setTimeout(() => {
        setIsSecondaryCopied(false);
      }, 2000);
    }
  };

  const wordCount = reviewText.trim() ? reviewText.trim().split(/\s+/).length : 0;

  return (
    <main className="min-h-screen bg-[#faf8f5] dark:bg-[#0c0e12] text-[#221f1a] dark:text-[#f3eee5] flex flex-col justify-between selection:bg-[#c5a059]/30 transition-colors duration-300">
      {/* Decorative Top Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-36 bg-gradient-to-b from-[#c5a059]/15 via-[#c5a059]/5 to-transparent pointer-events-none blur-2xl" />

      {/* Main Container */}
      <div className="w-full max-w-[480px] mx-auto px-4 pt-[calc(1.25rem+env(safe-area-inset-top,0px))] pb-[calc(1.5rem+env(safe-area-inset-bottom,0px))] flex-1 flex flex-col justify-between z-10">
        
        {/* Header Section */}
        <header className="text-center pt-2 pb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a059]/10 dark:bg-[#c5a059]/20 border border-[#c5a059]/30 text-[#8a6824] dark:text-[#dfb76c] text-xs font-medium tracking-wider uppercase mb-2.5">
            <Star className="w-3 h-3 fill-current" />
            <span>Google Review Assistant</span>
            <Star className="w-3 h-3 fill-current" />
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-[#1c1917] dark:text-[#f8f5ee] leading-tight">
            Vimal Changal Jewellers
          </h1>

          <div className="flex items-center justify-center gap-1 text-xs text-[#786c5e] dark:text-[#a89d8f] mt-1">
            <MapPin className="w-3 h-3 text-[#c5a059]" />
            <span>Sadbhavna Bridge Mod, Jaunpur</span>
            <span className="text-[#c5a059]">•</span>
            <span>Est. 1960</span>
          </div>

          {/* 5-Star Visual Display */}
          <div className="flex items-center justify-center gap-1 mt-2.5" aria-label="5 out of 5 stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-5 h-5 text-[#f59e0b] fill-[#f59e0b] drop-shadow-sm animate-in fade-in"
              />
            ))}
          </div>
        </header>

        {/* Interactive Controls Card */}
        <section className="bg-white dark:bg-[#15181f] rounded-2xl p-4 sm:p-5 shadow-sm border border-[#e8dfcf] dark:border-[#2a2e39] mb-4 space-y-4">
          
          {/* Language Selector */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-[#665a4c] dark:text-[#b8ada0] mb-2 tracking-wide">
              <span>CHOOSE LANGUAGE / भाषा चुनें</span>
              <span className="text-[11px] text-[#c5a059] font-normal">3 options</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 bg-[#f5f1ea] dark:bg-[#0e1014] p-1 rounded-xl border border-[#e8dfcf]/60 dark:border-[#262b35]">
              {(
                [
                  { id: 'hinglish', label: 'Hinglish', sub: 'Roman Hindi' },
                  { id: 'hindi', label: 'हिंदी', sub: 'Devanagari' },
                  { id: 'english', label: 'English', sub: 'Standard' },
                ] as const
              ).map((item) => {
                const isActive = lang === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setLang(item.id)}
                    disabled={isLoading}
                    className={`py-2 px-1 rounded-lg text-xs font-medium transition-all duration-200 flex flex-col items-center justify-center ${
                      isActive
                        ? 'bg-gradient-to-r from-[#d4af37] to-[#b8903c] text-white shadow-sm font-semibold'
                        : 'text-[#5a5043] dark:text-[#a89d8f] hover:text-[#1c1917] dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={`text-[10px] scale-90 ${isActive ? 'text-white/80' : 'text-[#8c7f70] dark:text-[#7a7164]'}`}>
                      {item.sub}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Topic Chips */}
          <div>
            <div className="flex items-center justify-between text-xs font-semibold text-[#665a4c] dark:text-[#b8ada0] mb-2 tracking-wide">
              <span>WHAT DID YOU LIKE? (OPTIONAL)</span>
              <span className="text-[11px] text-[#c5a059] font-normal">Tap to filter</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {ALLOWED_TAGS.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    disabled={isLoading}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-150 border ${
                      isSelected
                        ? 'bg-[#c5a059]/15 dark:bg-[#c5a059]/25 border-[#c5a059] text-[#8a6824] dark:text-[#dfb76c] shadow-xs'
                        : 'bg-[#faf8f5] dark:bg-[#1a1d26] border-[#e2d8c7] dark:border-[#2e3340] text-[#6b5f51] dark:text-[#9e9487] hover:border-[#c5a059]/60'
                    }`}
                  >
                    <span className={isSelected ? 'text-[#c5a059]' : 'text-[#8c7f70] dark:text-[#7a7164]'}>
                      {TAG_ICONS[tag]}
                    </span>
                    <span>{tag}</span>
                    {isSelected && <span className="text-[#c5a059] text-[10px] font-bold">✓</span>}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Review Textarea Card */}
          <div className="relative pt-1">
            <div className="flex items-center justify-between text-xs font-semibold text-[#665a4c] dark:text-[#b8ada0] mb-1.5">
              <span className="flex items-center gap-1">
                <span>YOUR REVIEW SUGGESTION</span>
                <span className="text-[10px] font-normal text-[#8c7f70] dark:text-[#7a7164]">(Editable)</span>
              </span>

              <div className="flex items-center gap-2">
                <span className="text-[11px] text-[#8c7f70] dark:text-[#7a7164]">
                  {wordCount} words
                </span>
                
                {/* New Suggestion Button */}
                <button
                  type="button"
                  onClick={handleNewSuggestion}
                  disabled={isLoading}
                  className="inline-flex items-center gap-1 text-[11px] text-[#8a6824] dark:text-[#dfb76c] font-semibold hover:underline active:scale-95 transition-transform disabled:opacity-50"
                  title="Generate another review suggestion"
                >
                  <RefreshCw className={`w-3 h-3 ${isLoading ? 'animate-spin' : ''}`} />
                  <span>New suggestion</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <textarea
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                disabled={isLoading}
                rows={4}
                className="w-full p-3.5 rounded-xl bg-[#faf8f5] dark:bg-[#0e1014] border border-[#e2d8c7] dark:border-[#2b303d] text-[#1c1917] dark:text-[#f8f5ee] text-sm leading-relaxed focus:outline-none focus:ring-2 focus:ring-[#c5a059]/40 focus:border-[#c5a059] transition-all resize-none shadow-inner disabled:opacity-60"
                placeholder="Writing your review suggestion..."
              />

              {/* Loading Overlay */}
              {isLoading && (
                <div className="absolute inset-0 bg-[#faf8f5]/80 dark:bg-[#0e1014]/80 backdrop-blur-xs rounded-xl flex items-center justify-center gap-2 text-xs font-medium text-[#8a6824] dark:text-[#dfb76c]">
                  <RefreshCw className="w-4 h-4 animate-spin text-[#c5a059]" />
                  <span>Writing your review...</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Bottom Action Area */}
        <section className="space-y-3">
          
          {/* 3-Step Instruction Card (shown after tapping Copy, before redirecting) */}
          {isCopied && (
            <div className="bg-[#f0fdf4] dark:bg-[#072418] border-2 border-emerald-500/50 rounded-2xl p-3.5 sm:p-4 shadow-lg animate-in fade-in slide-in-from-bottom-2 duration-200 space-y-2">
              <div className="flex items-center justify-between border-b border-emerald-500/20 pb-1.5">
                <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-300 uppercase tracking-wide flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                  <span>{instructions.cardTitle}</span>
                </span>
                <span className="text-[10px] font-medium text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                  <span>{instructions.redirectingText}</span>
                </span>
              </div>
              <div className="space-y-1.5 text-xs text-emerald-950 dark:text-emerald-100 font-medium">
                <div className="bg-white/80 dark:bg-black/40 px-3 py-2 rounded-xl flex items-start gap-2 border border-emerald-500/20">
                  <span className="font-semibold text-emerald-900 dark:text-emerald-200">
                    {instructions.step1}
                  </span>
                </div>
                <div className="bg-white/80 dark:bg-black/40 px-3 py-2 rounded-xl flex items-start gap-2 border border-emerald-500/20">
                  <span>
                    {instructions.step2}
                  </span>
                </div>
                <div className="bg-white/80 dark:bg-black/40 px-3 py-2 rounded-xl flex items-start gap-2 border border-emerald-500/20">
                  <span>
                    {instructions.step3}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Main Action Button */}
          <button
            type="button"
            onClick={handleCopyAndRedirect}
            disabled={isLoading || isCopied || !reviewText.trim()}
            className={`w-full py-4 px-5 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md active:scale-[0.99] transition-all duration-200 cursor-pointer ${
              isCopied
                ? 'bg-emerald-600 text-white shadow-emerald-500/20'
                : 'bg-gradient-to-r from-[#d4af37] via-[#c5a059] to-[#b8903c] text-white hover:brightness-105 shadow-[#c5a059]/25 disabled:opacity-50 disabled:cursor-not-allowed'
            }`}
          >
            {isCopied ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-white animate-bounce" />
                <span>{instructions.redirectingText}</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Copy and write on Google</span>
                <ExternalLink className="w-4 h-4 ml-0.5 opacity-80" />
              </>
            )}
          </button>

          {/* Secondary "Dobara copy karein" Button (stays visible) */}
          <div className="flex items-center justify-center pt-0.5">
            <button
              type="button"
              onClick={handleSecondaryCopy}
              disabled={isLoading || !reviewText.trim()}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border border-[#c5a059]/40 bg-white/80 dark:bg-[#15181f] text-[#8a6824] dark:text-[#dfb76c] hover:bg-[#c5a059]/10 text-xs font-semibold active:scale-95 transition-all shadow-2xs disabled:opacity-50 cursor-pointer"
            >
              {isSecondaryCopied ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-700 dark:text-emerald-400">{instructions.copyAgainDone}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{instructions.copyAgainBtn}</span>
                </>
              )}
            </button>
          </div>

          {/* Mandatory User Note */}
          <p className="text-center text-[11px] sm:text-xs text-[#786c5e] dark:text-[#9e9487] leading-normal px-2">
            This is only a suggestion. Please edit it to match your experience and post it on Google yourself.
          </p>

          {/* Simple Steps Walkthrough */}
          <div className="pt-2 border-t border-[#e8dfcf]/60 dark:border-[#262b35]/60 flex items-center justify-between text-[11px] text-[#8c7f70] dark:text-[#807669] px-1">
            <span className="flex items-center gap-1">
              <span className="w-4 h-4 rounded-full bg-[#c5a059]/20 text-[#8a6824] dark:text-[#dfb76c] font-bold text-[9px] flex items-center justify-center">1</span>
              <span>Edit text</span>
            </span>
            <span className="text-[#c5a059]">→</span>
            <span className="flex items-center gap-1">
              <span className="w-4 h-4 rounded-full bg-[#c5a059]/20 text-[#8a6824] dark:text-[#dfb76c] font-bold text-[9px] flex items-center justify-center">2</span>
              <span>Tap button to copy</span>
            </span>
            <span className="text-[#c5a059]">→</span>
            <span className="flex items-center gap-1">
              <span className="w-4 h-4 rounded-full bg-[#c5a059]/20 text-[#8a6824] dark:text-[#dfb76c] font-bold text-[9px] flex items-center justify-center">3</span>
              <span>Paste on Google</span>
            </span>
          </div>
        </section>

      </div>
    </main>
  );
}
