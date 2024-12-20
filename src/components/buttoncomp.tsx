interface ButtonProp {
    icon: string; // Path or URL for the icon image
    text: string;
}

export const ButtonComp = ({ icon, text }: ButtonProp) => {
    return (
        <div role="button" className="h-[58px] w-[376px] md:w-[446px] bg-white rounded-lg border border-gray-300 flex items-center justify-center space-x-2">
            <img src={icon} alt="icon" className="h-5 w-5 mr-2" />
            <p className="text-black font-semibold text-md tracking-wide">{text}</p>
        </div>
    );
};
