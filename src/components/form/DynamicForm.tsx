import { useState } from "react";
import type { FieldSchema } from "../../types/user.types";

interface Props {
  schema: FieldSchema[];
  defaultValues?: Record<string, any>;
  onSubmit: (data: Record<string, any>) => Promise<void>;
}

export default function DynamicForm({
  schema,
  defaultValues = {},
  onSubmit,
}: Props) {
  const [form, setForm] = useState<Record<string, any>>(defaultValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    schema.forEach((f) => {
      const value = form[f.name] || "";

      if (f.required && !value) newErrors[f.name] = "Required";
      else if (f.validate) {
        const res = f.validate(value);
        if (res !== true) newErrors[f.name] = res;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setLoading(true);
      await onSubmit(form);
      setForm({});
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-4">
      {schema.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium">{field.label}</label>
          <input
            type={field.type}
            value={form[field.name] || ""}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, [field.name]: e.target.value }))
            }
            className="w-full border rounded p-2"
          />
          {errors[field.name] && (
            <p className="text-red-500 text-sm">{errors[field.name]}</p>
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
      >
        {loading ? "Saving..." : defaultValues?.id ? "Update" : "Submit"}
      </button>
    </form>
  );
}
