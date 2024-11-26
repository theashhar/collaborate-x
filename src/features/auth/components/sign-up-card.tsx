import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { FcGoogle } from "react-icons/fc";

export const SignUpCard = () => {
    return(
        <Card className="w-[90vw] h-full md:w-[486px] border-none shadow-none" >
            <CardHeader className="flex items-center justify-center text-center px-6">
                <CardTitle className="text-2xl">Sign Up!</CardTitle>
                <CardDescription>By Sign Up you agree to our policies</CardDescription>
            </CardHeader>
            <Separator className="w-auto mx-6 mb-2"/>
            <CardContent className="p-6" >
                <form className="space-y-4">
                    <Input
                        required
                        type="text"
                        onChange={() => {}}
                        placeholder="Enter your name"
                        disabled={false}
                    />
                    <Input
                        required
                        type="email"
                        onChange={() => {}}
                        placeholder="Enter email address"
                        disabled={false}
                    />
                    <Input
                        required
                        type="password"
                        onChange={() => {}}
                        placeholder="Enter password"
                        disabled={false}
                        min={8}
                        max={256}
                    />
                    <Button disabled={false} size='lg' className="w-full" >Login</Button>
                </form>
            </CardContent>
            <CardContent className="p-6" >                
                <Button disabled={false} size='lg' className="w-full" variant="secondary">
                    <FcGoogle />
                    Login with Google
                </Button>
            </CardContent>
        </Card>
    )
}