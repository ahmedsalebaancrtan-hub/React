export const Button = ({
  color,
  text,
}: {
  color: string;
  text: string;
}) => {

  const colors: Record<string, string> = {
    blue: "bg-blue-600 hover:bg-blue-700",
    red: "bg-red-600 hover:bg-red-700",
    green: "bg-green-600 hover:bg-green-700",
  };

  return (
    <button
      className={`w-full mt-5 text-white py-2 rounded-xl font-medium transition duration-300 ${colors[color]}`}
    >
      {text}
    </button>
  );
};