import type { User } from "../../types/user.types";

interface Props {
  users: User[];
  onEdit: (u: User) => void;
  onDelete: (id: number) => void;
}

export default function UserList({ users, onEdit, onDelete }: Props) {
  return (
    <div className="space-y-3">
      {users.map((u) => (
        <div key={u.id} className="border p-3 rounded flex justify-between">
          <div>
            {Object.entries(u).map(([k, v]) =>
              k !== "id" ? (
                <p key={k} className="text-sm">
                  <b>{k}</b>: {String(v)}
                </p>
              ) : null
            )}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onEdit(u)}
              className="px-3 py-1 bg-yellow-500 text-white rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(u.id!)}
              className="px-3 py-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
