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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"
import { ToastAction } from "@radix-ui/react-toast"
import { Episodes } from "@/app/utils/interfaces/episodes.interface"
import moment from "moment"
import { Character } from "@/app/utils/interfaces/characters.interface"

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  specie: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  status: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  gender: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
})



export function EditDialog({ charData }: { charData: Character}) {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      specie:"",
      status:"unknown",
      gender:"",
    },
  })

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    // const { code } = await updateLocalCharacters(data, epData.id)
    const code = 0;
    if(code=== 0) {
      
      toast({
        title: "Character successfully updated",
        description: moment().format("LLLL"),
        action: (
          <ToastAction altText="Confirm">Done</ToastAction>
        ),
      })

    } else {
      toast({
        variant:"destructive",
        title: "Something happend",
        description: moment().format("LLLL"),
        action: (
          <ToastAction altText="Confirm">Done</ToastAction>
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
            <FormField
              control={form.control}
              name="specie"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Specie</FormLabel>
                  <FormControl>
                    <Input placeholder="Human" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <FormControl>
                    <Input placeholder="Alive" {...field} />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <Input placeholder="Male" {...field} />
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

