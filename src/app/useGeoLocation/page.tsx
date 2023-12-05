"use client";

import Link from "next/link";

import useGeoLocation from "@/hooks/useGeoLocation";

export default function useGeoLocationPage() {
  const { coordinates, error, loaded } = useGeoLocation();

  if (!loaded) return <p>loading...</p>;

  return (
    <main className="p-4">
      <Link className="text-left text-2xl font-bold text-blue-500 hover:text-blue-800" href="/">
        {"<< TOPに戻る"}
      </Link>
      <div>
        <h1 className="text-left text-6xl font-bold">useGeoLocation</h1>
        <p>ウィンドウサイズを追跡するフック</p>
      </div>

      <hr className="my-4 w-full border-gray-200" />

      <div className="flex gap-2">
        {error || coordinates === undefined ? (
          <p className="min-w-[200px] rounded-md border-2 border-gray-300 p-2">
            {JSON.stringify(error ?? "error")}
          </p>
        ) : (
          <p className="min-w-[200px] rounded-md border-2 border-gray-300 p-2">
            latitude: {coordinates.lat}
            <br />
            longitude: {coordinates.lng}
          </p>
        )}
      </div>
    </main>
  );
}
