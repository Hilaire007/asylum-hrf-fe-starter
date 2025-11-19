import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { ProvideAppContext } from './context/AppContext.jsx';
import { Auth0Provider } from '@auth0/auth0-react';

const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const AUTH_CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID;

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Wrap ProvideAppContext with the Auth Provider from Auth0
 * - Add your credentials from Auth0 to a .env file (AUTH_DOMAIN, AUTH_CLIENT_ID)
 * - Set the domain, clientId, and authorizationParams
 */
createRoot(document.getElementById('root')).render(
  <Auth0Provider domain={AUTH_DOMAIN} clientId={AUTH_CLIENT_ID} authorizationParams={{ redirect_uri: window.location.origin }}>
    <ProvideAppContext>
      <App />
    </ProvideAppContext>
  </Auth0Provider>
);
