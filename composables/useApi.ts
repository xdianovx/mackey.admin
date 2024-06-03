export const useApi = async (path: any, options: any = {}) => {
  const { token } = useAuth();

  options.baseURL = "http://45.135.234.37:80/api/v1";
  options.headers = {
    ...options.headers,
    Authorization: token.value,
  };

  return await useFetch(path, options);
};
