import { useForm } from "react-hook-form";

type LoginForm = {
  username: string;
  password: string;
};

export const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>();

  const onSubmit = (data: LoginForm) => {
    console.log({ data });
  };
  return (
    <div className="root">
      <div className="formContainer">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("username", { required: true })} />
          <input
            type="password"
            {...register("password", { required: true })}
          />
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
