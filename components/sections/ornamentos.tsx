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
      viewBox="0 0 100 200"
      className={cn("fill-current", className)}
    >
      <g
        transform="translate(-10,-4)"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M56 18C45 25 39 40 37 59c-3 28-5 57-3 79 1 9 7 12 12 6 6-8 9-22 10-35 1 15 2 29 7 38 3 6 9 3 9-4 0-20-1-43-4-63-2-17-4-36-12-49Z"
          strokeOpacity={0.7}
        />
        <path
          d="M50 27c-2-6 2-12 8-13 6-1 11 2 12 8 1 3 0 6-1 8-1-5-5-8-10-8-5 0-8 2-9 5Z"
          strokeOpacity={0.9}
        />
        <circle cx="72" cy="27" r="4" strokeOpacity={0.8} />
        <path d="M54 18c3-2 7-2 9 0" strokeOpacity={0.5} />
        <path d="M60 14c-5.4 0-9.2 4.2-9.2 9.8 0 5.8 4 10.4 9.2 10.4s9.2-4.6 9.2-10.4C69.2 18.2 65.4 14 60 14Z" />
        <path
          d="M56 25c1 1 2 1.5 3 1.5M64 25c-1 1-2 1.5-3 1.5M60 27v3"
          strokeOpacity={0.5}
        />
        <path d="M55.5 34 55 41c1.6 1.4 3.3 2 5 2s3.4-.6 5-2l-.5-7" />
        <path
          d="M55 44c-6 1-10.5 4.5-12.5 10-1 3-1.2 6-1 9l3.5 24c4.5-3 10-4.5 15-4.5s10.5 1.5 15 4.5l3.5-24c.2-3 0-6-1-9C75.5 48.5 71 45 65 44c-1.5 2-3.5 3-5 3s-3.5-1-5-3Z"
          fill="currentColor"
          fillOpacity={0.06}
        />
        <path
          d="M55 44c1.5 2.6 3.5 3.8 5 3.8s3.5-1.2 5-3.8"
          strokeOpacity={0.85}
        />
        <path d="M51 58c5 2 13 2 18 0" strokeOpacity={0.45} />
        <path
          d="M44 56c-4 5-5.5 11-4.5 17 1 6 4 11 9 14"
          strokeOpacity={0.9}
        />
        <path
          d="M76 56c4 5 5.5 11 4.5 17-1 6-4 11-9 14"
          strokeOpacity={0.9}
        />
        <path
          d="M48.5 87c1.5 2 3.5 3.5 5.5 4.5M71.5 87c-1.5 2-3.5 3.5-5.5 4.5"
          strokeOpacity={0.75}
        />
        <path
          d="M52 80C53 98 49 117 43 134 37 151 27 172 20 186c-3 7 0 10 7 9 10-1 20-5 28-9 2-1 3 2 5 2s3-3 5-2c8 4 18 8 28 9 7 1 10-2 7-9-7-14-17-35-23-52-6-17-9-36-8-54-4 2-13 2-17 0Z"
          fill="currentColor"
          fillOpacity={0.07}
        />
        <path
          d="M60 82c-1 23-2 48-5 73-1 13-3 25-5 32M60 82c1 23 2 48 5 73 1 13 3 25 5 32"
          strokeOpacity={0.5}
        />
        <path
          d="M55 84c-1 20-4 40-9 58M65 84c1 20 4 40 9 58"
          strokeOpacity={0.3}
        />
        <path
          d="M27 184c12-5 22-10 29-18M93 184c-12-5-22-10-29-18"
          strokeOpacity={0.3}
        />
        <g fill="currentColor" fillOpacity={0.14}>
          <circle cx="57" cy="94" r="4.2" />
          <circle cx="64" cy="93" r="4.6" />
          <circle cx="60" cy="99" r="4.2" />
          <circle cx="54" cy="101" r="3.6" />
          <circle cx="67" cy="100" r="3.6" />
        </g>
        <path
          d="M60 103v9M57 103l-2 8M63 103l2 8"
          strokeOpacity={0.55}
        />
        <path
          d="M56 108c-2-2-4-2-5 0 1 2 3 2 5 0ZM64 108c2-2 4-2 5 0-1 2-3 2-5 0Z"
          strokeOpacity={0.45}
        />
      </g>
    </svg>
  )
}

