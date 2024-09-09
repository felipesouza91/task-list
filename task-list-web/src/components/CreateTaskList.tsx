import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import React, { useState } from 'react';
import { saveTaskList } from '../service/task-lists-service';

type CreateTaskListProps = {
    visible?: boolean
    onHide: () => void
} 

const CreateTaskList: React.FC<CreateTaskListProps> = ( { visible = false, onHide}) => {
    const [isVisible, setIsVisible ] = useState(true)
    const [title, setTitle ] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const save = async (event: any) => {
        event.preventDefault()
        if(title.length < 1) {
            return;
        }
        saveTaskList(title).then( response => {
            onClose()
            setErrorMessage("")
        }).catch(error => {
            if (error.response.status === 400){
            setErrorMessage(error.response.data.detail)}
        })
    }

    const onClose = () => {
        if (!visible) {
            return;
        } else {
            setIsVisible(false)
            onHide()
        }
    }
  return (
    <Dialog header="Cadastrar Lista de Tarefas" visible={isVisible}
          onHide={onClose}>
          {errorMessage && <Message severity="warn" text={errorMessage} className='w-full mb-3'/>}

          <form className='formgrid grid w-full' onSubmit={save}>

            <div className='field col'>
                <label >Titulo</label>
                <InputText className='w-full'
                onChange={( e ) => setTitle(e.target.value)}/>
            </div>
            <div className="col-12">

            <Button>Cadastrar</Button>
            </div>
        </form>
    </Dialog>
  );
}

export default CreateTaskList;