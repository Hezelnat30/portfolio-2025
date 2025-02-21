const useDebounce = () => {
  const debounce = (fn: Function, ms: number) => {
    let timer: NodeJS.Timeout;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), ms);
    };
  };
  return { debounce };
};

export default useDebounce;
