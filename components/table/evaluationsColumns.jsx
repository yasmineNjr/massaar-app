"use client"

import BookModal from "../BookModal"

export const evaluationsColumns = [

    {
        header: "#",
        cell: ({ row }) => {
          return <p className="text-14-medium">{row.index + 1}</p>;
        },
    },
    {
      accessorKey: "date",
      header: "التاريخ",
      cell: ({ row }) => <p className="text-14-medium min-w-[100px] text-center">{row.original.date}</p>,
    },
    {
    accessorKey: "rating",
    header: "التقييم",
    cell: ({ row }) =>  (
        <p className="text-14-regular min-w-[15px]  text-center">
            {row.original.rating}
        </p>
        )
    },
    {
        accessorKey: "text",
        header: "النص",
        cell: ({ row }) =>  (
            <p className="text-14-regular min-w-[20px]  text-center">
            {row.original.text}
            </p>
        )
    },
    {
        accessorKey: "client",
        header: "العميل",
        cell: ({ row }) =>  (
            <p className="text-14-regular min-w-[20px]  text-center">
            {row.original.client}
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
                // patientId={appointment.patient.$id}
                // userId={appointment.userId}
                // appointment={appointment}
                type="schedule"
                title="تثبيت"
                description="هل أنت متأكد من تثبيت التعليق؟"
            />
            <BookModal
                // patientId={appointment.patient.$id}
                // userId={appointment.userId}
                // appointment={appointment}
                type="cancel"
                title="إلغاء"
                description="هل أنت متأكد من رفض التعليق؟"
            />
            </div>
        );
        },
    },
]
