const HeadingCom = (props) => {
    const { heading, subheading, subline } = props;

    console.log(heading, subheading, subline);

    return (
        <>
            <div className="bg-[#fbf7f3]    mb-[-64px] "></div>

            <h3 className="uppercase text-[24px] text-center tracking-widest text-gray-700 font-medium mt-3">
                {heading}
            </h3>

            <h1 className="text-[42px] text-center md:text-[44px] font-serif text-black mb-[20px] uppercase">
                {subheading}
            </h1>

            {/* ✅ render only if subline prop is passed */}
            {subline && (
                <p className="text-gray-600 text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed mb-[10px]">
                    {subline}
                </p>
            )}
        </>
    );
};

export default HeadingCom;
