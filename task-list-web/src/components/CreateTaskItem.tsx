import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Message } from 'primereact/message';
import { SelectButton } from 'primereact/selectbutton';
import { SelectItemOptionsType } from 'primereact/selectitem';
import React, { useState } from 'react';
import { saveTaskItem } from '../service/task-item-service';

type CreateTaskItemProps = {
  taskListId: number

}

const CreateTaskItem: React.FC<CreateTaskItemProps> = ({ taskListId }) => {
  const options: SelectItemOptionsType = [{ value: true, label: "Sim" }, { value: false, label: "Não" }];

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isActive, setIsActive] = useState(true)
  const [isPriority, setIsPriority] = useState(false)


  const [errorMessage, setErrorMessage] = useState("")


  const save = async (event: any) => {
    event.preventDefault()
    if (title.length < 1) {
      return;
    }
    saveTaskItem({ taskListId, data: { description, isActive, isPriority, title } }).then(response => {
      setErrorMessage("")
    }).catch(error => {
      console.log(error)
      if (error.statusCode === 400) {
        setErrorMessage(error.response.data.detail)
      }
    })
  }

  return (
    <form className='formgrid grid w-full' onSubmit={save}>
      {errorMessage && <Message severity="warn" text={errorMessage} className='w-full mb-3' />}
      <div className='field col-12'>
        <label >Titulo</label>
        <InputText className='w-full' onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='field col-12'>
        <label >Descrição</label>
        <InputTextarea className='w-full' onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="field col-12 flex flex-row gap-3">
        <div className='field '>
          <label >Status</label>
          <SelectButton className='w-full' value={isActive} onChange={(e) => setIsActive(e.value)} options={options} />
        </div>
        <div className='field '>
          <label >Prioridade</label>
          <SelectButton className='w-full' value={isPriority}
            onChange={(e) => setIsPriority(e.value)} options={options} />
        </div>
      </div>

      <div className="col-12">
        <Button>Cadastrar</Button>
      </div>
    </form>
  );
}

export default CreateTaskItem;