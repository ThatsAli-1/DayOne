import { BrandingSide } from "@/components/BrandingSide";
import RegisterCard from "@/components/RegisterCard";

export default function SignUpPage() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row ">
      <div className="w-full lg:basis-[65%]">
        <BrandingSide />
      </div>

      <div className="w-full lg:basis-[35%]">
        <RegisterCard />
      </div>
    </div>
  );
}
