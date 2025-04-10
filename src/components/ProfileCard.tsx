import Image from "next/image";

type ProfileCardProps = {
  name: string;
  title: string;
  imageSrc: string;
};

export default function ProfileCard({
  name,
  title,
  imageSrc,
}: ProfileCardProps) {
  return (
    <div className="flex flex-col items-center text-center rounded-xl overflow-hidden py-4 bg-transparent max-w-[240px]">
      <div className="w-full h-auto rounded-lg overflow-hidden mb-4">
        <Image
          src={imageSrc}
          alt={name}
          width={300}
          height={300}
          className="rounded-lg object-cover"
        />
      </div>
      <h4 className="font-semibold text-sm ">{name}</h4>
      <p className="text-xs text-gray-400">{title}</p>
    </div>
  );
}
