import { useState } from "react";
import { ButtonComp } from "../buttoncomp";
import { Logo } from "../logo";
import { ButtonComp1 } from "./buttoncomp1";

export const RightSide = () => {
    const [isSaasActive, setIsSaasActive] = useState(true);

    return (
        <div className="flex w-full max-w-full md:max-w-full md:w-1/2 flex-col justify-center items-center p-4 gap-4 bg-gray-100">
            <div className="w-full max-w-[672px] h-full max-h-[620px] bg-white border border-gray-300 rounded-lg flex flex-col shadow-sm">
               
                <div className="bg-white h-1/2 w-full rounded-lg flex flex-col items-center justify-center space-y-4 gap-9">
                    <Logo />
                    <h1 className="text-2xl md:text-4xl font-bold tracking-wide">Welcome to CodeAnt AI</h1>
                    <ButtonComp1 onToggle={setIsSaasActive} />
                </div>
               
                {isSaasActive ? (
                    <div className="flex flex-col items-center justify-center space-y-3 p-4 border-t-2">
                        <ButtonComp text="Sign in with Github" icon="image 1.png" />
                        <ButtonComp text="Sign in with Bitbucket" icon="image 2.png" />
                        <ButtonComp text="Sign in with Azure Devops" icon="image.png" />
                        <ButtonComp text="Sign in with GitLab" icon="image-1.png" />
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center space-y-3 p-4 border-t-2">
                        <ButtonComp text="Self Hosted Gitlab" icon="image-1.png" />
                        <ButtonComp text="Sign in with SSO" icon="key.png" />
                    </div>
                )}

               
            </div>
            <p>By signing up you agree to the <span role="button" className="font-bold">Privacy Policy</span>.</p>
        </div>
    );
};
