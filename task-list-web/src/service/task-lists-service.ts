import { api } from "../utils/api";

type SearchData = {
    title?: string
}

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

async function loadTask({title}: SearchData) {
    return await api.get<Pageable>("/task-lists", {
        params: {
            title
        },
        
    })
}


export { loadTask, saveTaskList };
