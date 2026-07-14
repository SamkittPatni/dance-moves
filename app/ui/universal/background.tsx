export default function Background({children}: {children: React.ReactNode}) {

  return (
    <div className="grid grid-rows-auto w-full h-full px-10 py-10 md:px-40 lg:mx-50 2xl:mx-100">
      {children}
    </div>
  );

}
