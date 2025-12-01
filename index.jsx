import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

/**
 * TODO: Ticket 3:
 * Implement authentication using Auth0:
 * - Get the user data from Auth0
 * - Create and style the component
 * - Display the data
 * - Make this page a protected Route
 */
const Profile = () => {
  // TODO: Replace these with functionality from Auth0
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div className='text-center p-5 text-lg'>Loading...</div>;
  }

  if (!isAuthenticated) {
    return (
      <div className='flex flex-col items-center justify-center p-5'>
        <h2 className='text-lg font-semibold mb-2'>Not Logged In</h2>
        <p className='text-grey-500'>Please log in to view your profile.</p>
      </div>
    );
  }
  return (
    <>
      <div className='w-[420px] md:w-[400px] lg:w-[480px] rounded shadow-md object-cover'>
        <h1 className='text-3xl font-serif font-bold mb-6 text-[#6e6a57]'>Profile Page</h1>

        <div className='bg-white shadow-md rounded-lg p-6 max-w-md w-full text-center'>
          {user.picture && <img src={user.picture} alt={user.name} className='w-24 h-24 rounded-full mx-auto mb-4 shadow-sm' />}
          <h2 className='text-2xl font-medium mb-2'>{user.name}</h2>
          <p className='text-gray-600 text-sm mb-4'>{user.email}</p>

          <div className='border-t pt-4 text-sm text-gray-500'>
            <p>Nickname: {user.nickname}</p>
            <p>Updated: {new Date(user.updated_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
