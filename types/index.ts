export * from "./actions/action-types";

export interface Todo {
  id: string;
  content: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoListProps {
  profileId: string;
}
