import React from "react";

import { Box, TableCell, TableHead, TableRow } from "@mui/material";

interface HeadCell {
  id: string;
  label: string;
}

export const Head: React.FC<{ headCells: HeadCell[] }> = ({ headCells }) => {
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id} align="left">
            <Box fontWeight={600}>{headCell.label}</Box>
          </TableCell>
        ))}
        {/* Placeholder for details icon column */}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};
