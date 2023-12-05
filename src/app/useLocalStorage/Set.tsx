import { useState } from "react";

type Props = {
  className?: string;
  set: (key: string, value: string) => void;
};

export const Set = ({ set, className }: Props) => {
  const [value, setValue] = useState({
    key: "",
    value: "",
  });

  return (
    <div className={`rounded-md border-2 border-gray-300 p-4 ${className}`}>
      <h2 className="text-left text-2xl font-bold">useLocalStorage.set()</h2>
      <p>localStorageにkeyとvalueをセット</p>
      <div className="flex gap-2">
        <input
          className="max-w-[200px] rounded-md border-2 border-gray-300 p-2"
          onChange={(e) => setValue({ ...value, key: e.target.value })}
          placeholder="key"
          type="text"
          value={value.key}
        />
        <input
          className="max-w-[200px] rounded-md border-2 border-gray-300 p-2"
          onChange={(e) => setValue({ ...value, value: e.target.value })}
          placeholder="value"
          type="text"
          value={value.value}
        />
        <button
          className="rounded-md border-2 border-blue-500 bg-blue-500 p-2 text-white hover:border-blue-700 hover:bg-blue-700"
          onClick={() => {
            set(value.key, value.value);
            setValue({ key: "", value: "" });
          }}
        >
          set localStorage value
        </button>
      </div>
    </div>
  );
};
