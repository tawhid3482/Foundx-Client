"use client";
import FXForm from "@/src/components/form/FxForm";
import FxInput from "@/src/components/form/FxInput";
import loginValidationSchema from "@/src/schemas/login.schema";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPage = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
      <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
      <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
      <div className="w-[35%]">
        <FXForm
          onSubmit={onSubmit}
          resolver={zodResolver(loginValidationSchema)}
        >
          <div className="py-3">
            <FxInput name="email" label="Email" type="email" />
          </div>
          <div className="py-3">
            <FxInput name="password" label="Password" type="password" />
          </div>

          <Button
            className="my-3 w-full rounded-md bg-default-900 font-semibold text-default"
            size="lg"
            type="submit"
          >
            Login
          </Button>
        </FXForm>
        <div className="text-center">
          Don&lsquo;t have account ? <Link href={"/register"}>Register</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
