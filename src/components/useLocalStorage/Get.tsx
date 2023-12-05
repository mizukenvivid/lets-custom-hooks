"use client";

import { useState } from "react";

type Props = {
  className?: string;
  get: (key: string) => string | undefined;
};

export const Get = ({ get, className }: Props) => {
  const [key, setKey] = useState("");
  const [value, setValue] = useState("");

  return (
    <div className={`rounded-md border-2 border-gray-300 p-4 ${className ?? ""}`}>
      <h2 className="text-left text-2xl font-bold">useLocalStorage.get()</h2>
      <p>特定のkeyを持つlocalStorageの値を取得</p>
      <div className="flex gap-2">
        <input
          className="max-w-[200px] rounded-md border-2 border-gray-300 p-2"
          onChange={(e) => setKey(e.target.value)}
          placeholder="key"
          type="text"
          value={key}
        />
        <button
          className="rounded-md border-2 border-blue-500 bg-blue-500 p-2 text-white hover:border-blue-700 hover:bg-blue-700"
          onClick={() => {
            setValue(get(key) || "");
          }}
        >
          get localStorage value
        </button>
        <button
          className="rounded-md border-2 border-red-500 bg-red-500 p-2 text-white hover:border-red-700 hover:bg-red-700"
          onClick={() => {
            setKey("");
            setValue("");
          }}
        >
          clear input
        </button>
      </div>
      {value && (
        <p className="mt-2 rounded-md border-2 border-gray-300 bg-gray-100 p-2">
          {key} の値を持つLocalStorageの値は {value} です。
        </p>
      )}
    </div>
  );
};
