"use client"

import DeleteOrderComponent from "../DeleteOrderComponent";

export const orderColumns = [

    {
        header: "#",
        cell: ({ row }) => {
          return <div className="flex justify-center">
            <p className="text-14-medium text-dimWhite">{row.index + 1}</p>
          </div>;
        },
    },
    {
        accessorKey: "id",
        header: "",
        cell: ({ row }) => 
          <div className="min-w-[75px]" >
            <DeleteOrderComponent id={row.original.id} />
          </div>,
      },
    {
        accessorKey: "product",
        header: "المنتج",
        cell: ({ row }) => <p className="text-14-medium min-w-[100px] text-center text-dimWhite">{row.original.product}</p>,
    },
    {
      accessorKey: "price",
      header: "السعر",
      cell: ({ row }) => <p className="text-14-medium min-w-[100px] text-center text-dimWhite">{row.original.price}</p>,
    },
    {
        accessorKey: "quantity",
        header: "الكمية",
        cell: ({ row }) => <p className="text-14-medium min-w-[100px] text-center text-dimWhite">{row.original.quantity}</p>,
    },
    {
        header: "الكلفة النهائية",
        cell: ({ row }) => <p className="text-14-medium min-w-[100px] text-center text-dimWhite">{Number(row.original.quantity) * Number(row.original.price)}</p>,
    },
]
