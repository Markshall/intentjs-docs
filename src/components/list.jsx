import Link from "next/link";

export const ListComponent = ({ items }) => {
  return (
    <>
      <div className="grid grid-cols-4 gap-3 mx-auto px-3 py-2">
        {items.map((i) => (
          <div className="underline text-primary">
            <Link href={i.href||''}>{i.label}</Link>
          </div>
        ))}
      </div>
    </>
  );
};
