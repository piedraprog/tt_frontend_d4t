"use client"

import { Episodes } from "@/app/utils/interfaces/episodes.interface"
import { ColumnDef } from "@tanstack/react-table"
import moment from "moment";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreHorizontal } from "lucide-react"
import { EditDialog } from "./editData";


export const columns: ColumnDef<Episodes>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "species",
    header: "Species",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "created",
    header: "Created",
    cell: ({ row }: any) => {
      const created = moment(row).format('l')
      return created
    }
  },
  {
    header: "Actions",
    id: "actions",
    cell: ({ row }) => {
      const character = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <EditDialog epData={character}></EditDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
