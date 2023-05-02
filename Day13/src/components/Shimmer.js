export const Shimmer = () => {
  return (
    <div data-testid="shimmer" className="flex flex-wrap px-40 m-2">
      {Array(10)
        .fill("")
        .map((e,index) => {
          return <div className=" w-64 h-96 p-10 m-10 border-4 bg-gray-200" key={index}></div>;
        })}
    </div>
  );
};
