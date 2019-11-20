export const getHeaderWithToken = (token) => {
  return {
    headers: { Authorization: `Bearer ${token}` },
  }
}

export default getHeaderWithToken