import React, { useCallback, useEffect, useRef, useState } from 'react';
import { reelsData } from '../../lib/data';

const fmt = (n: number) =>
  n >= 1_000_000
    ? `${(n / 1_000_000).toFixed(1)}M`
    : n >= 1000
      ? `${(n / 1000).toFixed(1)}K`
      : `${n}`;

const ReelPage: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const [muted, setMuted] = useState(true);
  const [paused, setPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const [transitioning, setTrans] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollLock = useRef(false);
  const indexRef = useRef(0);

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  // play / reload when reel changes
  // canplay event ensures we call play() only after the browser has buffered
  // enough data — calling play() synchronously after load() gets interrupted
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    setPaused(false);
    setProgress(0);
    const tryPlay = () => v.play().catch(() => {});
    v.addEventListener('canplay', tryPlay, { once: true });
    v.load();
    return () => v.removeEventListener('canplay', tryPlay);
  }, [index]);

  // sync mute toggle to the live video element
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = muted;
  }, [muted]);

  // handle manual pause / play
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (paused) v.pause();
    else v.play().catch(() => {});
  }, [paused]);

  const navigate = useCallback((dir: 'up' | 'down') => {
    if (scrollLock.current) return;
    const curr = indexRef.current;
    const next =
      dir === 'up'
        ? Math.max(0, curr - 1)
        : Math.min(reelsData.length - 1, curr + 1);
    if (next === curr) return;

    scrollLock.current = true;
    setTrans(true);
    setTimeout(() => {
      setIndex(next);
      setTrans(false);
    }, 180);
    setTimeout(() => {
      scrollLock.current = false;
    }, 800);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      navigate(e.deltaY > 0 ? 'down' : 'up');
    };
    el.addEventListener('wheel', handler, { passive: false });
    return () => el.removeEventListener('wheel', handler);
  }, [navigate]);

  const reel = reelsData[index];
  const isLiked = !!liked[reel._id];

  return (
    <div
      ref={containerRef}
      className="relative flex h-full select-none items-center justify-center overflow-hidden bg-black"
    >
      {/* Reel card + actions */}
      <div
        className={`flex items-end gap-4 transition-opacity duration-[180ms] ${
          transitioning ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Portrait card */}
        <div
          className="relative flex-shrink-0 overflow-hidden rounded-xl shadow-2xl"
          style={{
            height: 'min(calc(100vh - 80px), 720px)',
            aspectRatio: '9 / 16',
          }}
        >
          <video
            ref={videoRef}
            src={reel.videoUrl}
            poster={reel.poster}
            autoPlay
            loop
            playsInline
            muted
            className="absolute inset-0 h-full w-full object-cover"
            onTimeUpdate={() => {
              const v = videoRef.current;
              if (v && v.duration)
                setProgress((v.currentTime / v.duration) * 100);
            }}
          />

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/25">
            <div
              className="h-full bg-white transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Top-right controls */}
          <div className="absolute right-3 top-3 flex gap-2">
            <button
              onClick={() => setMuted((m) => !m)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none"
            >
              <i
                className={`fas fa-${muted ? 'volume-mute' : 'volume-up'} text-sm`}
              ></i>
            </button>
            <button
              onClick={() => setPaused((p) => !p)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none"
            >
              <i className={`fas fa-${paused ? 'play' : 'pause'} text-sm`}></i>
            </button>
          </div>

          {/* Bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-black/85 to-transparent" />

          {/* Bottom info */}
          <div className="absolute inset-x-0 bottom-4 space-y-1.5 px-4">
            <div className="flex items-center gap-2">
              <img
                src={reel.user.dp ?? 'https://random.imagecdn.app/200/200'}
                className="h-9 w-9 flex-shrink-0 rounded-full border-2 border-white object-cover"
                alt={reel.user.fullName}
              />
              <span className="text-sm font-semibold text-white">
                {reel.user.fullName}
              </span>
              {reel.user.isVerified && (
                <i className="fas fa-check-circle text-xs text-[#2d88ff]"></i>
              )}
              <span className="text-white/50">·</span>
              <button className="rounded border border-white px-2.5 py-0.5 text-xs font-semibold text-white hover:bg-white/10 focus:outline-none">
                {reel.user.isFollowing ? 'Following' : 'Follow'}
              </button>
            </div>
            <div className="flex items-center gap-1.5">
              <i className="fas fa-music text-[11px] text-white/80"></i>
              <span className="truncate text-xs text-white/80">
                {reel.audio}
              </span>
            </div>
            <p className="line-clamp-2 text-sm leading-snug text-white/90">
              {reel.caption}
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col items-center gap-5 pb-6">
          <button
            onClick={() =>
              setLiked((prev) => ({ ...prev, [reel._id]: !prev[reel._id] }))
            }
            className="flex flex-col items-center gap-1 focus:outline-none"
          >
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                isLiked ? 'bg-primary/20' : 'bg-white/10 hover:bg-white/20'
              }`}
            >
              <i
                className={`fas fa-thumbs-up text-xl ${isLiked ? 'text-primary' : 'text-white'}`}
              ></i>
            </div>
            <span className="text-xs font-semibold text-white">
              {fmt(reel.likes + (isLiked ? 1 : 0))}
            </span>
          </button>

          <button className="flex flex-col items-center gap-1 focus:outline-none">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
              <i className="far fa-comment text-xl text-white"></i>
            </div>
            <span className="text-xs font-semibold text-white">
              {fmt(reel.comments)}
            </span>
          </button>

          <button className="flex flex-col items-center gap-1 focus:outline-none">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20">
              <i className="fas fa-share text-xl text-white"></i>
            </div>
            <span className="text-xs font-semibold text-white">
              {fmt(reel.shares)}
            </span>
          </button>

          <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20 focus:outline-none">
            <i className="fas fa-ellipsis-h text-xl text-white"></i>
          </button>
        </div>
      </div>

      {/* Up / Down navigation */}
      <div className="absolute right-6 top-1/2 flex -translate-y-1/2 flex-col gap-3">
        <button
          onClick={() => navigate('up')}
          disabled={index === 0}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none disabled:opacity-25"
        >
          <i className="fas fa-chevron-up text-sm"></i>
        </button>
        <button
          onClick={() => navigate('down')}
          disabled={index === reelsData.length - 1}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none disabled:opacity-25"
        >
          <i className="fas fa-chevron-down text-sm"></i>
        </button>
      </div>
    </div>
  );
};

export default ReelPage;
