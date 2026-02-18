import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <>
      <Button>
        <Link href="/sign-up">Register Now</Link>
      </Button>
      <Button>
        <Link href="/sign-in">Login Now</Link>
      </Button>
    </>
  );
}
