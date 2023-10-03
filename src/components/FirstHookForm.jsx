import { useEffect } from 'react'
import {useForm} from 'react-hook-form'
import {object, string, number} from 'yup'
import { yupResolver } from "@hookform/resolvers/yup";

function FirstHookForm() {
  const schema = object({
    title: string().required(),
    duration: number().required(),
  })

  //console.log("🚨[FirstHookForm.jsx:8]: schema: ", schema);

  const defaultValues = {
    title: "",
    duration: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid, isSubmitting },
    formState,
  } = useForm({ mode: "all", defaultValues, resolver: yupResolver(schema) });

  useEffect(() => {
    console.log("formState", formState);
    console.log(`errors`,errors);
  })

  const onSubmitHandler = (data) => {
    console.log('onSubmitHandler',data);
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        {/* {errors.title && errors.duration && <span>Form has errors</span>} */}
        <div>
          <input {...register("title")} />
          {errors.title && <span>Title field is required</span>}
        </div>
        <input {...register("duration")} />
        {errors.duration && <span>Duration field is required</span>}
        <div>
          <button type="submit" disabled={isSubmitting || !isDirty || !isValid}>
            Submit
          </button>
          <button onClick={() => reset(defaultValues)}>Reset</button>
        </div>
      </form>
    </>
  );
}

export default FirstHookForm
