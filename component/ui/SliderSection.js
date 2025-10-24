"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import HeadingCom from "./HeadingCom";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function SliderSection({
    visible = 6,
    data = [], // <== dynamic images & titles
    heading = "Default Heading", // <== dynamic heading
    subheading = "Default Subheading", // <== dynamic subheading
    subline = "",
}) {
    const sliderRef = useRef(null);
    const [current, setCurrent] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(visible);

    const items = (data || []).map((it, idx) => ({
        id: it.id ?? idx,
        title: it.title ?? "",
        image: it.image ?? "",
    }));

    useEffect(() => {
        function calc() {
            const w = window.innerWidth;
            if (w >= 1600) setSlidesToShow(Math.min(3, visible));
            else if (w >= 1280) setSlidesToShow(Math.min(3, visible));
            else if (w >= 900) setSlidesToShow(Math.min(3, visible));
            else if (w >= 640) setSlidesToShow(2);
            else setSlidesToShow(1);
        }
        calc();
        window.addEventListener("resize", calc);
        return () => window.removeEventListener("resize", calc);
    }, [visible]);

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "140px",
        slidesToShow,
        speed: 500,
        autoplay: false,
        dots: false,
        arrows: false,
        focusOnSelect: true,
        afterChange: (i) => setCurrent(i),
        responsive: [
            { breakpoint: 1400, settings: { centerPadding: "110px" } },
            { breakpoint: 1024, settings: { centerPadding: "70px" } },
            { breakpoint: 768, settings: { centerPadding: "40px", slidesToShow: 2 } },
            { breakpoint: 480, settings: { centerPadding: "12px", slidesToShow: 1 } },
        ],
    };

    const prev = () => sliderRef.current?.slickPrev();
    const next = () => sliderRef.current?.slickNext();

    const centerIndex = items.length ? current % items.length : 0;
    const captionTitle = items[centerIndex]?.title || "";

    return (
        <section className="w-full mx-auto relative overflow-hidden mb-40">
            <div className="text-center mb-8">
                <HeadingCom heading={heading} subheading={subheading} subline={subline} />
            </div>

            <div className="slider-container">
                <Slider ref={sliderRef} {...settings}>
                    {items.map((it) => (
                        <div key={it.id} className="px-8">
                            <div className="card product-card overflow-visible">
                                <div className="imgWrap relative w-full h-[180px] md:h-[320px] lg:h-[440px] flex items-center justify-center">
                                    <Image
                                        src={it.image}
                                        alt={it.title || "ring"}
                                        width={900}
                                        height={900}
                                        className="mainImage max-w-full max-h-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="slider-gallery-caption mt-8 flex items-center justify-center gap-6">
                <button
                    className="caption-arrows px-4 py-3 rounded-full bg-white/90 shadow-sm"
                    onClick={prev}
                    aria-label="prev"
                >
                    ←
                </button>

                <div className="caption-title text-center pointer-events-none">
                    <div className="text-base md:text-lg font-semibold text-gray-900">{captionTitle}</div>
                </div>

                <button
                    className="caption-arrows px-4 py-3 rounded-full bg-white/90 shadow-sm"
                    onClick={next}
                    aria-label="next"
                >
                    →
                </button>
            </div>
        </section>
    );
}
