import { colorSchemes } from "../assets/assets";

const ColorSchemeSelector = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (color: string) => void;
}) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-zinc-200">
        Color Scheme
      </label>
      <div className="grid grid-cols-6 gap-3">
        {colorSchemes.map((scheme) => (
          <button
            key={scheme.id}
            onClick={() => onChange(scheme.id)}
            className={`relative rounded-lg transition-all ${value === scheme.id && "ring-2 ring-pink-500"}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ColorSchemeSelector;