export function SiluetaNovio({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 200"
      className={cn("fill-current", className)}
    >
      <g
        transform="translate(-10,-4)"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M51 28c-1.5-7 2.5-12 9-12 6.5 0 10.5 5 9 12-1-5-4-8-9-8s-8 3-9 8Z"
          strokeOpacity={0.9}
        />
        <path d="M54 18c3-2 8-2 11 0" strokeOpacity={0.5} />
        <path d="M60 14c-5.4 0-9 4.2-9 9.6 0 6 3.8 10.6 9 10.6s9-4.6 9-10.6c0-5.4-3.6-9.6-9-9.6Z" />
        <path
          d="M56 25c1 1 2 1.5 3 1.5M64 25c-1 1-2 1.5-3 1.5M60 27v3"
          strokeOpacity={0.5}
        />
        <path
          d="M51 24c-1.5 0-2 1.5-1 2.5M69 24c1.5 0 2 1.5 1 2.5"
          strokeOpacity={0.65}
        />
        <path d="M55.5 34 55 41c1.6 1.4 3.3 2 5 2s3.4-.6 5-2l-.5-7" />
        <path
          d="M54 44c-7 1.5-12 5-14 12-1 3.5-1 7-.5 10l3.5 39c.3 3 2 4.5 5 4.5h24c3 0 4.7-1.5 5-4.5l3.5-39c.5-3 .5-6.5-.5-10-2-7-7-10.5-14-12-1.5 2.5-4 4-6.5 4S55.5 46.5 54 44Z"
          fill="currentColor"
          fillOpacity={0.08}
        />
        <path
          d="M54 44c1.5 2.5 4 4 6.5 4s5-1.5 6.5-4c2 1 3.5 2.2 4.5 3.8L60 66l-12-18.2c1-1.6 2.5-2.8 4.5-3.8Z"
          strokeOpacity={0.65}
        />
        <path
          d="M58.5 47.5h3l1.5 5-3 4-3-4 1.5-5Z"
          fill="currentColor"
          fillOpacity={0.2}
        />
        <path
          d="M60 56.5 61.5 64 60 68l-1.5-4 1.5-7.5Z"
          fill="currentColor"
          fillOpacity={0.18}
        />
        <path
          d="M52 44.5 43 57l9 14M68 44.5 77 57l-9 14"
          strokeOpacity={0.8}
        />
        <path
          d="M43 56c-3 4-4.5 8-4.5 13 0 10 2 21 5 30"
          strokeOpacity={0.9}
        />
        <path
          d="M77 56c3 4 4.5 8 4.5 13 0 10-2 21-5 30"
          strokeOpacity={0.9}
        />
        <path
          d="M43.5 99c1 4 1.5 8 1.5 12M76.5 99c-1 4-1.5 8-1.5 12"
          strokeOpacity={0.65}
        />
        <path d="M47 82h6M67 82h6" strokeOpacity={0.45} />
        <circle cx="60" cy="74" r="0.9" fill="currentColor" fillOpacity={0.45} />
        <circle cx="60" cy="80" r="0.9" fill="currentColor" fillOpacity={0.45} />
        <path
          d="M50 104c0 14 .5 28 1 42l.5 38c0 3 1.5 4 3.5 4s2.5-1 2.5-4l1-32h2l1 32c0 3 1.5 4 3.5 4s3.5-1 3.5-4l.5-38c.5-14 1-28 1-42Z"
          fill="currentColor"
          fillOpacity={0.08}
        />
        <path
          d="M60 150v23M55 106c0 16-.5 32-1 48M65 106c0 16 .5 32 1 48"
          strokeOpacity={0.4}
        />
        <path
          d="M49.5 184c-2 2-2 5 0 7h9v-7h-9ZM62.5 184v7h9c2-2 2-5 0-7h-9Z"
          fill="currentColor"
          fillOpacity={0.13}
          strokeOpacity={0.75}
        />
      </g>
    </svg>
  )
}

