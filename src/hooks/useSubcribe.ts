import { subscribe } from "@/data/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useSubscribe = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: subscribe,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user-profile"],
      });
    },
  });
};
