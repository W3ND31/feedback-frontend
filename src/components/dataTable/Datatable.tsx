import MUIDataTable, { MUIDataTableColumnDef } from "mui-datatables";
import React from "react";

interface DataTableProps {
  title: string;
  data: {}[];
  columns: MUIDataTableColumnDef[];
  options: Partial<{}>;
}

const DataTable = (props: DataTableProps) => {
  const { title, data, columns, options } = props;
  let optionsTable: Partial<{}> = {
    download: false,
    filter: false,
    fixedSelectColumn: false,
    pagination: false,
    print: false,
    responsive: "vertical",
    search: false,
    selectableRows: "none",
    selectableRowsHeader: false,
    selectableRowsHideCheckboxes: true,
    selectToolbarPlacement: "none",
    tableBodyHeight: "auto",
    tableBodyMaxHeight: "50%",
    ...options,
  };
  return <MUIDataTable title={title} data={data} columns={columns} options={optionsTable} />;
};

export default DataTable;
