export const Shimmer = () => {
  return (
    <div className="restaurant-cards">
      {Array(10)
        .fill("")
        .map((e,index) => {
          return <div className="shimmer-card" key={index}></div>;
        })}
    </div>
  );
};
