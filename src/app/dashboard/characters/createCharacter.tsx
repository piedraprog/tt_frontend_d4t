import { Button } from "@/components/ui/button"
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
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
import moment from "moment"


const FormSchema = z.object({
	name: z.string().min(2, {
		message: "Name must be at least 2 characters.",
	}),
	specie: z.string().min(2, {
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


export function CreateCharacterDialog() {

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			name: "",
			specie: "",
			gender: "",
			status: "unknown",
			type: "",
			created: ""
		},
	})

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		console.log(data)
		// const { code } = await updateLocalEpisodes(data, epData.id)
		const code = 0;
		if (code === 0) {

			toast({
				title: "Character successfully created",
				description: moment().format("LLLL"),
				action: (
					<ToastAction altText="Confirm">Done</ToastAction>
				),
			})

		} else {
			toast({
				variant: "destructive",
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
			<DialogTrigger asChild>
				<Button variant="outline">Create Character +</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[625px]">
				<DialogHeader>
					<DialogTitle>Create a Character</DialogTitle>
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
										<Input placeholder="Alien" {...field} />
									</FormControl>
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
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="type"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Type</FormLabel>
									<FormControl>
										<Input placeholder="Genetic experiment	" {...field} />
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="created"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Created</FormLabel>
									<FormControl>
										<Input placeholder="MM/DD/2024" {...field} />
									</FormControl>
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
