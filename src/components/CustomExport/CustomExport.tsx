import { FileDownloadOutlined } from "@mui/icons-material";
import { Button, Icon } from "@mui/material";
import {
  GridCsvGetRowsToExportParams,
  gridPaginatedVisibleSortedGridRowIdsSelector,
  GridToolbarContainer,
  useGridApiContext,
} from "@mui/x-data-grid";
import React, { FC } from "react";
import styles from "./CustomExport.module.scss";

interface CustomExportProps {}

const CustomExport: FC<CustomExportProps> = () => {
  const getRowsFromCurrentPage = ({ apiRef }: GridCsvGetRowsToExportParams) =>
    gridPaginatedVisibleSortedGridRowIdsSelector(apiRef);
  const apiRef = useGridApiContext();
  function handleExport(): void {
    apiRef.current.exportDataAsCsv({ getRowsToExport: getRowsFromCurrentPage });
  }
  return (
    <div className={styles.CustomExport}>
      <GridToolbarContainer>
        <Button
          className={styles.button}
          variant="contained"
          color="secondary"
          endIcon={<Icon component={FileDownloadOutlined} />}
          onClick={() => handleExport()}
        >
          Export
        </Button>
      </GridToolbarContainer>
    </div>
  );
};

export default CustomExport;
