import { api } from "../utils/api";

type Pageable = {
    content: TaskList[]
}

export type TaskList = {
    id: number
    title: string
  }
  
async function saveTaskList(title: string ) {
   return  await api.post("/task-lists",{ title: title })
}

async function loadTask() {
    return await api.get<Pageable>("/task-lists")
}


export { saveTaskList , loadTask }