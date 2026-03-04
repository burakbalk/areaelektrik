import { StrictMode, Suspense } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const rootElement = document.getElementById('root')!;

const app = (
  <StrictMode>
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#ffc107] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    }>
      <App />
    </Suspense>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
