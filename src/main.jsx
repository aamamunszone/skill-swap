import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import { RouterProvider } from 'react-router/dom';
import { router } from './routes/Routes';
import AuthProvider from './providers/AuthProvider';
import SkillsProvider from './providers/SkillsProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <SkillsProvider>
        <RouterProvider router={router} />
      </SkillsProvider>
    </AuthProvider>
  </StrictMode>
);
