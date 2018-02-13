export const messages = {
  REQUEST_INVALID: (value, type, fieldName) => ({ status: 400, message: `Request ${type} "${fieldName}" is required.`, type: 'REQUEST_INVALID' }),
  SIGNUP_INVALID: { status: 400, message: 'Username, email or mobile is required', type: 'SIGNUP_INVALID' }
};