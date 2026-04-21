export type AdminCardThemeName =
  | 'sky'
  | 'emerald'
  | 'amber'
  | 'violet'
  | 'rose'
  | 'indigo'
  | 'cyan';

type AdminCardTheme = {
  surface: string;
  mutedSurface: string;
  iconWrap: string;
  iconColor: string;
  eyebrow: string;
  value: string;
  badge: string;
  progress: string;
};

export const adminCardThemes: Record<AdminCardThemeName, AdminCardTheme> = {
  sky: {
    surface: 'border-sky-200 bg-gradient-to-br from-sky-50 via-white to-sky-100/70 shadow-sm',
    mutedSurface: 'border-sky-100 bg-sky-50/80',
    iconWrap: 'bg-sky-100',
    iconColor: 'text-sky-700',
    eyebrow: 'text-sky-700/90',
    value: 'text-sky-950',
    badge: 'bg-sky-100 text-sky-700',
    progress: 'bg-sky-500',
  },
  emerald: {
    surface:
      'border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-emerald-100/70 shadow-sm',
    mutedSurface: 'border-emerald-100 bg-emerald-50/80',
    iconWrap: 'bg-emerald-100',
    iconColor: 'text-emerald-700',
    eyebrow: 'text-emerald-700/90',
    value: 'text-emerald-950',
    badge: 'bg-emerald-100 text-emerald-700',
    progress: 'bg-emerald-500',
  },
  amber: {
    surface: 'border-amber-200 bg-gradient-to-br from-amber-50 via-white to-amber-100/70 shadow-sm',
    mutedSurface: 'border-amber-100 bg-amber-50/80',
    iconWrap: 'bg-amber-100',
    iconColor: 'text-amber-700',
    eyebrow: 'text-amber-700/90',
    value: 'text-amber-950',
    badge: 'bg-amber-100 text-amber-700',
    progress: 'bg-amber-500',
  },
  violet: {
    surface:
      'border-violet-200 bg-gradient-to-br from-violet-50 via-white to-violet-100/70 shadow-sm',
    mutedSurface: 'border-violet-100 bg-violet-50/80',
    iconWrap: 'bg-violet-100',
    iconColor: 'text-violet-700',
    eyebrow: 'text-violet-700/90',
    value: 'text-violet-950',
    badge: 'bg-violet-100 text-violet-700',
    progress: 'bg-violet-500',
  },
  rose: {
    surface: 'border-rose-200 bg-gradient-to-br from-rose-50 via-white to-rose-100/70 shadow-sm',
    mutedSurface: 'border-rose-100 bg-rose-50/80',
    iconWrap: 'bg-rose-100',
    iconColor: 'text-rose-700',
    eyebrow: 'text-rose-700/90',
    value: 'text-rose-950',
    badge: 'bg-rose-100 text-rose-700',
    progress: 'bg-rose-500',
  },
  indigo: {
    surface:
      'border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-indigo-100/70 shadow-sm',
    mutedSurface: 'border-indigo-100 bg-indigo-50/80',
    iconWrap: 'bg-indigo-100',
    iconColor: 'text-indigo-700',
    eyebrow: 'text-indigo-700/90',
    value: 'text-indigo-950',
    badge: 'bg-indigo-100 text-indigo-700',
    progress: 'bg-indigo-500',
  },
  cyan: {
    surface: 'border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-cyan-100/70 shadow-sm',
    mutedSurface: 'border-cyan-100 bg-cyan-50/80',
    iconWrap: 'bg-cyan-100',
    iconColor: 'text-cyan-700',
    eyebrow: 'text-cyan-700/90',
    value: 'text-cyan-950',
    badge: 'bg-cyan-100 text-cyan-700',
    progress: 'bg-cyan-500',
  },
};