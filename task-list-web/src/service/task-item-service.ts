import { api } from "../utils/api"

export type Pageable = {
  content: TaskItem[]
}

export type TaskItem = { 
  id	: number
  title	: string
  description	: string
  isActive	: boolean
  isPriority	: boolean
  createdAt: Date
}

export type InputTaskItem = { 
  data: {
    title: string
    description: string
    isActive: boolean
    isPriority: boolean
  },
  taskListId: number
}

async function loadTaskItem(taskListId: number) {
  return await api.get<Pageable>(`/task-lists/${taskListId}/items`)
}


async function saveTaskItem({taskListId, data}: InputTaskItem) {
  return await api.post(`/task-lists/${taskListId}/items`, {...data})
}


export { loadTaskItem, saveTaskItem }

