type ButtonProps = {
  label: string;
};

export default function Button(props: ButtonProps) {
  const { label } = props;

  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded">
      {label}
    </button>
  );
}
