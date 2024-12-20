import { useState } from "react";
import { SignInFlow } from "../../types/SignType";

interface ButtonComp1Props {
    onToggle: (isSaasActive: boolean) => void;
}

export const ButtonComp1 = ({onToggle} : ButtonComp1Props) => {
    const [active, setActive] = useState<SignInFlow>("saas");

    const toggleActive = (option: SignInFlow) => {
        setActive(option);
        onToggle(option == "saas")
    };

    return (
        <div className="relative flex items-center w-[376px] md:w-[624px] h-[52px] md:h-[60px] bg-gray-100 rounded-lg border border-gray-300 overflow-hidden">
         
            <div
                className={`absolute top-0 h-full w-1/2 bg-blue-500 transition-transform duration-300 ${
                    active === "saas" ? "translate-x-0 rounded-r-lg" : "translate-x-full rounded-l-lg"
                }`}
            ></div>

        
            <div className="relative flex flex-row w-full h-full text-center text-black font-medium cursor-pointer">
                <div
                    onClick={() => toggleActive("saas")}
                    className={`flex-1 flex items-center justify-center z-10 tracking-wide font-bold ${
                        active === "saas" ? "text-white" : "text-black"
                    }`}
                >
                    SAAS
                </div>
                <div
                    onClick={() => toggleActive("selfhost")}
                    className={`flex-1 flex items-center justify-center font-bold tracking-wide z-10 ${
                        active === "selfhost" ? "text-white" : "text-black"
                    }`}
                >
                    Self Hosted
                </div>
            </div>
        </div>
    );
};
