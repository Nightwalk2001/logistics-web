import {Link, useLocation} from "react-router-dom"

export const TopMenu = () =>
  <div className={"flex space-x-10 mx-10 mt-4"}>
    <MenuItem name={"送货单"} to={"/"}/>
    <MenuItem name={"欠款单"} to={"/arrears"}/>
    <MenuItem name={"历史账单"} to={"/history"}/>
  </div>

type Props = {
  name: string
  icon?: string
  to: string
}

const MenuItem = ({name, icon, to}: Props) => {
  const path = useLocation()

  return <Link to={to}>
    <div className={"font-medium"}>{name}</div>
  </Link>
}
