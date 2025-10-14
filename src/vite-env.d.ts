/// <reference types="vite/client" />

// Add type declaration for the PWA virtual module
declare module 'virtual:pwa-register' {
  interface RegisterSWOptions {
    immediate?: boolean
    onNeedRefresh?: () => void
    onOfflineReady?: () => void
  }
  export function registerSW(options?: RegisterSWOptions): void
}
