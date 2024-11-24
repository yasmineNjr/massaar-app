"use client"

import BookModal from "../BookModal"

export const carColumns = [

    {
        header: "#",
        cell: ({ row }) => {
          return <p className="text-14-medium">{row.index + 1}</p>;
        },
    },
    {
        accessorKey: "id",
        header: "الرقم",
        cell: ({ row }) => <p className="text-14-medium min-w-[100px] text-center">{row.original.id}</p>,
    },
    {
      accessorKey: "name",
      header: "الاسم",
      cell: ({ row }) => <p className="text-14-medium min-w-[100px] text-center">{row.original.name}</p>,
    },
    {
        accessorKey: "model",
        header: "الموديل",
        cell: ({ row }) => (
            <p className="text-14-regular min-w-[100px]  text-center">
              {row.original.model}
            </p>
          )
      },
      {
        accessorKey: "description",
        header: "الوصف",
        cell: ({ row }) => (
            <p className="text-14-regular min-w-[100px]  text-center">
              {row.original.description}
            </p>
          )
      },
      {
        accessorKey: "pricePerHour",
        header: "الكلفة",
        cell: ({ row }) => (
            <p className="text-14-regular min-w-[75px]  text-center">
              {row.original.pricePerHour}
            </p>
          )
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
          accessorKey: "passengers",
          header: "عدد الركاب",
          cell: ({ row }) =>  (
              <p className="text-14-regular min-w-[20px]  text-center">
                {row.original.passengers}
              </p>
            )
      },
      {
          accessorKey: "GPS",
          header: "GPS",
          cell: ({ row }) =>  (
              <p className="text-14-regular min-w-[20px]  text-center">
                {row.original.GPS === true ? 'نعم' : 'لا'}
              </p>
            )
      },
      {
          accessorKey: "automatic",
          header: "Automatic",
          cell: ({ row }) =>  (
              <p className="text-14-regular min-w-[20px]  text-center">
                {row.original.automatic === true ? 'نعم' : 'لا'}
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
                  type="update"
                  title="تعديل"
                  description="هل أنت متأكد من تعديل السيارة؟"
              />
              <BookModal
                  // patientId={appointment.patient.$id}
                  // userId={appointment.userId}
                  // appointment={appointment}
                  type="delete"
                  title="حذف"
                  description="هل أنت متأكد من حذف السيارة؟"
              />
              </div>
          );
          },
      },
]
