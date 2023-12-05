"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { useInterval } from "@/hooks/useInterval";

export default function UseInterval() {
  const [logs, setLogs] = useState<string[]>([]);
  const func = () => {
    setLogs((prev) => [...prev, `${prev.length + 1}回目 ${new Date().toLocaleString()}`]);
  };
  const intervalFunc = useInterval(func, 2000);

  useEffect(() => {
    intervalFunc();
    // This dependency array is empty because we want to run this effect only once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="p-4">
      <Link className="text-left text-2xl font-bold text-blue-500 hover:text-blue-800" href="/">
        {"<< TOPに戻る"}
      </Link>
      <div>
        <h1 className="text-left text-6xl font-bold">UseInterval</h1>
        <p>特定の処理を指定した間隔で実行するhook</p>
      </div>

      <hr className="my-4 w-full border-gray-200" />

      <p className="text-left text-2xl font-bold">2秒ごとにログを出力</p>

      <hr className="my-4 w-full border-gray-200" />

      <div>
        <h2 className="text-left text-2xl font-bold">logs</h2>
        <ul>
          {logs.map((log, index) => (
            <li className="list-inside list-disc" key={index}>
              {log}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
