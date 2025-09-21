"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { email, z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import FromField from "./FromField";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const authFormSchema = (type: FormType) =>
  z.object({
    name:
      type === "sign-up" ? z.string().min(2).max(50) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(8).max(100),
  });

const AuthForm = ({ type }: { type: FormType }) => {
  const formSchema = authFormSchema(type);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        toast.success('Account Created Successfully. Please Sign in.')
        console.log("SIGN_UP");
      } else {
        toast.success('Logged in Successfully.')
        console.log("SIGN_IN");
      }
    } catch (error) {
      console.log(error);
      toast.error(`There is an error ${error}`);
    }
  }

  const isSignIn = type === "sign-in";
  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex gap-2 justify-center">
          <Image src="./logo.svg" alt="logo" height={42} width={38} />
          <h2 className="text-primary-100">MockIN</h2>
        </div>
        <h3>AI Powered Mock Interview...</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-full mt-4 form"
          >
            {!isSignIn && (
              <FromField
                control={form.control}
                name={"name"}
                label={"Name"}
                placeholder="Your Name  "
              />
            )}
               <FromField
                control={form.control}
                name={"email"}
                label={"Email"}
                placeholder="Enter your email"
              />
               <FromField
                control={form.control}
                name={"password"}
                label={"Password"}
                placeholder="Enter your password"
                type="password"
              />
            <Button type="submit" className="btn">
              {isSignIn ? "Sign In" : "Create an Account"}
            </Button>
          </form>
        </Form>
        <p className="text-center">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          <Link href={isSignIn ? "/sign-up" : "/sign-in"}>
            &nbsp;{isSignIn ? "Sign Up" : "Sign In"}
          </Link>
        </p>
      </div>
    </div>
  );
};
export default AuthForm;
