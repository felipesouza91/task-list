import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { SelectItemOptionsType } from 'primereact/selectitem';
import React, { useEffect, useState } from 'react';
import {
  Link
} from "react-router-dom";
import CreateTaskList from '../components/CreateTaskList';
import { TaskList, loadTask } from '../service/task-lists-service';
const Home: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState(undefined)
  const [showSaveDialog, setShowSaveDialog ] = useState(false)
  const [taskLits, setTaskLits] = useState<TaskList[]>([])

  const seachOptions: SelectItemOptionsType = [
    {value: 'title', label: "Titulo" , title: "Titulo"}
  ] 



  useEffect(() => {
    loadData()
  }, []) 


  const loadData = () => {
    loadTask().then( response => {  
      setTaskLits(response.data.content)
    })
  }

  const onHide = () => {
    setShowSaveDialog(!showSaveDialog)
    loadData()
  }

  const actionButtons = (data: any) => {
    return (
      <div className='flex gap-2'>
        <Link to={`/task-list/${data.id}`}>
          <Button icon="pi pi-eye" size="small" severity="info"/>
        </Link>
        <Button icon="pi pi-trash" size="small" severity="danger"/>
      </div>
    )
  }

  return (
    <div className='w-10 mx-auto flex gap-3 flex-column'>
      <form className='formgrid grid'>
        <div className='field col-4'>
          <label>Filtro</label>
          <Dropdown 
            value={selectedFilter}
            options={seachOptions}
            onChange={(e) => setSelectedFilter(e.value)}
            placeholder="Selecione um filtro"
            className='w-full'/>
        </div>
        {selectedFilter && <div className='field col'>
          <label>Filtro</label>
          <InputText className='w-full'/>
        </div>}
        <div className='col-12'>
          <Button>Pesquisar</Button>
        </div>
      </form>

      <DataTable emptyMessage="Nenhuma lista encontrada" value={taskLits} tableStyle={{ minWidth: '50rem' }} paginator rows={5}>
        <Column field="id" header="Id" className='w-2' />
        <Column field="title" header="Title" />
        <Column header="Acões" body={actionButtons} className='w-1'/>
      </DataTable>

      <div className='mt-2'>
        <Button onClick={() => {
          setShowSaveDialog(true)
        }}>Cadastrar</Button>
      </div>
      {showSaveDialog && <CreateTaskList visible={showSaveDialog}
        onHide={onHide}/>}
    </div>
  );
}

export default Home;