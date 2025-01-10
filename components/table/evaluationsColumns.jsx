"use client"

import BookModal from "../BookModal"

export const evaluationsColumns = [

    {
        header: "#",
        cell: ({ row }) => {
          return <p className="text-14-medium text-dimWhite">{row.index + 1}</p>;
        },
    },
    {
        accessorKey: "client_name",
        header: "العميل",
        cell: ({ row }) =>  (
            <p className="text-14-regular min-w-[20px] text-dimWhite text-center">
            {row.original.client_name}
            </p>
        )
    },
    {
        accessorKey: "phone",
        header: "العميل",
        cell: ({ row }) =>  (
            <p className="text-14-regular min-w-[20px] text-dimWhite text-center">
            {row.original.phone}
            </p>
        )
    },
    {
      accessorKey: "date",
      header: "التاريخ",
      cell: ({ row }) => <p className="text-14-medium min-w-[75px] text-dimWhite text-center">{row.original.date}</p>,
    },
    {
    accessorKey: "level",
    header: "التقييم",
    cell: ({ row }) =>  (
        <p className="text-14-regular min-w-[15px] text-dimWhite text-center">
            {row.original.level}
        </p>
        )
    },
    {
        accessorKey: "text",
        header: "النص",
        cell: ({ row }) =>  (
            <p className="text-14-regular min-w-[120px] text-dimWhite text-center">
            {row.original.text}
            </p>
        )
    },
    {
        id: "actions",
        header: () => <div className="pl-4 text-center text-dimWhite">العمليات</div>,
        cell: ({ row }) => {
        const reservation = row.original;

        return (
            <div className="flex gap-1">
            <BookModal
                source='evaluation'
                order={reservation}
                type="schedule"
                title="تثبيت"
                description="هل أنت متأكد من تثبيت التعليق؟"
            />
            <BookModal
                source='evaluation'
                order={reservation}
                type="delete"
                title="إلغاء"
                description="هل أنت متأكد من رفض التعليق؟"
            />
            </div>
        );
        },
    },
]
