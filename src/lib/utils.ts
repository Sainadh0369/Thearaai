import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const delay = (ms: number): Promise<void> => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const formatRelativeTime = (timestamp: string): string => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  
  if (days > 0) return `${days} days ago`;
  if (hours > 0) return `${hours} hours ago`;
  if (minutes > 0) return `${minutes} minutes ago`;
  return 'just now';
};

export const generateId = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

export const sanitizeInput = (input: string): string => {
  return input
    .trim()
    .replace(/[<>]/g, '')
    .slice(0, 1000);
};

export const calculateMatch = (required: string[], provided: string[]): number => {
  const normalizedRequired = required.map(s => s.toLowerCase());
  const normalizedProvided = provided.map(s => s.toLowerCase());
  
  const matches = normalizedRequired.filter(r => 
    normalizedProvided.some(p => p.includes(r))
  ).length;
  
  return Math.round((matches / normalizedRequired.length) * 100);
};

export const extractKeywords = (text: string): string[] => {
  const commonWords = new Set(['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to']);
  return text
    .toLowerCase()
    .split(/\W+/)
    .filter(word => 
      word.length > 2 && !commonWords.has(word)
    );
};