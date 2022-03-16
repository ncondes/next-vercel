import { FC } from "react"

export const DarkLayout: FC = ({ children }) => {
   return (
      <div style={{
         backgroundColor: "rgba(0,0,0,0.3)",
         borderRadius: "10px",
         padding: "50px",
      }}>
         <h3>Dark Layout</h3>
         <div>
            { children }
         </div>
      </div>
   )
}
