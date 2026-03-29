export const ACCOUNT_COLORS = [
  '#10b981', // green-500
  '#06b6d4', // cyan-500
  '#f97316', // orange-500
  '#ef4444', // red-500
  '#8b5cf6', // purple-500
  '#3b82f6', // blue-500
];

export const SIDEBAR_BG = '#0f1210';

export function formatCurrency(value: number | null | undefined) {
  if (value == null) return 'R$ 0,00';
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

export function formatDayLabel(isoDate: string) {
  try {
    const d = new Date(isoDate);
    return d.toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short' });
  } catch (e) {
    return isoDate;
  }
}
