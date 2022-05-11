import Api from './api';

export const getRobots = async (query) => {
  if (!query) {
    return await Api.get('/robots')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return [];
    })
  } else {
    return await Api.get(`/search/?query=${query}`)
      .then((response) => {
        return response.data
      }
      )
      .catch((error) => {
        return [];
      })
  }
}
