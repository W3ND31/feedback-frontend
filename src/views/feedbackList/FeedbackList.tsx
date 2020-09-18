import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import ArrowBack from "../../components/arrowBack/ArrowBack";
import DataTable from "../../components/dataTable/Datatable";
import FeedbackColumns from "../../components/feedbacks/FeedbacksColumn";
import FeedbackService from "../../services/FeedbackService";
import { RootState } from "../../store";
import MuiStylesApp from "../../style/MuiStylesApp";

const FeedbackList = (props: any) => {
  const classes = MuiStylesApp();
  const { user } = useSelector((store: RootState) => store.AuthReducer);

  const [data, setData] = useState([]);

  useEffect(() => {
    FeedbackService.listFeedbacksByCreator(user.username).then((res) => {
      setData(res.data);
    });
  }, [user.username]);

  const options = {
    onRowClick: (rowData: string[], rowMeta: { dataIndex: number; rowIndex: number }) => {
      const id = rowData[0];
      props.history.push(`/feedback/${id}`);
    },
  };

  return (
    <Grid container direction="column">
      <Grid item>
        <ArrowBack title="Feedbacks" />
      </Grid>
      <Grid item className={classes.dataTable}>
        <DataTable title="Feedbacks" data={data} options={options} columns={FeedbackColumns} />
      </Grid>
    </Grid>
  );
};

export default withRouter(FeedbackList);
