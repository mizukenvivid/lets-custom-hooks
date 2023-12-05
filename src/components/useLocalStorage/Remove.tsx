"use client";

import { useState } from "react";

type Props = {
  className?: string;
  remove: (key: string) => void;
};

export const Remove = ({ remove, className }: Props) => {
  const [key, setKey] = useState("");

  return (
    <div className={`rounded-md border-2 border-gray-300 p-4 ${className ?? ""}`}>
      <h2 className="text-left text-2xl font-bold">useLocalStorage.remove()</h2>
      <p>特定のkeyを持つlocalStorageの値を削除</p>
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
            remove(key);
            setKey("");
          }}
        >
          remove localStorage value
        </button>
      </div>
    </div>
  );
};
