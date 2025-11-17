type ButtonProps = {
  label: string;
  color?: "red" | "blue" | "green";
};

export default function Button(props: ButtonProps) {
  const { label, color } = props;

  let bgColorClass = "bg-blue-500";
  if (color === "red") {
    bgColorClass = "bg-red-500";
  } else if (color === "green") {
    bgColorClass = "bg-green-500";
  }

  return (
    <button className={`${bgColorClass} text-white px-4 py-2 rounded`}>
      {label}
    </button>
  );
}
