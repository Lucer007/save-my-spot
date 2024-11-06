import Hero_Bg from "@/public/hero.jpg";
import Image from "next/image";
import { HeroContentCard } from "./HeroContentCard";

export function Hero() {
  return (
    <div className="relative text-white">
      <Image
        src={Hero_Bg}
        alt="Hero Image"
        className="absolute -z-10 bg-blend-darken"
      />

      <div className="flex flex-col justify-center items-center w-96 mx-auto text-center py-24">
        <div className="flex flex-row items-center gap-3">
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-32" />
          <p>Online Parking</p>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 w-32" />
        </div>

        <h4 className="text-3xl font-semibold">
          Best Parking Spaces For Your Vehicles
        </h4>
      </div>

      <div className="flex flex-row items-center justify-center">
        <HeroContentCard
          Icon=""
          Title="Search For Spaces"
          Description="Search for a parking spot from the comfort of your home"
        />

        <HeroContentCard
          Icon=""
          Title="Book Your Space"
          Description="Search for a parking spot from the comfort of your home"
        />

        <HeroContentCard
          Icon=""
          Title="Arrive and Park"
          Description="Search for a parking spot from the comfort of your home"
        />
      </div>
    </div>
  );
}
