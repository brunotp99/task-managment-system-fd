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
import { Label } from "@/components/ui/label";

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
    }),
    confirm: z.string({
      required_error: "Please, provide a password."
    }).min(6, {
        message: "Your password should be at least 6 characters."
    }).max(255, {
        message: "Your password is too long."
    })
})

export const SingUp = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          password: "",
          confirm: ""
        },
    })
    
    const onSubmit = (values: z.infer<typeof formSchema>) => {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
      }

    return (
        <div className="flex flex-col items-center justify-center gap-y-4">
            <h1 className="mb-4 font-[800] me-auto text-5xl text-gray-800">Sign Up</h1>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Your email</Label>
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
                    label="Your password"
                />
                <InputPassword 
                    form={form.control["confirm"]}
                    name="confirm"
                    label="Repeat password"
                />
                <Button type="submit" variant="ghost" className="bg-[#FFD43B] text-gray-700 font-[600] w-full">Sign up</Button>
              </form>
            </Form>
          
            <span className="text-gray-500">Already have an account? <Link className="mt-2 text-[#FFD43B]" to="/sign-in">Sign in</Link> </span>
            
        </div>
    );
  }