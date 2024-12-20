interface ButtonProp {
    icon: string; 
    text: string;
}

export const ButtonComp = ({ icon, text }: ButtonProp) => {
    return (
        <div role="button" className="h-[58px] w-[340px] md:w-[446px] bg-white rounded-lg border border-gray-300 flex items-center justify-center space-x-2">
            <img src={icon} alt="icon" className="h-5 w-5 mr-2" />
            <p className="text-black font-semibold text-md tracking-wide">{text}</p>
        </div>
    );
};
