import { Sidebar } from "../components/sidebar";
import { Toaster } from "@/components/ui/toaster"
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { z } from "zod";

const FormSchema = z.object({
	username: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	pass: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	gender: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	status: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	type: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	created: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	})
})


export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        {children}
        <Toaster />
      </div>
    </div>
  )
}
