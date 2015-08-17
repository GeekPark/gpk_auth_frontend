export const LOGIN = 'LOGIN';
export function loginUser(user) {
  return {
    type: LOGIN,
    user: user
  };
}

export const SWITCH_PANEL = 'SWITCH_PANEL';
export const switchPanel = panel => ({ type: SWITCH_PANEL, nowPanel: panel });
