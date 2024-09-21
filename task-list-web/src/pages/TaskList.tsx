import { Button } from 'primereact/button';
import { Checkbox } from 'primereact/checkbox';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dropdown } from 'primereact/dropdown';
import { InputText } from 'primereact/inputtext';
import { SelectItemOptionsType } from 'primereact/selectitem';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CreateTaskItem from '../components/CreateTaskItem';
import { TaskItem, loadTaskItem } from '../service/task-item-service';



const TaskList: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState(undefined)
  const [taskItems, setTaskItems] = useState<TaskItem[]>()
  const [showSaveDialog, setShowSaveDialog ] = useState(false)

  let { id } = useParams();
  const seachOptions: SelectItemOptionsType = [
    {value: 'title', label: "Titulo" , title: "Titulo"}
  ] 

  useEffect(() => {
    loadData()
  }, [])

  function loadData() {
    if (id) {
      loadTaskItem(Number.parseInt(id)).then(response => {
        setTaskItems(response.data.content)
      })
    }
  }

  const onHide = () => {
    setShowSaveDialog(!showSaveDialog)
    loadData()
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

      <DataTable emptyMessage="Nenhuma lista encontrada"
        value={taskItems} tableStyle={{ minWidth: '50rem' }}
          paginator rows={5}>
        <Column  field="id" header="Id" className='w-2' />
        <Column field="title" header="Title" />
        <Column field="description" header="Descrição" />
        <Column field="isActive" header="Ativado" body={(data) => (<Checkbox checked={data.isActive} />) } />
        <Column field="isPriority" header="Prioridade" body={ (data) => (<Checkbox checked={data.isPriority} />) }/>
      </DataTable>

      <div className='mt-2 grid md:gap-3 '>
        <div className='col-12 md:col-1'>
          <Button onClick={() => { setShowSaveDialog(true)}} className='w-full flex justify-content-center'>Cadastrar</Button>
        </div>
        <div className='col-12 md:col-1 '>
          <Link to="/">
            <Button className='w-full flex justify-content-center'>Voltar</Button>
          </Link>
        </div>
      </div>
      {showSaveDialog && <CreateTaskItem taskListId={Number.parseInt(id!)} visible={showSaveDialog}
        onHide={onHide}/>}
    </div>
  );
}

export default TaskList;