import { featuresContent } from "@/lib/data/features.data";
import Image from "next/image";

export default function Features() {
  return (
    <section className="w-[90%] mx-auto flex flex-col items-center gap-5 py-20">
      <h1 className="text-5xl font-bold text-center">
        Why teams trust us
      </h1>

      <p className="text-center max-w-3xl text-gray-600">
        Our customers rely on EmergX for recruiting, seamless scheduling,
        and modern interviewing with AI-powered insights that transform
        their hiring process.
      </p>

      <div className="grid grid-cols-3 gap-6 w-full">
        {featuresContent.map(({ title, description, src }) => (
          <div
            key={title}
            className="flex flex-col gap-3 p-6 rounded-2xl border border-transparent hover:border-gray-800  text-white"
          >
            <h3 className="text-xl font-semibold">{title}</h3>

            <p className="text-gray-300 text-sm">{description}</p>

            <Image
              src={src}
              alt={title}
              width={100}
              height={100}
              className="w-full h-auto rounded-xl"
            />
          </div>
        ))}
      </div>
    </section>
  );
}