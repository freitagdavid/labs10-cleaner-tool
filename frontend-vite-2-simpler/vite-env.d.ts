/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_FIREBASE_STORAGE_BUCKET: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}