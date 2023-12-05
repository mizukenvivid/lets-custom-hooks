"use client";

import Link from "next/link";

import { useWindowSize } from "@/hooks/useWindowSize";

export default function useWindowSizePage() {
  const { width, height } = useWindowSize();

  return (
    <main className="p-4">
      <Link className="text-left text-2xl font-bold text-blue-500 hover:text-blue-800" href="/">
        {"<< TOPに戻る"}
      </Link>
      <div>
        <h1 className="text-left text-6xl font-bold">useWindowSize</h1>
        <p></p>
      </div>

      <hr className="my-4 w-full border-gray-200" />

      <div className="flex gap-2">
        <p className="min-w-[200px] rounded-md border-2 border-gray-300 p-2">
          width: {width}
          <br />
          height: {height}
        </p>
      </div>
    </main>
  );
}
