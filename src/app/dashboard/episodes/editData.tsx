import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import * as DialogPrimitive from "@radix-ui/react-dialog"


import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@radix-ui/react-toast"
// import { updateLocalEpisodes } from "@/app/services/getInfo"
import { Episodes } from "@/app/utils/interfaces/episodes.interface"


const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
})



export function EditDialog({epData}: {epData: Episodes}) {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // const { code } = await updateLocalEpisodes(data, epData.id)
    const code = 0;
    if(code=== 0) {
      
      toast({
        title: "Scheduled: Catch up ",
        description: "Friday, February 10, 2023 at 5:57 PM",
        action: (
          <ToastAction altText="Goto schedule to undo">OK</ToastAction>
        ),
      })

    } else {
      toast({
        variant:"destructive",
        title: "Something happend",
        description: "Friday, February 10, 2023 at 5:57 PM",
        action: (
          <ToastAction altText="Goto schedule to undo">OK</ToastAction>
        ),
      })
    }
  }

  return (
    <Dialog>
      <DropdownMenuItem className="w-full" onSelect={(e) => e.preventDefault()}>
        <DialogTrigger className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
          Edit
        </DialogTrigger>
      </DropdownMenuItem>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Row</DialogTitle>
          <DialogDescription>
            Make changes to the episode info here. Click save when you are done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="name" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogPrimitive.Close>
              <label className="cursor-pointer text-white bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-300 rounded-md px-5 py-3 text-sm font-semibold mr-4">
                Cancel
              </label>
            </DialogPrimitive.Close>
            <DialogPrimitive.Close type="submit">
              <label className="cursor-pointer text-white bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-300 rounded-md px-5 py-3 text-sm font-semibold mr-4">
                Save
              </label>
            </DialogPrimitive.Close>
          </form>
        </Form>
      </DialogContent>
    </Dialog>

  )
}

