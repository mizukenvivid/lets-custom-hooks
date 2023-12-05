"use client";

import Link from "next/link";

import { useDeviceOrientation } from "@/hooks/useDeviceOrientation";

export default function useDeviceOrientationPage() {
  const { absolute, alpha, beta, gamma } = useDeviceOrientation();

  return (
    <main className="p-4">
      <Link className="text-left text-2xl font-bold text-blue-500 hover:text-blue-800" href="/">
        {"<< TOPに戻る"}
      </Link>
      <div>
        <h1 className="text-left text-6xl font-bold">useDeviceOrientation</h1>
        <p>デバイスの向きを追跡するフック</p>
      </div>

      <hr className="my-4 w-full border-gray-200" />

      <div className="flex gap-2">
        <p className="min-w-[200px] rounded-md border-2 border-gray-300 p-2">
          absolute: {String(absolute)}
          <br />
          alpha: {alpha}
          <br />
          beta: {beta}
          <br />
          gamma: {gamma}
        </p>
      </div>
    </main>
  );
}
