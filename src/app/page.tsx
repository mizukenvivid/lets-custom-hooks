import Link from "next/link";

import { paths } from "@/constants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-left text-6xl font-bold">色んなReact Custom Hooksを試す</h1>
        <hr className=" w-full border-gray-200" />
        <ul>
          {paths.map(({ path, label }, index) => (
            <li className="mt-4 list-inside list-disc text-left text-lg font-bold" key={index}>
              <Link
                className="text-left text-2xl font-bold text-blue-500 hover:text-blue-800"
                href={path}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
