import { LeftSide } from "./auth/leftside";
import { RightSide } from "./auth/rightside";

export const Authentication = () => {
    return (
        <div className="flex flex-row w-full h-screen">
            <LeftSide />
            <RightSide />
        </div>
    );
};
