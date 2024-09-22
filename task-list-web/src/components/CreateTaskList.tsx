import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from 'primereact/button';
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
  taskData?: {
    id: number,
    title: string
  }
  onFinish: () => void
}

const CreateTaskList: React.FC<CreateTaskListProps> = ({ taskData, onFinish }) => {
  const [errorMessage, setErrorMessage] = useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormInput>({
    resolver: yupResolver(schema),
    defaultValues: {
      title: taskData?.title
    }
  })
  const save = async ({ title }: CreateFormInput) => {
    saveTaskList(title).then(response => {
      onFinish()
    }).catch(error => {
      console.log(error)
      if (error.status === 400) {
        setErrorMessage(error.response.data.detail)
      }
    })
  }

  return (
    <form className='formgrid grid w-full' onSubmit={handleSubmit(save)}>
      {(errors.title || errorMessage) && <Message severity="warn" text={errors.title?.message || errorMessage} className='w-full mb-3' />}
      <div className='field col'>
        <label >Titulo</label>
        <InputText className='w-full' {...register("title")} />
      </div>
      <div className="col-12">
        <Button>Cadastrar</Button>
      </div>
    </form>
  );
}

export default CreateTaskList;