import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { SelectItemOptionsType } from 'primereact/selectitem';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Link
} from "react-router-dom";
import * as yup from 'yup';
import CreateTaskList from '../components/CreateTaskList';
import { TaskList, deleteTaskListById, loadTaskList } from '../service/task-lists-service';

const shema = yup.object({
  data: yup.string()
})

type SearchFormInput = yup.InferType<typeof shema>

const Home: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState(undefined)
  const [showSaveDialog, setShowSaveDialog] = useState(false)
  const [taskLits, setTaskLits] = useState<TaskList[]>([])
  const [editListData, setEditListData] = useState()
  const {
    register,
    handleSubmit,
  } = useForm<SearchFormInput>({
    resolver: yupResolver(shema)
  })

  const searchOptions: SelectItemOptionsType = [
    { value: 'title', label: "Titulo", title: "Titulo" }
  ]

  async function search({ data }: SearchFormInput) {
    loadTaskList({ title: data }).then(response => {
      setTaskLits(response.data.content)
    })
  }

  useEffect(() => {
    loadData()
  }, [])


  const loadData = () => {
    loadTaskList({}).then(response => {
      setTaskLits(response.data.content)
    })
  }

  const editTask = (data: any) => {
    setShowSaveDialog(true)
    setEditListData(data)
  }



  const onHideDialog = () => {
    if (!showSaveDialog) {
      return;
    } else {
      setShowSaveDialog(false);
      setEditListData(undefined)
      loadData()
    }
  }

  const confirmDelete = (data: any) => {
    confirmDialog({
      message: `Voce deseja excluir a lista: ${data.title} ?`,
      header: "Confirma Exclusão",
      acceptLabel: "Sim",
      rejectLabel: "Não",
      accept: async () => {
        await deleteTaskListById(data.id)
      }
    })
  }

  const actionButtons = (data: any) => {
    return (
      <div className='flex gap-2'>
        <Link to={`/task-list/${data.id}`} className='no-underline'>
          <Button icon="pi pi-eye" size="small" severity="success" />
        </Link>
        <Button icon="pi pi-pencil" size="small" severity="info" onClick={() => editTask(data)} />
        <Button icon="pi pi-trash" size="small" severity="danger" onClick={() => confirmDelete(data)} />
      </div>
    )
  }

  return (
    <div className='w-10 mx-auto flex gap-3 flex-column'>
      <form className='formgrid grid' onSubmit={handleSubmit(search)}>
        <div className='field col-12 md:col-4'>
          <label>Filtro</label>
          <Dropdown
            value={selectedFilter}
            options={searchOptions}
            onChange={(e) => setSelectedFilter(e.value)}
            placeholder="Selecione um filtro"
            className='w-full'
          />
        </div>
        {selectedFilter && <div className='field col'>
          <label>Filtro</label>
          <InputText className='w-full' {...register('data')} />
        </div>}
        <div className='col-12'>
          <Button>Pesquisar</Button>
        </div>
      </form>

      <DataTable emptyMessage="Nenhuma lista encontrada" value={taskLits} tableStyle={{ minWidth: '50rem' }} paginator rows={5}>
        <Column field="id" header="Id" className='w-2' />
        <Column field="title" header="Title" sortable />
        <Column header="Acões" body={actionButtons} className='w-1' />
      </DataTable>

      <div className='mt-2 grid col-12 md:col-2 '>

        <Button onClick={() => {
          setShowSaveDialog(true)
        }} className='w-full flex justify-content-center'>Cadastrar</Button>
      </div>


      <Dialog
        header={editListData ? "Editar Lista" : "Cadastrar Lista"}
        visible={showSaveDialog}
        onHide={onHideDialog}>
        <CreateTaskList taskData={editListData} onFinish={onHideDialog} />
      </Dialog>

      <ConfirmDialog />
    </div>
  );
}

export default Home;