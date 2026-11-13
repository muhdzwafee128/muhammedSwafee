import React from 'react';

/**
 * Renders official / recognizable vector icons for technical skills.
 * Clean, lightweight, scalable SVGs with accessible aria-hidden.
 */
export default function TechIcon({ name, size = 22, className = '' }) {
  const s = size;

  switch (name) {
    case 'JavaScript':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <rect width="32" height="32" rx="6" fill="#F7DF1E" />
          <path
            d="M8.5 24.5l2.2-1.3c.5.8.9 1.4 1.8 1.4.9 0 1.5-.4 1.5-1.7V14h2.8v8.9c0 2.8-1.7 4.1-4.2 4.1-2.2 0-3.4-1.1-4.1-2.5zm11.2-.5l2.2-1.3c.6 1 1.4 1.7 2.6 1.7 1.1 0 1.8-.6 1.8-1.4 0-.9-.7-1.3-2.1-1.9l-.7-.3c-2.1-.9-3.5-2-3.5-4.3 0-2.2 1.7-3.8 4.3-3.8 1.9 0 3.2.7 4.1 2.3l-2.1 1.4c-.5-.8-1-1.2-2-1.2-.9 0-1.5.6-1.5 1.3 0 .8.6 1.1 1.8 1.6l.7.3c2.4 1 3.8 2.1 3.8 4.6 0 2.6-2 4-4.6 4-2.7 0-4.3-1.3-5-3.3z"
            fill="#000"
          />
        </svg>
      );

    case 'React.js':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <ellipse
            cx="16"
            cy="16"
            rx="4"
            ry="11"
            transform="rotate(30 16 16)"
            stroke="#61DAFB"
            strokeWidth="1.8"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="4"
            ry="11"
            transform="rotate(90 16 16)"
            stroke="#61DAFB"
            strokeWidth="1.8"
          />
          <ellipse
            cx="16"
            cy="16"
            rx="4"
            ry="11"
            transform="rotate(150 16 16)"
            stroke="#61DAFB"
            strokeWidth="1.8"
          />
          <circle cx="16" cy="16" r="2.4" fill="#61DAFB" />
        </svg>
      );

    case 'Python':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M15.8 4C10.6 4 11 6.3 11 6.3l.01 2.4h4.9v.7H9.2S6 9 6 14.3s2.8 5.1 2.8 5.1h1.7v-2.4s-.1-2.8 2.8-2.8h4.8s2.7.05 2.7-2.6V6.7S21.3 4 15.8 4zm-2.7 2c.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1z"
            fill="#3776AB"
          />
          <path
            d="M16.2 28c5.2 0 4.8-2.3 4.8-2.3l-.01-2.4h-4.9v-.7h6.7s3.2.4 3.2-4.9-2.8-5.1-2.8-5.1h-1.7v2.4s.1 2.8-2.8 2.8h-4.8s-2.7-.05-2.7 2.6v4.8s-.5 2.7 5 2.7zm2.7-2c-.6 0-1.1-.5-1.1-1.1 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 .6-.5 1.1-1.1 1.1z"
            fill="#FFD43B"
          />
        </svg>
      );

    case 'Node.js':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path d="M16 4l10.4 6v12L16 28 5.6 22V10L16 4z" fill="#339933" />
          <path d="M16 10l6.2 3.6v7.2L16 24.4 9.8 20.8v-7.2L16 10z" fill="#FFFFFF" />
          <path d="M16 12.8L12.4 15v4.2l3.6 2.1 3.6-2.1V15L16 12.8z" fill="#339933" />
        </svg>
      );

    case 'Express.js':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <rect width="32" height="32" rx="6" className="fill-zinc-800 dark:fill-zinc-700" />
          <text
            x="50%"
            y="54%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="#F4F4F5"
            fontSize="12"
            fontFamily="monospace"
            fontWeight="bold"
          >
            ex
          </text>
        </svg>
      );

    case 'FastAPI':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <circle cx="16" cy="16" r="14" fill="#009688" />
          <path d="M17.5 7L10 17.5h5.5L14.5 25 22 14.5h-5.5L17.5 7z" fill="#FFFFFF" />
        </svg>
      );

    case 'MongoDB':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M16 4s-6 5.8-6 12c0 4.5 3.2 8.3 6 12 2.8-3.7 6-7.5 6-12 0-6.2-6-12-6-12z"
            fill="#47A248"
          />
          <path d="M16 4v24c.2-.2 6-3.8 6-12 0-6.2-6-12-6-12z" fill="#499D4A" />
        </svg>
      );

    case 'HTML5':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path d="M5.5 4l2.1 23.5L16 30l8.4-2.5L26.5 4H5.5z" fill="#E44D26" />
          <path d="M16 6.1v21.5l6.5-1.9L24.1 6.1H16z" fill="#F16529" />
          <path
            d="M16 11.4H10.4l.4 4.5h5.2V11.4zm0 8.4l-.05.01-3.1-.8-.2-2.3H9.9l.4 5 5.7 1.6V19.8zm0-8.4v4.5h5.2l-.4 4.7-4.8 1.3v2.8l7.6-2.1.8-9.4L24.3 11.4H16z"
            fill="#EBEBEB"
          />
        </svg>
      );

    case 'CSS3':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path d="M5.5 4l2.1 23.5L16 30l8.4-2.5L26.5 4H5.5z" fill="#1572B6" />
          <path d="M16 6.1v21.5l6.5-1.9L24.1 6.1H16z" fill="#33A9DC" />
          <path
            d="M16 11.4H10.4l.4 4.5h5.2V11.4zm0 8.4l-.05.01-3.1-.8-.2-2.3H9.9l.4 5 5.7 1.6V19.8zm5.6-8.4l-.4 4.5H16v4.5h5.2l-.4 4.7-4.8 1.3v2.8l7.6-2.1.8-9.4L24.8 11.4h-3.2z"
            fill="#EBEBEB"
          />
        </svg>
      );

    case 'Git':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M27.5 13.8L18.2 4.5c-.8-.8-2.1-.8-2.9 0l-1.8 1.8 3.7 3.7c.9-.3 1.9-.1 2.6.6.7.7.9 1.7.6 2.6l3.6 3.6c.9-.3 1.9-.1 2.6.6 1.1 1.1 1.1 2.9 0 4s-2.9 1.1-4 0c-.8-.8-.9-1.9-.5-2.8l-3.3-3.3v7.3c.3.2.6.5.7.9 1.1 1.1 1.1 2.9 0 4s-2.9 1.1-4 0c-1.1-1.1-1.1-2.9 0-4 .4-.4.9-.7 1.4-.8v-7.4c-.5-.1-1-.4-1.4-.8-1.1-1.1-1.1-2.9 0-4 .5-.5 1.1-.7 1.8-.7L12.3 4.9 4.5 12.7c-.8.8-.8 2.1 0 2.9l9.3 9.3c.8.8 2.1.8 2.9 0l10.8-10.8c.8-.8.8-2.1 0-2.9v.6z"
            fill="#F05032"
          />
        </svg>
      );

    case 'Docker':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          <path
            d="M29.5 15.3c-.6-.4-1.9-.4-2.8-.1-.4-1.6-1.5-2.3-1.5-2.3-.6.9-.6 2.2-.2 3.1-.7.4-1.7.5-2.6.2-.4 1.1-.3 2.1-.3 2.2-.7.4-1.8.4-2.7.1-.6 1.4-.4 2.6-.4 2.7-1.8 1.1-4.2 1.5-7.3 1.5-6.8 0-10.2-3.7-10.2-3.7-.3 2.8 1.6 5.8 4.7 7.2 2.7 1.2 6.5 1.4 10.1.7 3.5-.7 6.4-2.7 7.7-6 .5.1 1.7.1 2.8-.4 1.2-.5 1.7-1.8 1.7-1.8s-.3-.2-1-.3l1.8-3.1zM6.5 14h2.5v2.5H6.5V14zm3.5 0h2.5v2.5H10V14zm3.5 0H16v2.5h-2.5V14zm3.5 0h2.5v2.5H17V14zm-7-3.5H12v2.5h-2V10.5zm3.5 0H16v2.5h-2.5V10.5zm3.5 0h2.5v2.5H17V10.5zm-3.5-3.5H16v2.5h-2.5V7z"
            fill="#2496ED"
          />
        </svg>
      );

    case 'Figma':
      return (
        <svg
          width={s}
          height={s}
          viewBox="0 0 32 32"
          fill="none"
          className={className}
          aria-hidden="true"
        >
          {/* Top-left */}
          <path
            d="M11 2h5v7h-5a3.5 3.5 0 0 1 0-7z"
            fill="#F24E1E"
          />
          {/* Top-right */}
          <path
            d="M16 2h5a3.5 3.5 0 0 1 0 7h-5V2z"
            fill="#FF7262"
          />
          {/* Middle-left */}
          <path
            d="M11 9h5v7h-5a3.5 3.5 0 0 1 0-7z"
            fill="#A259FF"
          />
          {/* Middle-right (circle) */}
          <circle cx="19.5" cy="12.5" r="3.5" fill="#1ABCFE" />
          {/* Bottom-left (drop) */}
          <path
            d="M11 16h5v3.5a3.5 3.5 0 0 1-7 0 3.5 3.5 0 0 1 2-3.5z"
            fill="#0ACF83"
          />
        </svg>
      );

    default:
      return (
        <div
          style={{ width: s, height: s }}
          className="rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300 text-xs font-bold"
        >
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
}
