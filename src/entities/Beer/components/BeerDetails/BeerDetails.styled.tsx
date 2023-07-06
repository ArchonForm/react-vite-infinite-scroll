import styled from "styled-components"
import * as Antd from "antd"

export const Drawer = styled(Antd.Drawer)`
  color: var(--text-primary);
  & {
    .ant-drawer-title {
      color: white;
      font-weight: bold;
    }
  }
  & {
    .ant-drawer-header {
      background-color: var(--text-primary);
      font-weight: bold;
    }
  }
`
