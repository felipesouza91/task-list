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

async function saveTaskList(title: string) {
    return await api.post("/task-lists", { title: title })
}

async function loadTaskList({ title }: SearchData) {
    return await api.get<Pageable>("/task-lists", {
        params: {
            title
        },

    })
}

async function loadTaskListById(id: number) {
    return await api.get(`/task-lists/${id}`)
}


async function deleteTaskListById(id: number) {
    return await api.delete(`/task-lists/${id}`)

}

export { deleteTaskListById, loadTaskList, loadTaskListById, saveTaskList };

