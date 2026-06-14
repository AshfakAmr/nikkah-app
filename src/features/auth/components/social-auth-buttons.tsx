import { cn } from "@/lib/utils";

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        d="M17.64 9.2045C17.64 8.5665 17.5827 7.9525 17.4764 7.3635H9V10.845H13.8436C13.635 11.97 13.0009 12.923 12.0477 13.561V15.8195H14.9564C16.6582 14.2525 17.64 11.9455 17.64 9.2045Z"
        fill="#4285F4"
      />
      <path
        d="M9 18C11.43 18 13.4673 17.1945 14.9564 15.8195L12.0477 13.561C11.2418 14.1015 10.2109 14.4205 9 14.4205C6.65591 14.4205 4.67182 12.837 3.96409 10.71H0.957275V13.0415C2.43818 15.983 5.48182 18 9 18Z"
        fill="#34A853"
      />
      <path
        d="M3.96409 10.71C3.78409 10.17 3.68182 9.5935 3.68182 9C3.68182 8.4065 3.78409 7.83 3.96409 7.29V4.9585H0.957275C0.347727 6.1735 0 7.5475 0 9C0 10.4525 0.347727 11.8265 0.957275 13.0415L3.96409 10.71Z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.5795C10.3214 3.5795 11.5077 4.0335 12.4405 4.9255L15.0218 2.3445C13.4632 0.891 11.4259 0 9 0C5.48182 0 2.43818 2.017 0.957275 4.9585L3.96409 7.29C4.67182 5.163 6.65591 3.5795 9 3.5795Z"
        fill="#EA4335"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="18" viewBox="0 0 16 18" fill="currentColor" aria-hidden="true">
      <path d="M13.2 9.52c-.02-2.17 1.77-3.21 1.85-3.27-1.01-1.48-2.58-1.68-3.14-1.7-1.34-.14-2.62.79-3.3.79-.68 0-1.73-.77-2.85-.75-1.47.02-2.82.85-3.57 2.16-1.52 2.64-.39 6.54 1.09 8.68.72 1.04 1.58 2.21 2.71 2.17 1.09-.04 1.5-.7 2.82-.7 1.32 0 1.69.7 2.84.68 1.17-.02 1.92-1.06 2.63-2.1.83-1.21 1.17-2.38 1.19-2.44-.03-.01-2.28-.87-2.3-3.45zm-2.16-6.35c.6-.73 1-1.74.89-2.75-.86.04-1.9.57-2.52 1.3-.56.65-1.05 1.69-.92 2.69.97.08 1.96-.49 2.55-1.24z" />
    </svg>
  );
}

type SocialAuthButtonsProps = {
  googleLabel: string;
  appleLabel: string;
  className?: string;
};

export function SocialAuthButtons({
  googleLabel,
  appleLabel,
  className,
}: SocialAuthButtonsProps) {
  return (
    <div className={cn("flex gap-3", className)}>
      <button
        type="button"
        className={cn(
          "inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-pill border border-border bg-surface-white",
          "text-[10px] font-bold tracking-[0.14em] text-text-primary uppercase transition-colors hover:bg-surface-gray",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        )}
      >
        <GoogleIcon />
        {googleLabel}
      </button>
      <button
        type="button"
        className={cn(
          "inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-pill border border-border bg-surface-white",
          "text-[10px] font-bold tracking-[0.14em] text-text-primary uppercase transition-colors hover:bg-surface-gray",
          "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        )}
      >
        <AppleIcon />
        {appleLabel}
      </button>
    </div>
  );
}
