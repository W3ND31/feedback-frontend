import moment from "moment";
import { MUIDataTableColumnDef } from "mui-datatables";

const FeedbackColumns: MUIDataTableColumnDef[] = [
  { name: "_id", label: "Id", options: { display: false } },
  { name: "creator", label: "Criado por" },
  { name: "subject", label: "Para o Usuário" },
  {
    name: "feedbackDate",
    label: "Data do Feedback",
    options: {
      customBodyRender: (value, tableMeta, updateValue) => {
        return moment(value).format("DD/MM/YYYY HH:mm");
      },
    },
  },
  { name: "improvePoints", label: "Pontos a melhorar" },
  { name: "keepPoints", label: "Pontos a manter" },
  { name: "suggestions", label: "Sugestões" },
  { name: "finalFeedback", label: "Feedback Final" },
];

export default FeedbackColumns;
