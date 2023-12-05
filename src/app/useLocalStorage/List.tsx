type Props = {
  className?: string;
  list: () => string[] | [];
};

export const List = ({ list, className }: Props) => {
  return (
    <div className={`rounded-md border-2 border-gray-300 p-4 ${className}`}>
      <h2 className="text-left text-2xl font-bold">useLocalStorage.list()</h2>
      <p>localStorageのkey一覧</p>
      <ul className="min-w-[200px] rounded-md border-2 border-gray-300 bg-gray-100 p-2">
        {list().map((key, index) => (
          <li className="list-inside list-disc" key={index}>
            {key}
          </li>
        ))}
      </ul>
    </div>
  );
};
