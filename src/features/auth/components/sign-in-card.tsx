import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { loginSchema } from "../schemas";
import { useLogin } from "../api/use-login";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export const SignInCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, isPending, isError, error } = useLogin();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (loginData: z.infer<typeof loginSchema>) => {
    mutate({ json: loginData });
  };

  return (
    <Card className="w-[90vw] h-full md:w-[486px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center px-6">
        <CardTitle className="text-2xl">Welcome Back!</CardTitle>
      </CardHeader>
      <Separator className="w-auto mx-6 mb-2" />
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input {...field} placeholder="Enter email address" disabled={false} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter password"
                        disabled={false}
                      />
                      <div
                        className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isPending} size="lg" className="w-full">
              Login
            </Button>
          </form>
        </Form>
        {/* Display error message if there's an error */}
        {isError && (
          <div className="mt-4 text-red-500">
            An error occurred: {error?.message || "Unknown error"}
          </div>
        )}
      </CardContent>
      <CardContent className="p-6">
        <Button disabled={false} size="lg" className="w-full" variant="secondary">
          <FcGoogle />
          Login with Google
        </Button>
      </CardContent>
    </Card>
  );
};
