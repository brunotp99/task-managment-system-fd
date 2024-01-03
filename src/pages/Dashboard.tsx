import { Button } from "@/components/ui/button"

export const Dashboard = () => {

    return (
        <>
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="font-bold text-3xl">Vite + React + TypeScript + Shadcn UI</h1>
              <Button>Shadcn UI Button</Button>
              <Button variant="outline">Shadcn UI Button</Button>
            </div>
        </>
    )

}