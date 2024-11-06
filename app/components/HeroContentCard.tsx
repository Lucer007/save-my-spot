import Image from "next/image";

export function HeroContentCard({
  Icon,
  Title,
  Description,
}: {
  Icon: string;
  Title: string;
  Description: string;
}) {
  return (
    <div className="flex flex-col mx-4 bg-white text-black p-5 w-64 mb-24">
      <Image src={Icon} alt="Card Icon" className="size-10" />
      <h1 className="font-bold">{Title}</h1>
      <p className="text-gray-500 text-sm">{Description}</p>
    </div>
  );
}
