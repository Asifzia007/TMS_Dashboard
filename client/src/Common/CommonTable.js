import React from "react";
import { Table, Pagination } from "react-bootstrap";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import './Common.css'

const CommonTable = ({ 
  columns, 
  data, 
  rowsPerPage, 
  page, 
  onPageChange, 
  onEdit, 
  onDelete 
}) => {
  const totalPages = Math.ceil(data.length / rowsPerPage);
  const paginatedData = data.slice((page - 1) * rowsPerPage, page * rowsPerPage);

  return (
    <div style={{  marginTop: "10px", height: "100%" }}>
      <Table responsive bordered hover>
        <thead>
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                style={{
                  minWidth: column.minWidth,
                  fontWeight: "700",
                  textAlign: "center",
                  background: "#003c78",
                  color: "white",
                  fontSize: "12px",
                  padding: "6px",
                }}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.length > 0 ? (
            paginatedData.map((row, index) => (
              <tr key={index}>
                {columns.map((column) => {
                  if (column.id === "action") {
                    return (
                      <td
                        key={column.id}
                        style={{
                          fontSize: "11px",
                          textAlign: "center",
                          padding: "5px",
                        }}
                      >
                        <AiOutlineEdit
                          style={{
                            fontSize: "18px",
                            cursor: "pointer",
                            marginRight: 10,
                            color: "#003c78",
                          }}
                          onClick={() => onEdit(row)}
                        />
                        <AiOutlineDelete
                          style={{
                            fontSize: "18px",
                            cursor: "pointer",
                            marginRight: 10,
                            color: "red",
                          }}
                          onClick={() => onDelete(row)}
                        />
                      </td>
                    );
                  }
                  return (
                    <td
                      key={column.id}
                      style={{
                        fontSize: "12px",
                        textAlign: "center",
                        padding: "5px",
                        wordBreak: "break-word",
                      }}
                    >
                      {row[column.id]}
                    </td>
                  );
                })}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length} style={{ textAlign: "center" }}>
                No data found.
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination className="d-flex justify-content-center">
        <Pagination.First onClick={() => onPageChange(1)} disabled={page === 1} />
        <Pagination.Prev onClick={() => onPageChange(page - 1)} disabled={page === 1} />
        {[...Array(totalPages)].map((_, index) => (
          <Pagination.Item
            key={index}
            active={page === index + 1}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => onPageChange(page + 1)}
          disabled={page === totalPages}

        />
        <Pagination.Last
          onClick={() => onPageChange(totalPages)}
          disabled={page === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default CommonTable;
