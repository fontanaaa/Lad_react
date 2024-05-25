import { FC, ReactNode } from "react";

interface RowProps {
    children: ReactNode;
    direction?: "row" | "column";
}

const Row: FC<RowProps> = ({ children, direction = "row" }) => {
    return (
        <div style={{ display: "flex", flexDirection: direction, gap: "20px" }}>
            {children}
        </div>
    );
};

export default Row;
