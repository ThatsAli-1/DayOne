import { BrandingSide } from "@/components/BrandingSide";
import MobileIcon from "@/components/mobileIcon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen">
      {/* Branding Side */}
      <div className="lg:w-[60%] shrink-0">
        <div className="hidden lg:block h-screen">
          <BrandingSide />
        </div>
        <div className="lg:hidden">
          <MobileIcon />
        </div>
      </div>

      {/* Form Side */}
      <div className="lg:w-[40%] flex-1 lg:h-full w-full bg-background">
        <div className="flex items-center justify-center h-full w-full px-4">
          <Card className="w-full max-w-md p-6 ">
            <CardHeader className="pt-8 pb-6">
              <CardTitle className="text-4xl font-bold tracking-tight">Login</CardTitle>
              <CardDescription className="text-base mt-2">
                Welcome back to DayOne
              </CardDescription>
            </CardHeader>

            <form action="">
              <CardContent className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    className="h-12"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    placeholder="Enter your password"
                    className="h-12"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox id="remember" name="remember" />
                    <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                      Remember me
                    </label>
                  </div>
                  <p className="text-sm text-primary cursor-pointer hover:underline">
                    Forgot password?
                  </p>
                </div>
              </CardContent>

              <CardFooter className="flex flex-col gap-4 pt-4">
                <Button
                  type="submit"
                  className="w-full h-12 bg-primary text-primary-foreground"
                >
                  Sign In
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  Don&apos;t have an account?{" "}
                  <Link href="/sign-up" className="text-primary hover:underline">
                    Sign Up
                  </Link>
                </p>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}

