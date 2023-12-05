"use client";

import Link from "next/link";

import { useMovieQuote } from "@/hooks/useMovieQuote";

export default function useMovieQuotePage() {
  const quote = useMovieQuote();

  return (
    <main className="p-4">
      <Link className="text-left text-2xl font-bold text-blue-500 hover:text-blue-800" href="/">
        {"<< TOPに戻る"}
      </Link>
      <div>
        <h1 className="text-left text-6xl font-bold">useMovieQuote</h1>
        <p>ランダムに映画の名言を返すフック</p>
      </div>

      <hr className="my-4 w-full border-gray-200" />

      <div className="flex gap-2">
        <p className="min-w-[200px] rounded-md border-2 border-gray-300 p-2">{quote}</p>
      </div>
    </main>
  );
}
