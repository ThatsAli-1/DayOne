import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";

export default function RegisterCard() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-3xl p-16">
      <CardHeader className="space-y-4 py-10 overflow-hidden">
        <CardTitle className="text-5xl">Register</CardTitle>
        <CardDescription className="text-2xl">
          Create your account to get started
        </CardDescription>
      </CardHeader>
      <form name="registerForm" id="registerForm">
        <CardContent className="pb-10">
          <div className="flex flex-col gap-4">
            <Label htmlFor="fullName" className="text-xl">
              Full Name
            </Label>
            <Input
              type="text"
              required
              name="fullName"
              placeholder="Enter your full name"
              className="h-12"
            />

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
          <div className="flex gap-2 items-center">
            <Checkbox name="terms-checkbox-invalid" /*aria-invalid}*/ /> 
            <Label className="text-xl">Accept terms and conditions</Label>
          </div>

          <Button
            type="submit"
            className="w-full text-xl h-12 bg-primary text-primary-foreground"
          >
            Create Account
          </Button>

          <Label className="text-muted-foreground self-center text-lg gap-4">
            Already have an account?{" "}
            <Link href="/sign-in" className="text-accent-foreground hover:underline">
              Sign in
            </Link>
          </Label>
        </CardFooter>
      </form>
    </Card>
    </div>
  );
}
