export const LOGIN = 'LOGIN';
export function loginUser(user) {
  return {
    type: LOGIN,
    user: user
  };
}
