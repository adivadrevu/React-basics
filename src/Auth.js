export const isAuthenticated = () => {
    return !!localStorage.getItem('authUser');
  };
  
  export const authenticateUser = (username) => {
    localStorage.setItem('authUser', username);
  };
  
  export const signOut = () => {
    localStorage.removeItem('authUser');
  };
  