export const AI_CONFIG = {
  MAX_TOKENS: 1000,
  RATE_LIMIT: 10,
  REQUEST_TIMEOUT: 5000,
  MAX_RETRIES: 3,
  RETRY_DELAY: 1000
};

export const SKILLS = [
  'react',
  'javascript',
  'typescript',
  'node.js',
  'python',
  'java',
  'c++',
  'aws',
  'docker',
  'kubernetes',
  'sql',
  'mongodb',
  'redis',
  'graphql',
  'rest'
] as const;

export const ROLES = [
  'frontend developer',
  'backend developer',
  'full stack developer',
  'devops engineer',
  'data scientist',
  'product manager',
  'ui/ux designer',
  'software architect',
  'tech lead'
] as const;

export const BLOCKED_WORDS = [
  'password',
  'secret',
  'token',
  'key',
  'credential',
  'social security',
  'credit card',
  'private'
] as const;

export const RESPONSE_TEMPLATES = {
  ERROR: 'An error occurred. Please try again later.',
  INVALID_INPUT: 'Invalid input. Please try again.',
  RATE_LIMIT: 'Rate limit exceeded. Please try again later.',
  TIMEOUT: 'Request timed out. Please try again.'
} as const;