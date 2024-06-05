export const useGetFileExt = (filename: any) => {
  return filename.split(".").pop();
};
