"use client";

import Link from "next/link";
import { ChangeEvent, useState } from "react";

import { useDebounce } from "@/hooks/useDebounce";

export default function UseDebounce() {
  const [value, setValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [milliseconds, setMilliseconds] = useState(1000);

  const debouncedFunc = useDebounce(() => {
    setDebouncedValue(value);
  }, milliseconds);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      setValue("");
      setDebouncedValue("");
      return;
    }

    setValue(e.target.value);
    debouncedFunc();
  };

  const handleCompositionEnd = () => {
    debouncedFunc();
  };

  return (
    <main className="p-4">
      <Link className="text-left text-2xl font-bold text-blue-500 hover:text-blue-800" href="/">
        {"<< TOPに戻る"}
      </Link>
      <div>
        <h1 className="text-left text-6xl font-bold">UseDebounce</h1>
        <p>特定の処理を制御するhook</p>
      </div>

      <hr className="my-4 w-full border-gray-200" />

      <div className="flex gap-2">
        <input
          className="max-w-[200px] rounded-md border-2 border-gray-300 p-2"
          onChange={handleChange}
          onCompositionEnd={handleCompositionEnd}
          placeholder="ここに入力"
          type="text"
          value={value}
        />
        <button
          className="rounded-md border-2 border-red-500 bg-red-500 p-2 text-white hover:border-red-700 hover:bg-red-700"
          onClick={() => {
            setValue("");
            setDebouncedValue("");
          }}
        >
          clear input
        </button>
      </div>

      <hr className="my-4 w-full border-gray-200" />

      <div className="flex gap-2">
        <input
          className="max-w-[200px] rounded-md border-2 border-gray-300 p-2"
          onChange={(e) => setMilliseconds(Number(e.target.value))}
          placeholder="debounceする時間"
          type="number"
          value={milliseconds === 0 ? "" : milliseconds}
        />
        <button
          className="rounded-md border-2 border-blue-500 bg-blue-500 p-2 text-white hover:border-blue-700 hover:bg-blue-700"
          onClick={() => {
            setMilliseconds(1000);
          }}
        >
          reset
        </button>
      </div>

      <hr className="my-4 w-full border-gray-200" />

      <div className="rounded-md border-2 border-gray-300 bg-gray-100 p-2">
        <p>debouncedFuncは {milliseconds} ミリ秒待ってから実行されます。</p>
        <p>入力された値は {debouncedValue} です。</p>
      </div>
    </main>
  );
}
