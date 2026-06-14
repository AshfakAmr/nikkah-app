type ServerEnvKey = "API_SECRET_KEY";

function getEnv(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;

  if (value === undefined || value === "") {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

function getPublicEnv(key: string, fallback?: string): string {
  const value = process.env[key] ?? fallback;

  if (value === undefined || value === "") {
    throw new Error(`Missing required public environment variable: ${key}`);
  }

  return value;
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? "development",
  isDevelopment: process.env.NODE_ENV === "development",
  isProduction: process.env.NODE_ENV === "production",

  api: {
    baseUrl: getPublicEnv("NEXT_PUBLIC_API_BASE_URL", "http://localhost:3001/api"),
    timeoutMs: Number(process.env.NEXT_PUBLIC_API_TIMEOUT_MS ?? "30000"),
  },

  app: {
    url: getPublicEnv("NEXT_PUBLIC_APP_URL", "http://localhost:3000"),
    name: getPublicEnv("NEXT_PUBLIC_APP_NAME", "Nikkah.com.au"),
  },
} as const;

export function assertServerEnv(key: ServerEnvKey): string {
  return getEnv(key);
}