export function Vela({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 200"
      className={cn("fill-current", className)}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M50 20c-5 7-8 13-8 18 0 5 3.6 9 8 9s8-4 8-9c0-5-3-11-8-18Z"
          fill="currentColor"
          fillOpacity={0.08}
          strokeOpacity={0.9}
        />
        <path
          d="M50 31c-2.4 3.6-3.6 6.4-3.6 9a3.6 3.6 0 0 0 7.2 0c0-2.6-1.2-5.4-3.6-9Z"
          fill="currentColor"
          fillOpacity={0.2}
          strokeOpacity={0.7}
        />
        <path d="M50 47v9" strokeOpacity={0.6} />
        <path
          d="M35 58c0-2 6.8-3.5 15-3.5s15 1.5 15 3.5v91c-9 3-21 3-30 0V58Z"
          fill="currentColor"
          fillOpacity={0.07}
          strokeOpacity={0.85}
        />
        <path
          d="M35 58c0 2.4 6.8 4.2 15 4.2s15-1.8 15-4.2"
          strokeOpacity={0.7}
        />
        <path
          d="M41 60c.5 7-3 10-3 17M59 60c-.5 7 3 10 3 17"
          strokeOpacity={0.45}
        />
        <path d="M40 149v-72M60 149v-72" strokeOpacity={0.3} />
        <path
          d="M50 91c-3-4-8.5-2.4-8.5 2.6 0 4.8 8.5 9.4 8.5 9.4s8.5-4.6 8.5-9.4c0-5-5.5-6.6-8.5-2.6Z"
          fill="currentColor"
          fillOpacity={0.12}
          strokeOpacity={0.6}
        />
        <path d="M50 103v9M45 112h10" strokeOpacity={0.4} />
        <path
          d="M33 149c5 2 29 2 34 0l-3 9H36l-3-9Z"
          fill="currentColor"
          fillOpacity={0.1}
          strokeOpacity={0.8}
        />
        <path
          d="M26 158c0 4.5 10.8 8 24 8s24-3.5 24-8-10.8-8-24-8-24 3.5-24 8Z"
          fill="currentColor"
          fillOpacity={0.07}
          strokeOpacity={0.75}
        />
        <path d="M46 166v13M54 166v13" strokeOpacity={0.6} />
        <path
          d="M38 179h24l4 7H34l4-7Z"
          fill="currentColor"
          fillOpacity={0.12}
          strokeOpacity={0.8}
        />
        <path d="M31 186h38" strokeOpacity={0.5} />
      </g>
    </svg>
  )
}

export function Regalo({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 120"
      className={cn("fill-current", className)}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path
          d="M22 46h56v58c-8 3-48 3-56 0V46Z"
          fill="currentColor"
          fillOpacity={0.07}
          strokeOpacity={0.85}
        />
        <path
          d="M18 38h64v12H18V38Z"
          fill="currentColor"
          fillOpacity={0.1}
          strokeOpacity={0.9}
        />
        <path
          d="M46 50h8v54h-8V50Z"
          fill="currentColor"
          fillOpacity={0.08}
          strokeOpacity={0.7}
        />
        <path d="M50 54v10M50 70v10M50 86v10" strokeOpacity={0.4} />
        <path
          d="M49 37c-7-3-15-8-16-14-1-4 2-7 6-6 6 1 9 10 10 20Z"
          fill="currentColor"
          fillOpacity={0.09}
          strokeOpacity={0.8}
        />
        <path
          d="M51 37c7-3 15-8 16-14 1-4-2-7-6-6-6 1-9 10-10 20Z"
          fill="currentColor"
          fillOpacity={0.09}
          strokeOpacity={0.8}
        />
        <path
          d="M50 31c-3-3-3-7 0-9 3 2 3 6 0 9Z"
          fill="currentColor"
          fillOpacity={0.16}
          strokeOpacity={0.9}
        />
        <path
          d="M46 37h8l-2 6h-4l-2-6Z"
          fill="currentColor"
          fillOpacity={0.14}
          strokeOpacity={0.75}
        />
        <path
          d="M27 63h12M61 63h12M26 104h48"
          strokeOpacity={0.35}
        />
        <circle
          cx="50"
          cy="76"
          r="4"
          fill="currentColor"
          fillOpacity={0.16}
          strokeOpacity={0.6}
        />
      </g>
    </svg>
  )
}

