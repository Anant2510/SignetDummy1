import React from "react";

const VARIANT_CLASSES = {
    v1: "relative font-bold overflow-hidden border border-white bg-white text-black hover:bg-black hover:text-white transition-colors duration-300",

    v2: "relative font-bold overflow-hidden border border-white bg-transparent text-white hover:bg-white hover:text-black transition-colors duration-300",


    v3: `
    relative overflow-hidden border border-black bg-transparent text-black
    text-[15px] px-[27px] py-[12px]
    transition-all duration-500 ease-out
    group
  `,
};

const SIZE_CLASSES = {
    sm: "px-4 py-2 text-sm",
    md: "px-10 py-5 text-[19px]",
    lg: "px-14 py-4 text-lg",
};

const Button = ({
    children,
    variant = "v1",
    size = "md",
    as = "button",
    href = "#",
    onClick,
    className = "",
    ...props
}) => {
    const base = "inline-flex items-center justify-center tracking-wide uppercase";

    const variantClass = VARIANT_CLASSES[variant] || VARIANT_CLASSES.v1;

    // ✅ v3 ke liye sizeClass add nahi hoga
    const sizeClass = variant === "v3" ? "" : SIZE_CLASSES[size] || SIZE_CLASSES.md;

    const finalClass = `${base} ${variantClass} ${sizeClass} ${className}`.trim();

    const content = (
        <>

            {variant === "v3" && (
                <span
                    className="
            absolute inset-0 w-0 bg-[#feeeee]
            group-hover:w-full
            transition-all duration-500 ease-out origin-left
          "
                ></span>
            )}

            <span className="relative z-10">{children}</span>
        </>
    );

    return (
        <button type="button" className={finalClass} onClick={onClick} {...props}>
            {content}
        </button>
    );
};

export default Button;
