import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

interface BasicAlertsProps {
  type: string;
  message: string;
  space: number;
  padding: number;
}

import { AlertColor } from "@mui/material/Alert";

const BasicAlerts: React.FC<BasicAlertsProps> = ({
  type,
  message,
  space,
  padding,
}) => {
  return (
    <Stack sx={{ width: "100%" }} spacing={space}>
      {/* success:緑チェック,info:青i,warning:黄三角!,error:赤円!のどれかを入れてください。 */}
      <Alert severity={type as AlertColor} sx={{ padding: padding }}>
        {message}
      </Alert>
    </Stack>
  );
};

export default BasicAlerts;
