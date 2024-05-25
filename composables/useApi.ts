export const useApi = (path: any, options: any) => {
  const { token } = useAuth();

  options.baseURL = "https://149.154.68.150:8003/api/v1";
  options.headers = {
    ...options.headers,
    Authorization: token.value,
  };

  return useFetch(path, options);
};
