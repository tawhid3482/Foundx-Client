"use client";
import FXForm from "@/src/components/form/FxForm";
import FxInput from "@/src/components/form/FxInput";
import loginValidationSchema from "@/src/schemas/login.schema";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserLogin } from "@/src/hooks/auth.hook";
import Loading from "@/src/components/Ui/Loading";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/src/context/user.provider";

const LoginPage = () => {

  const searchParams = useSearchParams()
  const router = useRouter()
  const redirect = searchParams.get('redirect')
  const {setIsLoading:userLoading}=useUser()

  const {mutate:handleUserLogin, isPending,isSuccess}=useUserLogin()
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // console.log(data);
    handleUserLogin(data)
    userLoading(true)
  };

  if(!isPending && isSuccess){
    if(redirect){
      router.push(redirect)
    }else{
      router.push('/')
    }
  }

  return (
    <>
    {
      isPending && <Loading />
    }
      <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
        <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
        <p className="mb-4">Welcome Back! Let&lsquo;s Get Started</p>
        <div className="w-[35%]">
          <FXForm
            resolver={zodResolver(loginValidationSchema)}
            onSubmit={onSubmit}
          >
            <div className="py-3">
              <FxInput label="Email" name="email" type="email" />
            </div>
            <div className="py-3">
              <FxInput label="Password" name="password" type="password" />
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
    </>
  );
};

export default LoginPage;
