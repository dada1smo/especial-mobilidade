import React from "react"
import layoutStyles from "./layout.module.scss" 
 
export default ({ children }) => ( 
  <div className={layoutStyles.pageLayout}>{children}</div> 
) 