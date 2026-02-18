import { BrandingSide } from "@/components/BrandingSide";
import LoginCard from "@/components/LoginCard";

export default function SignInPage() {
    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row ">
      <div className="w-full lg:basis-[65%]">
        <BrandingSide />
      </div>

      <div className="w-full lg:basis-[35%]">
        <LoginCard />
      </div>
    </div>
    )
}