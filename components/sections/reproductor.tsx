"use client"

import { useEffect, useRef } from "react"

const VIDEO_ID = "pBTp2RWxq-s"
const FOTO_ANIMATION = "foto-desvanecer"

export default function Reproductor() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const foto = document.querySelector<HTMLElement>(".animar-foto")
    const iframe = iframeRef.current
    if (!foto || !iframe) return

    let animationFinished = false
    let iframeReady = false
    let removeGestureFallback = () => {}

    const play = () => {
      if (!iframeReady) return
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func: "playVideo", args: [] }),
        "*"
      )
    }

    const tryPlay = () => {
      if (animationFinished && iframeReady) play()
    }

    const handleLoad = () => {
      iframeReady = true
      tryPlay()
    }

    const removeGestureListeners = () => {
      window.removeEventListener("pointerdown", handleGesture)
      window.removeEventListener("keydown", handleGesture)
    }

    const handleGesture = () => {
      play()
      removeGestureListeners()
    }

    const handleAnimationEnd = (event: AnimationEvent) => {
      if (event.animationName !== FOTO_ANIMATION) return
      animationFinished = true
      tryPlay()

      window.addEventListener("pointerdown", handleGesture)
      window.addEventListener("keydown", handleGesture)
      removeGestureFallback = removeGestureListeners
    }

    iframe.addEventListener("load", handleLoad)
    foto.addEventListener("animationend", handleAnimationEnd)

    if (iframe.contentDocument?.readyState === "complete") {
      iframeReady = true
    }

    return () => {
      iframe.removeEventListener("load", handleLoad)
      foto.removeEventListener("animationend", handleAnimationEnd)
      removeGestureFallback()
    }
  }, [])

  return (
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
  )
}
