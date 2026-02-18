import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export default function LoginCard() {
    return (
        <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-3xl p-16">
      <CardHeader className="space-y-4 py-10 overflow-hidden">
        <CardTitle className="text-5xl">Login</CardTitle>
        <CardDescription className="text-2xl text-balance ">
          Welcome back — sign in to continue
        </CardDescription>
      </CardHeader>
      <form name="registerForm" id="registerForm">
        <CardContent className="pb-10">
          <div className="flex flex-col gap-4">

            <Label className="text-xl" htmlFor="email">
              Email
            </Label>
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="h-12"
            />

            <Label className="text-xl" htmlFor="password">
              Password
            </Label>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="h-12"
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col gap-4 items-start">

          <Button
            type="submit"
            className="w-full text-xl h-12 bg-primary text-primary-foreground"
          >
            Create Account
          </Button>

          <Label className="text-muted-foreground self-center text-lg gap-4 ">
            Don’t have an account?{" "}
            <Link href="/sign-up" className="text-accent-foreground hover:underline">
              Sign Up
            </Link>
          </Label>
        </CardFooter>
      </form>
    </Card>
    </div>
    );
}