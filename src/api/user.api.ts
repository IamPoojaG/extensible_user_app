import { apiRequest } from "./client";

export const getUsers = () => apiRequest("/users");

export const createUser = (data: any) =>
  apiRequest("/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

export const updateUser = (id: number, data: any) => {

  return apiRequest(`/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};


export const deleteUser = (id: number) =>
  apiRequest(`/users/${id}`, { method: "DELETE" });
