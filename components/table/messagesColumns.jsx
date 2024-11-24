"use client"

import BookModal from "../BookModal"

export const messagesColumns = [

    {
        header: "#",
        cell: ({ row }) => {
          return <p className="text-14-medium">{row.index + 1}</p>;
        },
    },
    {
      accessorKey: "name",
      header: "الاسم",
      cell: ({ row }) => <p className="text-14-medium min-w-[100px] text-center">{row.original.name}</p>,
    },
    {
        accessorKey: "mobile",
        header: "الجوال",
        cell: ({ row }) => (
            <p className="text-14-regular min-w-[100px]  text-center">
              {row.original.mobile}
            </p>
          )
      },
      {
        accessorKey: "email",
        header: "البريد الالكتروني",
        cell: ({ row }) => (
            <p className="text-14-regular min-w-[100px]  text-center">
              {row.original.email}
            </p>
          )
      },
      {
        accessorKey: "message",
        header: "الرسالة",
        cell: ({ row }) => (
            <p className="text-14-regular min-w-[75px]  text-center">
              {row.original.message}
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
                  description="هل أنت متأكد من تثبيت الرسالة؟"
              />
              <BookModal
                  // patientId={appointment.patient.$id}
                  // userId={appointment.userId}
                  // appointment={appointment}
                  type="cancel"
                  title="رفض"
                  description="هل أنت متأكد من رفض الرسالة؟"
              />
              </div>
          );
          },
      },
]
