/**
 * Format a number to exactly 2 decimal places
 * @param value - The number or string to format
 * @returns Formatted string with 2 decimal places
 */
export function formatNumber(value: number | string | undefined | null): string {
  if (value === undefined || value === null) return "0.00";
  
  const num = typeof value === "string" ? parseFloat(value) : value;
  
  if (isNaN(num)) return "0.00";
  
  return num.toFixed(2);
}

/**
 * Format a percentage value to exactly 2 decimal places with % suffix
 * @param value - The number or string to format
 * @returns Formatted string with 2 decimal places and % suffix
 */
export function formatPercent(value: number | string | undefined | null): string {
  return `${formatNumber(value)}%`;
}
