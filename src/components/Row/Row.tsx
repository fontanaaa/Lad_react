import { FC, ReactNode } from "react";

interface RowProps {
    children: ReactNode;
}

const Row: FC<RowProps> = ({ children }) => {
    return <div style={{ display: "flex", gap: "20px" }}>{children}</div>;
};

export default Row;
