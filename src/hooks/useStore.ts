import useStores from "./useStores";

const useStore = (id?: number) => {
  const { data: Stores } = useStores();
  return Stores?.results.find((g) => g.id === id);
};

export default useStore;
