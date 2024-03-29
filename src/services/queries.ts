import { useQueries, useQuery } from "@tanstack/react-query";
import { getTodosIds, getTodo } from "./api";

export function useTodosIds() {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodosIds,
  });
}

export function useTodos(ids: (number | undefined)[] | undefined) {
  return useQueries({
    queries: (ids ?? [])?.map((id) => {
      return {
        queryKey: ["todos", id],
        queryFn: () => getTodo(id!),
      };
    }),
  });
}
