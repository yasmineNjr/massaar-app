"use client"

import BookModal from "../BookModal"

export const hotelColumns = [

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
        accessorKey: "location",
        header: "الموقع",
        cell: ({ row }) => (
            <p className="text-14-regular min-w-[100px]  text-center">
              {row.original.location}
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
          accessorKey: "wifi",
          header: "WIFI",
          cell: ({ row }) =>  (
              <p className="text-14-regular min-w-[20px]  text-center">
                {row.original.wifi === true ? 'نعم' : 'لا'}
              </p>
            )
      },
      {
          accessorKey: "conditioning",
          header: "Conditioning",
          cell: ({ row }) =>  (
              <p className="text-14-regular min-w-[20px]  text-center">
                {row.original.conditioning === true ? 'نعم' : 'لا'}
              </p>
            )
      },
      {
          accessorKey: "breakfast",
          header: "Breakfast",
          cell: ({ row }) =>  (
              <p className="text-14-regular min-w-[20px]  text-center">
                {row.original.breakfast === true ? 'نعم' : 'لا'}
              </p>
            )
      },
      {
        accessorKey: "meal",
        header: "Meal",
        cell: ({ row }) =>  (
            <p className="text-14-regular min-w-[20px]  text-center">
              {row.original.meal === true ? 'نعم' : 'لا'}
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
                  description="هل أنت متأكد من تعديل الفندق؟"
              />
              <BookModal
                  // patientId={appointment.patient.$id}
                  // userId={appointment.userId}
                  // appointment={appointment}
                  type="delete"
                  title="حذف"
                  description="هل أنت متأكد من حذف الفندق؟"
              />
              </div>
          );
          },
      },
]
