export const apiUrls = {
  SIGNIN: (data, params) => ({
    method: 'post',
    url: '/api/user/signin',
    data
  }),
  SIGNUP: (data, params) => ({
    method: 'post',
    url: '/api/user/signup',
    data
  })
};