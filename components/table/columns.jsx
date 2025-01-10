"use client"

import StatusBadge from "../StatusBadge"
import BookModal from "../BookModal"
import { formatDateTime } from "@/constants";

export const columns = [

    {
        header: "#",
        cell: ({ row }) => {
          return <p className="text-14-medium text-dimWhite">{row.index + 1}</p>;
        },
    },
    // {
    //   accessorKey: "is_approved",
    //   header: "الحالة",
    //   cell: ({ row }) => {
    //     return (
    //       <div className="min-w-[75px]  text-center">
    //         {/* <StatusBadge status={row.original.status} /> */}
    //         <StatusBadge status={row.original.is_approved} />
    //       </div>
    //     );
    //   },
    // },
    {
        accessorKey: "client_name",
        header: "العميل",
        // cell: ({ row }) => <p className="text-14-medium text-center">{row.original.client}</p>,
        cell: ({ row }) => 
          <p className="text-14-medium text-center min-w-[120px] text-dimWhite">
            {row.original.client_name}
          </p>,
    },
    {
      accessorKey: "phone",
      header: "الجوال",
      cell: ({ row }) => <p className="text-14-medium text-dimWhite text-center">
        {row.original.phone}
        </p>,
    },
    {
      accessorKey: "product",
      header: "عنصر الحجز",
      cell: ({ row }) =>  (
          <p className="text-14-regular min-w-[120px] text-dimWhite text-center">
            {/* {row.original.item} */}
            {row.original.product}
          </p>
        )
    },
    {
      accessorKey: "date",
      header: "تاريخ الحجز",
      cell: ({ row }) => {
        const { dateTime } = formatDateTime(row.original.date); // Access the desired value
        return (
          <p className="text-14-regular min-w-[120px] text-center text-dimWhite">
            {dateTime} {/* or {date}, or {time} */}
          </p>
        );
      }
    },
    {
      accessorKey: "duration",
      header: 'المدة',
      cell: ({ row }) => {
        const { order_type, days, hours } = row.original;
        return (
          <p className="text-14-regular min-w-[50px] text-dimWhite text-center">
            {order_type === "hotel" ? days : order_type === "car" ? hours : "-"}
          </p>
        );
      },
    },
      {
        accessorKey: "payment",
        header: 'طريقة الدفع',
        cell: ({ row }) => (
            <p className="text-14-regular min-w-[100px] text-dimWhite text-center">
              {row.original.payment}
            </p>
          )
      },
      {
        accessorKey: "quantity",
        header: "الكمية",
        cell: ({ row }) => (
            <p className="text-14-regular min-w-[50px] text-dimWhite text-center">
              {row.original.quantity}
            </p>
          )
      },
      {
        accessorKey: "price",
        header: "الكلفة",
        cell: ({ row }) => (
            <p className="text-14-regular min-w-[75px] text-dimWhite text-center">
              {/* ${row.original.amount} */}
              {row.original.price}
            </p>
          )
      },
      {
          id: "actions",
          header: () => <div className="pl-4 text-center">العمليات</div>,
          cell: ({ row }) => {
            const reservation = row.original;

            return (
              <div className="flex gap-1">
                <BookModal
                  order={reservation}
                  type="details"
                  title="تفاصيل"
                  description="تفاصيل الطلب"
                />
                <BookModal
                  order={reservation}
                  type="schedule"
                  title="تثبيت الطلب"
                  description="هل أنت متأكد من تثبيت الطلب؟"
                />
                <BookModal
                  order={reservation}
                  type="delete"
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
]
