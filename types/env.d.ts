/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly VITE_APP_NAMESPACE: string
  readonly VITE_APP_STORE_SECURE_KEY: string
  readonly VITE_PORT: string
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
}

export {}
