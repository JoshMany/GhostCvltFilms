function SpinningText({ text, children }) {
  const lenght = text.length;
  const deg = 360 / lenght;

  return (
    <div>
      <div className="relative w-[200px] h-[200px] grid place-items-center">
        <div className="absolute w-full h-full animate-[spin_40s_linear_infinite]">
          <p>
            {text.split("").map((letra, i) => (
              <span
                key={i}
                className="absolute origin-[0_100px] left-2/4 top-0 font-UrbanistRegular text-[35px]"
                style={{
                  transform: `rotate(${deg * i}deg)`,
                }}
              >
                {letra}
              </span>
            ))}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}

export default SpinningText;
