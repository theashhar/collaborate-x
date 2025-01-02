import { client } from "@/lib/rpc";
import { useMutation } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

type RequestType = InferRequestType<typeof client.api.auth.login['$post']>;
type ResponseType = InferResponseType<typeof client.api.auth.login['$post']>;

export const useLogin = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const refreshState = () => {
    queryClient.invalidateQueries({ queryKey: ['current'] }); // Use object with `queryKey`
  };

  const mutation = useMutation<ResponseType, Error, RequestType>({
    mutationFn: async ({ json }) => {
      const response = await client.api.auth.login['$post']({ json });
      return await response.json();
    },
    onSuccess: () => {
      refreshState(); // Invalidate 'current' query to reflect updated state
      router.refresh(); // Refresh the page to ensure UI consistency
      router.push("/dashboard");
    },
  });

  return mutation;
};

