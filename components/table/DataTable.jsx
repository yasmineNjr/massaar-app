"use client"

import {
  ColumnDef,
  getPaginationRowModel,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "../ui/button"
import Image from "next/image"

export function DataTable({
  columns,
  data,
  source,
  total
}) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  return (//className="hover:shadow-none"
    <div className="data-table shadow-customGray">
      <Table className="shad-table">
        <TableHeader className=" bg-customGray text-start ">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id} className="shad-table-row-header ">
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id} className='text-primary-foreground text-center font-semibold'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
                className="shad-table-row hover:bg-transparent"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center" >
                لا يوجد نتائج.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {
        source !== 'orders' 
        ?
        <div className="table-actions">
          <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className="shad-gray-btn font-bold"
            >
              <Image
                src="/assets/arrow.svg"
                width={24}
                height={24}
                alt="arrow"
                className="rotate-180"
              />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className="shad-gray-btn"
            >
              <Image
                src="/assets/arrow.svg"
                width={24}
                height={24}
                alt="arrow "
              />
            </Button>
        </div>
        : 
        <div className="text-primary-foreground font-bold text-center flex flex-row justify-center">
          <p className="p-5">
          إجمالي كلفة الحجوزات
          </p>
          <p className="p-5 text-gold">{total}</p>
        </div>
      }
     
    </div>
  )
}
