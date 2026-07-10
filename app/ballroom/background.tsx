export default function Background({children}: {children: React.ReactNode}) {

  return (
    <div className="grid grid-rows-auto w-full h-full p-10">
      {children}
    </div>
  );

}
