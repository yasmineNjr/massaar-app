"use client"

import { Button } from "@/components/ui/button"
import { MoreHorizontal } from "lucide-react"
import StatusBadge from "../StatusBadge"
import BookModal from "../BookModal"

export const columns = [

    {
        header: "#",
        cell: ({ row }) => {
          return <p className="text-14-medium">{row.index + 1}</p>;
        },
    },
    {
        accessorKey: "client",
        header: "العميل",
        cell: ({ row }) => <p className="text-14-medium text-center">{row.original.client}</p>,
    },
    {
        accessorKey: "status",
        header: "الحالة",
        cell: ({ row }) => {
          return (
            <div className="min-w-[75px]  text-center">
              <StatusBadge status={row.original.status} />
            </div>
          );
        },
    },
    {
        accessorKey: "startDate",
        header: "تاريخ الحجز",
        cell: ({ row }) => (
            <p className="text-14-regular min-w-[100px]  text-center">
              {/* {formatDateTime(row.original.startDate).dateTime} */}
              {row.original.startDate}
            </p>
          )
      },
      {
        accessorKey: "endDate",
        header: "تاريخ الانتهاء",
        cell: ({ row }) => (
            <p className="text-14-regular min-w-[100px]  text-center">
              {/* {formatDateTime(row.original.startDate).dateTime} */}
              {row.original.endDate}
            </p>
          )
      },
      {
        accessorKey: "amount",
        header: "الكلفة",
        cell: ({ row }) => (
            <p className="text-14-regular min-w-[75px]  text-center">
              {/* {formatDateTime(row.original.startDate).dateTime} */}
              ${row.original.amount}
            </p>
          )
      },
      {
        accessorKey: "item",
        header: "عنصر الحجز",
        cell: ({ row }) =>  (
            <p className="text-14-regular min-w-[75px]  text-center">
              {row.original.item}
            </p>
          )
    },
//   {
//     accessorKey: "amount",
//     header: () => <div className="text-right">Amount</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("amount"))
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount)
 
//       return <div className="text-right font-medium">{formatted}</div>
//     },
//   },

{
    id: "actions",
    header: () => <div className="pl-4 text-center">العمليات</div>,
    cell: ({ row }) => {
      const reservation = row.original;

      return (
        <div className="flex gap-1">
          <BookModal
            // patientId={appointment.patient.$id}
            // userId={appointment.userId}
            // appointment={appointment}
            type="schedule"
            title="تثبيت الطلب"
            // description="Please confirm the following details to schedule."
          />
          <BookModal
            // patientId={appointment.patient.$id}
            // userId={appointment.userId}
            // appointment={appointment}
            type="cancel"
            title="إلغاء الطلب"
            description="هل أنت متأكد من إلغاء الطلب؟"
          />
        </div>
      );
    },
  },
//   {
//     id: "actions",
//     cell: ({ row }) => {
//         const payment = row.original
    
//         return (
//         <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//                 <span className="sr-only">Open menu</span>
//                 <MoreHorizontal className="h-4 w-4" />
//             </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem
//                 onClick={() => navigator.clipboard.writeText(payment.id)}
//             >
//                 Copy payment ID
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>View customer</DropdownMenuItem>
//             <DropdownMenuItem>View payment details</DropdownMenuItem>
//             </DropdownMenuContent>
//         </DropdownMenu>
//         )
//     },
//     },
]
