import * as z from "zod"
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import InputPassword from "@/components/ui/input-password";

const formSchema = z.object({
    email: z.string({
        required_error: "Please, provide an email."
    }).email({
        message: "Please, provide a valid email."
    }).min(3, {
        message: "Your email must be at least 3 characters."
    }).max(255, {
        message: "Your email is too long."
    }),
    password: z.string({
        required_error: "Please, provide a password."
    }).min(6, {
        message: "Your password should be at least 6 characters."
    }).max(255, {
        message: "Your password is too long."
    })
})

export const SingIn = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
        },
    })
    
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

    return (
        <div className="flex flex-col items-center justify-center gap-y-4">
            <h1 className="mb-4 font-[800] me-auto text-5xl text-gray-800">Sign In</h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="name@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <InputPassword 
                    form={form.control["password"]}
                    name="password"
                />
                <Button type="submit" variant="ghost" className="bg-[#FFD43B] text-gray-700 font-[600] w-full">Sign in</Button>
              </form>
            </Form>
            
            <div className="w-full relative flex py-2 items-center">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="flex-shrink mx-4 text-gray-400">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
            
            <div className="flex gap-x-4 w-full">
                <Button
                    variant="outline"
                    className="w-1/2"
                >
                    Google
                </Button>
                <Button
                    variant="outline"
                    className="w-1/2"
                >
                    Facebook
                </Button>
            </div>
            
            <span className="text-gray-500">Don't have an account? <Link className="mt-2 text-[#FFD43B]" to="/sign-up">Sign up</Link> </span>
            
        </div>
    );
  }