export function Templo({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 200"
      className={cn("fill-current", className)}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M50 9v13M45 14h10" strokeOpacity={0.8} />
        <path
          d="M36 34 50 22l14 12Z"
          fill="currentColor"
          fillOpacity={0.1}
          strokeOpacity={0.85}
        />
        <path
          d="M38 34h24v30H38V34Z"
          fill="currentColor"
          fillOpacity={0.07}
          strokeOpacity={0.85}
        />
        <path
          d="M44 42a6 6 0 0 1 12 0v9H44v-9Z"
          fill="currentColor"
          fillOpacity={0.12}
          strokeOpacity={0.75}
        />
        <path d="M50 43v4M47 54h6" strokeOpacity={0.5} />
        <path
          d="M18 60 50 40l32 20"
          fill="currentColor"
          fillOpacity={0.08}
          strokeOpacity={0.85}
        />
        <path
          d="M22 60h56v104H22V60Z"
          fill="currentColor"
          fillOpacity={0.06}
          strokeOpacity={0.8}
        />
        <path d="M26 62v100M74 62v100" strokeOpacity={0.3} />
        <path
          d="M30 82c0-4 3-7 7-7s7 3 7 7v18H30V82ZM56 82c0-4 3-7 7-7s7 3 7 7v18H56V82Z"
          fill="currentColor"
          fillOpacity={0.08}
          strokeOpacity={0.6}
        />
        <path d="M37 76v25M63 76v25" strokeOpacity={0.4} />
        <path
          d="M42 164v-31a8 8 0 0 1 16 0v31H42Z"
          fill="currentColor"
          fillOpacity={0.12}
          strokeOpacity={0.8}
        />
        <path d="M50 133v31M44 149h12" strokeOpacity={0.5} />
        <path
          d="M18 164h64v8H18v-8Z"
          fill="currentColor"
          fillOpacity={0.1}
          strokeOpacity={0.8}
        />
        <path
          d="M14 172h72v6H14v-6Z"
          fill="currentColor"
          fillOpacity={0.12}
          strokeOpacity={0.75}
        />
        <path d="M22 178h56" strokeOpacity={0.45} />
      </g>
    </svg>
  )
}

export function SalonEventos({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 140"
      className={cn("fill-current", className)}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 24c12 9 28 9 40 0 12 9 28 9 40 0" strokeOpacity={0.5} />
        <circle cx="30" cy="29" r="1.4" fill="currentColor" fillOpacity={0.3} />
        <circle cx="50" cy="29" r="1.4" fill="currentColor" fillOpacity={0.3} />
        <circle cx="70" cy="29" r="1.4" fill="currentColor" fillOpacity={0.3} />
        <path
          d="M8 40 16 30h68l8 10"
          fill="currentColor"
          fillOpacity={0.08}
          strokeOpacity={0.85}
        />
        <path
          d="M8 40h84v12H8V40Z"
          fill="currentColor"
          fillOpacity={0.1}
          strokeOpacity={0.9}
        />
        <path
          d="M12 52h76v76H12V52Z"
          fill="currentColor"
          fillOpacity={0.06}
          strokeOpacity={0.8}
        />
        <path d="M24 52v76M38 52v76M62 52v76M76 52v76" strokeOpacity={0.3} />
        <path
          d="M40 128V90a10 10 0 0 1 20 0v38H40Z"
          fill="currentColor"
          fillOpacity={0.12}
          strokeOpacity={0.8}
        />
        <path d="M50 80v48" strokeOpacity={0.5} />
        <path
          d="M17 66h9v16h-9V66ZM74 66h9v16h-9V66Z"
          fill="currentColor"
          fillOpacity={0.08}
          strokeOpacity={0.6}
        />
        <path d="M21.5 66v16M78.5 66v16" strokeOpacity={0.4} />
        <path
          d="M6 128h88v6H6v-6Z"
          fill="currentColor"
          fillOpacity={0.1}
          strokeOpacity={0.8}
        />
        <path
          d="M4 134h92v5H4v-5Z"
          fill="currentColor"
          fillOpacity={0.12}
          strokeOpacity={0.75}
        />
      </g>
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
