const base = {
  width: 40,
  height: 40,
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const CameraIcon = () => (
  <svg {...base}>
    <path d="M6 13h6l2-4h10l2 4h6v18H6z" />
    <circle cx="20" cy="22" r="5.5" />
  </svg>
);
export const ServerIcon = () => (
  <svg {...base}>
    <rect x="7" y="6" width="26" height="12" rx="3" />
    <rect x="7" y="22" width="26" height="12" rx="3" />
    <path d="M12 12h6M12 28h6" />
  </svg>
);
export const PhoneIcon = () => (
  <svg {...base}>
    <rect x="11" y="4" width="18" height="32" rx="4" />
    <path d="M17 31h6" />
  </svg>
);
export const ShieldIcon = () => (
  <svg {...base}>
    <path d="M20 4l13 5v9c0 8-5.5 14-13 18C12.5 32 7 26 7 18V9z" />
  </svg>
);

const small = { width: 22, height: 22, viewBox: "0 0 24 24", "aria-hidden": true };
export const MailIcon = () => (
  <svg {...small} fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round">
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="M3 7l9 7 9-7" />
  </svg>
);
export const GithubIcon = () => (
  <svg {...small} fill="currentColor">
    <path d="M12 .5a11.5 11.5 0 00-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 015.76 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0012 .5z" />
  </svg>
);
export const LinkedinIcon = () => (
  <svg {...small} fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9.75h4v11.5H3zM9.75 9.75h3.83v1.57h.06c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.78 2.66 4.78 6.11v5.9h-4v-5.23c0-1.25-.02-2.86-1.74-2.86-1.75 0-2.02 1.36-2.02 2.77v5.32h-4z" />
  </svg>
);
