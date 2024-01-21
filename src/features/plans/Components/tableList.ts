import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<unknown, unknown>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: (row: any) => {
//       return (
//         <Chip
//           label={row.getValue()}
//           size="small"
//           color={row.getValue() === "active" ? "primary" : "default"}
//         />
//       );
//     },
//   },
];