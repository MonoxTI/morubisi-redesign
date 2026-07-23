import { cn } from "@/lib/utils";

interface FieldProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  as?: "input" | "textarea" | "select";
  options?: string[];
  className?: string;
}

export default function Input({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
  as = "input",
  options,
  className,
}: FieldProps) {
  const fieldClasses =
    "bg-panel border border-line text-paper px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-orange transition-colors";

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-wider text-steel"
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder={placeholder}
          rows={5}
          className={cn(fieldClasses, "resize-y")}
        />
      ) : as === "select" ? (
        <select id={name} name={name} required={required} className={fieldClasses}>
          {options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={fieldClasses}
        />
      )}
    </div>
  );
}
