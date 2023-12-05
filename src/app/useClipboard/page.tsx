"use client";

import Link from "next/link";

import { useClipboard } from "@/hooks/useClipboard";

const copyText = "this text is copied to clipboard";

export default function UseClipboard() {
  const [copied, copy] = useClipboard();

  return (
    <main className="p-4">
      <Link className="text-left text-2xl font-bold text-blue-500 hover:text-blue-800" href="/">
        {"<< TOPに戻る"}
      </Link>
      <div>
        <h1 className="text-left text-6xl font-bold">UseClipboard</h1>
        <p>クリップボードにコピーするhook</p>
      </div>

      <div className="flex gap-2">
        <p className="min-w-[200px] rounded-md border-2 border-gray-300 p-2">{copyText}</p>
        <button
          className="rounded-md border-2 border-blue-500 bg-blue-500 p-2 text-white hover:border-blue-700 hover:bg-blue-700"
          onClick={() => copy(copyText)}
        >
          copy to clipboard
        </button>
        {copied && <p className="rounded-md border-2 border-gray-300 bg-gray-100 p-2">copied!</p>}
      </div>

      <hr className="my-4 w-full border-gray-200" />

      <input
        className="rounded-md border-2 border-gray-300 p-2"
        placeholder="貼り付けて確認"
        type="text"
      />
    </main>
  );
}
