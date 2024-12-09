import { client } from "@/lib/rpc";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InferRequestType, InferResponseType } from "hono";
// import { useRouter } from "next/navigation";

type RequestType = InferRequestType<typeof client.api.auth.logout['$post']>
type ResponseType = InferResponseType<typeof client.api.auth.logout['$post']>;

export const useLogout =  () => {
    // const router = useRouter()

    const queryClient = useQueryClient()
    const mutation = useMutation<
    ResponseType,
    Error,
    RequestType
    >({
        mutationFn: async () => {
            const response = await client.api.auth.logout['$post']()
            return await response.json()
        },
        onSuccess: () => {
            // router.refresh()
            queryClient.invalidateQueries({ queryKey: ['current']})
        }
    })
    return mutation
} 
