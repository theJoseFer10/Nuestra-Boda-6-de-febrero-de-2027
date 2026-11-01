import { cn } from "cn"

export function OrnementoFlores({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn("block bg-primary", className)}
      style={{
        maskImage: "url(/flores.svg)",
        WebkitMaskImage: "url(/flores.svg)",
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  )
}

export function SiluetaNovia({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 80 120"
      className={cn("fill-current", className)}
    >
      <path
        d="M40 11C24 11 13 25 13 42c0 11 4 19 10 25l-3-19c0-14 8-24 20-24s20 10 20 24l-3 19c6-6 10-14 10-25C67 25 56 11 40 11Z"
        fillOpacity={0.55}
      />
      <circle cx="52" cy="18" r="5" />
      <rect x="35" y="38" width="10" height="10" rx="3" />
      <circle cx="40" cy="30" r="12" />
      <path d="M40 44c-9 0-17 6-21 16L10 112c-1 4 2 7 6 7h48c4 0 7-3 6-7L61 60c-4-10-12-16-21-16Z" />
    </svg>
  )
}

export function SiluetaNovio({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 80 120"
      className={cn("fill-current", className)}
    >
      <rect x="35" y="38" width="10" height="10" rx="3" />
      <circle cx="40" cy="30" r="12" />
      <path
        fillRule="evenodd"
        d="M40 44c-11 0-20 7-23 19L10 112c-1 4 2 7 6 7h48c4 0 7-3 6-7L63 63c-3-12-12-19-23-19Zm-6 2c2 6 4 12 6 20 2-8 4-14 6-20Z"
      />
      <path d="M34 46l6 4 6-4v6l-6 4-6-4z" />
    </svg>
  )
}

export function EsquinasRombo({ className }: { className?: string }) {
  const base =
    "pointer-events-none absolute size-2.5 rotate-45 border border-primary bg-background"

  return (
    <>
      <span aria-hidden className={cn(base, "-top-[5px] -left-[5px]", className)} />
      <span aria-hidden className={cn(base, "-top-[5px] -right-[5px]", className)} />
      <span aria-hidden className={cn(base, "-bottom-[5px] -left-[5px]", className)} />
      <span aria-hidden className={cn(base, "-bottom-[5px] -right-[5px]", className)} />
    </>
  )
}
