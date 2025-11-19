import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

export const Auth0ProviderWithConfig = ({ children }) => {
  const navigate = useNavigate();
  const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
  const AUTH_CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID;

  const onRedirectCallback = appState => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
