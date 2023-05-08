import useGet from "@/hooks/useGet";
import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Pagination } from "@mui/material";


const List = () => {
  const { data, error, pending: loading } = useGet('board/list');

  const columns: GridColDef[] = [
    {field: 'bno', headerName: '번호', flex: 1},
    {field: 'title', headerName: '제목', flex: 1},
    {field: 'content', headerName: '내용', flex: 1},
    {field: 'writer', headerName: '작성자', flex: 1},
    {field: 'insertTs', headerName: '작성일시', flex: 1},
    {field: 'updateTs', headerName: '수정일시', flex: 1},
  ];


  return (
    <>
      <h1>board-project-front</h1>
      {data ? (
        <div>
        <DataGrid
            disableColumnFilter
            disableColumnMenu
            columns={columns}
            rows={data ? (Array.isArray(data) ? data : [data]) : []}
            getRowId={row => row.bno}
            rowHeight={40}
            initialState={{
                pagination: {
                    paginationModel: {
                        pageSize: 20, page: 0
                    }
                }
            }}
        />
        {/* <Pagination count={10} variant="outlined" shape="rounded" /> */}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default List;
