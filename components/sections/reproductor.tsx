"use client"

import { useEffect, useRef, useState } from "react"
import { Pause, Play } from "lucide-react"

const VIDEO_ID = "pBTp2RWxq-s"
const FOTO_ANIMATION = "foto-desvanecer"

export default function Reproductor() {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const enviarComandoRef = useRef<(func: "playVideo" | "pauseVideo") => void>(() => {})
  const detenerGestoRef = useRef<() => void>(() => {})
  const controlUsadoRef = useRef(false)
  const [estaSonando, setEstaSonando] = useState(false)

  useEffect(() => {
    const foto = document.querySelector<HTMLElement>(".animar-foto")
    const iframe = iframeRef.current
    if (!foto || !iframe) return

    let animationFinished = false
    let iframeReady = false
    let removeGestureFallback = () => {}

    const enviarComando = (func: "playVideo" | "pauseVideo") => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func, args: [] }),
        "*"
      )
    }
    enviarComandoRef.current = enviarComando

    const play = () => enviarComando("playVideo")

    const tryPlay = () => {
      if (animationFinished && iframeReady) play()
    }

    const handleLoad = () => {
      iframeReady = true
      tryPlay()
    }

    const handleGesture = (event: Event) => {
      if (event.target instanceof Element && event.target.closest("[data-control-musica]")) return
      play()
      removeGestureListeners()
    }

    const removeGestureListeners = () => {
      window.removeEventListener("pointerdown", handleGesture)
      window.removeEventListener("keydown", handleGesture)
    }
    detenerGestoRef.current = removeGestureListeners

    const handleAnimationEnd = (event: AnimationEvent) => {
      if (event.animationName !== FOTO_ANIMATION) return
      animationFinished = true
      tryPlay()

      if (!controlUsadoRef.current) {
        window.addEventListener("pointerdown", handleGesture)
        window.addEventListener("keydown", handleGesture)
        removeGestureFallback = removeGestureListeners
      }
    }

    const handleMessage = (event: MessageEvent) => {
      if (event.source !== iframe.contentWindow) return
      let data: { event?: string; info?: { playerState?: number } }
      try {
        data = JSON.parse(event.data)
      } catch {
        return
      }
      if (data.event === "infoDelivery" && typeof data.info?.playerState === "number") {
        setEstaSonando(data.info.playerState === 1)
      }
    }

    iframe.addEventListener("load", handleLoad)
    foto.addEventListener("animationend", handleAnimationEnd)
    window.addEventListener("message", handleMessage)

    if (iframe.contentDocument?.readyState === "complete") {
      iframeReady = true
    }

    return () => {
      iframe.removeEventListener("load", handleLoad)
      foto.removeEventListener("animationend", handleAnimationEnd)
      window.removeEventListener("message", handleMessage)
      removeGestureFallback()
      enviarComandoRef.current = () => {}
      detenerGestoRef.current = () => {}
    }
  }, [])

  const alternarMusica = () => {
    controlUsadoRef.current = true
    detenerGestoRef.current()
    enviarComandoRef.current(estaSonando ? "pauseVideo" : "playVideo")
    setEstaSonando(!estaSonando)
  }

  return (
    <>
      <button
        type="button"
        data-control-musica
        onClick={alternarMusica}
        aria-label={estaSonando ? "Pausar música" : "Reproducir música"}
        aria-pressed={estaSonando}
        title={estaSonando ? "Pausar música" : "Reproducir música"}
        className="fixed right-6 bottom-6 z-50 grid size-12 place-items-center rounded-full border border-primary/60 bg-background text-primary shadow-md ring-1 ring-secondary/70 ring-offset-2 ring-offset-background transition-all hover:scale-105 hover:bg-card focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95"
      >
        {estaSonando ? <Pause className="size-5 fill-current" /> : <Play className="size-5 fill-current" />}
      </button>

      <div
        aria-hidden
        className="pointer-events-none fixed bottom-0 left-0 size-px overflow-hidden opacity-0"
      >
        <iframe
          ref={iframeRef}
          title="Canción de la boda"
          src={`https://www.youtube.com/embed/${VIDEO_ID}?enablejsapi=1&autoplay=0&loop=1&playlist=${VIDEO_ID}&controls=0&rel=0&playsinline=1`}
          allow="autoplay; encrypted-media"
          width="1"
          height="1"
          tabIndex={-1}
        />
      </div>
    </>
  )
}
