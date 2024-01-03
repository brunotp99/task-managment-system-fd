import { Control } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "./form";
import { Input } from "./input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "./button";
import { FormEvent, useState } from "react";
import { Label } from "./label";

interface InputPasswordProps {
    form: Control;
    name: string;
    label?: string;
}

const InputPassword = ({ form, name, label }: InputPasswordProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const onClick = (e: FormEvent) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    };

    return (
        <div>
            {label && <Label className="flex mb-3">{label}</Label>}
            <div className="relative">
            
                <FormField
                    control={form}
                    name={name}
                    render={({ field }) => (
                        <FormItem>
                        
                            <FormControl>
                                <Input
                                    placeholder="*******"
                                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                                    type={showPassword ? "text" : "password"}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    size="icon"
                    variant="link"
                    className="absolute top-0 end-0 p-3 rounded-e-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    onClick={onClick}
                >
                    {showPassword ? (
                        <Eye className="w-4 h-4 text-gray-400" />
                    ) : (
                        <EyeOff className="w-4 h-4 text-gray-400" />
                    )}
                </Button>
            </div>
        </div>
    );
};

export default InputPassword;
