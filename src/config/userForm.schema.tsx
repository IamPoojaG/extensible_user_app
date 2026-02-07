import type { FieldSchema } from "../types/user.types";

export const USER_FORM_SCHEMA: FieldSchema[] = [
  {
    name: "firstName",
    label: "First Name",
    type: "text",
    required: true,
    validate: (v) => v.length >= 2 || "Minimum 2 characters",
  },
  {
    name: "lastName",
    label: "Last Name",
    type: "text",
    required: true,
    validate: (v) => v.length >= 2 || "Minimum 2 characters",
  },
  {
    name: "phone",
    label: "Phone",
    type: "tel",
    required: true,
    validate: (v) => /^[0-9]{10}$/.test(v) || "Enter valid phone",
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    required: true,
    validate: (v) => /\S+@\S+\.\S+/.test(v) || "Enter valid email",
  },
];
