import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Message } from 'primereact/message';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { saveTaskList } from '../service/task-lists-service';

const schema = yup
  .object({
    title: yup.string().required("Campo titulo é obrigatório"),
  })
  .required()

type CreateFormInput = yup.InferType<typeof schema>;

type CreateTaskListProps = {
    visible?: boolean
    onHide: () => void
} 

const CreateTaskList: React.FC<CreateTaskListProps> = ( { visible = false, onHide}) => {
    const [isVisible, setIsVisible] = useState(true)
    const [errorMessage, setErrorMessage] = useState('')
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<CreateFormInput>({
        resolver: yupResolver(schema),
      })
    

    const save = async ({ title}: CreateFormInput) => {
        saveTaskList(title).then( response => {
            onClose()
        }).catch(error => {
            console.log(error)
            if (error.status === 400) {   
                setErrorMessage(error.response.data.detail)
            }
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
          {(errors.title || errorMessage) && <Message severity="warn" text={errors.title?.message || errorMessage } className='w-full mb-3'/>}

          <form className='formgrid grid w-full' onSubmit={handleSubmit(save)}>

            <div className='field col'>
                <label >Titulo</label>
                <InputText className='w-full' {...register("title")}/>
            </div>
            <div className="col-12">

            <Button>Cadastrar</Button>
            </div>
        </form>
    </Dialog>
  );
}

export default CreateTaskList;