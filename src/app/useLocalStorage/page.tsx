"use client";

import Link from "next/link";

import { useLocalStorage } from "@/hooks/useLocalStorage";

import { Get } from "../../components/useLocalStorage/Get";
import { List } from "../../components/useLocalStorage/List";
import { Remove } from "../../components/useLocalStorage/Remove";
import { Set } from "../../components/useLocalStorage/Set";

export default function useLocalStoragePage() {
  const [list, get, set, remove] = useLocalStorage();

  return (
    <main className="p-4">
      <Link className="text-left text-2xl font-bold text-blue-500 hover:text-blue-800" href="/">
        {"<< TOPに戻る"}
      </Link>
      <div>
        <h1 className="text-left text-6xl font-bold">useLocalStorage</h1>
        <p>localStorageを操作するhooks</p>
      </div>

      <hr className="my-4 w-full border-gray-200" />

      <List list={list} />

      <hr className="my-4 w-full border-gray-200" />

      <Get get={get} />
      <Set className="mt-4" set={set} />
      <Remove className="mt-4" remove={remove} />
    </main>
  );
}
