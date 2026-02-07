import { useState } from "react";
import DynamicForm from "../components/form/DynamicForm";
import UserList from "../components/users/UserList";
import { USER_FORM_SCHEMA } from "../config/userForm.schema";
import { createUser, updateUser, deleteUser } from "../api/user.api";
import { useUsers } from "../hooks/useUsers";

export default function UsersPage() {
  const { users, reload } = useUsers();
  const [editing, setEditing] = useState<any>(null);

  const submit = async (data: any) => {
    if (editing) await updateUser(editing.id, data);
    else await createUser(data);

    setEditing(null);
    reload();
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <DynamicForm
        schema={USER_FORM_SCHEMA}
        defaultValues={editing || {}}
        onSubmit={submit}
      />

      <UserList
        users={users}
        onEdit={setEditing}
        onDelete={async (id) => {
          await deleteUser(id);
          reload();
        }}
      />
    </div>
  );
}
