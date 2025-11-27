import gsap from "gsap";
import { useRef } from "react";

const SearchBar = () => {
    const optionsOverlay = useRef<any>(null);
    const textPopular = useRef<any>(null);
    const textFavorites = useRef<any>(null);
    const iconFire = useRef<any>(null);
    const iconHeart = useRef<any>(null);
    const searchBox = useRef<any>(null);
    const searchIcon = useRef<any>(null);
    const iconXBox = useRef<any>(null);
    const iconX = useRef<any>(null);
    const optionsBox = useRef<any>(null);

    const ease1 = 'elastic.out(0.65,0.75)';
    const duration1 = '0.8';

    const handleOptionClick = (target: 0 | 1) => {
        const gtl = gsap.timeline({});
        const width = target === 0 ? '96px' : '104px';
        const left = target === 0 ? '2px' : 'calc(100% - 106px)';
        const text = target === 0 ? textPopular : textFavorites;
        const icon = target === 0 ? iconFire : iconHeart;
        
        gsap.killTweensOf([icon.current, text.current, optionsOverlay.current, optionsBox.current]);

        gtl.to(optionsOverlay.current, {
            width,
            left,
            duration: duration1,
            ease: ease1,
        }, 'a1')
        .to(text.current, {
            keyframes: [
                { scale: 1.1, duration: 0.1 },
                { scale: 1, duration: 0.1 },
            ],
            // color: 'red',
            duration: '2',
            ease: 'elastic.out(0.8,0.9)',
        }, 'a1')
        .to(icon.current, {
            keyframes: [
                { scale: 1.1, duration: 0.1 },
                { scale: 1, duration: 0.1 },
            ],
            duration: '1.8',
            ease: 'elastic.out(0.8,0.9)',
        }, 'a1');
    }

    const handleSearchClick = () => {
        gsap.killTweensOf([iconX.current, iconXBox.current, searchBox.current, optionsBox.current]);

        const gtl = gsap.timeline({});
        gtl
            .to(searchBox.current, {
                width: '214px',
                duration: '0.6',
                ease: 'elastic.out(0.8,0.9)',
            }, 'a2')   
            .to(searchIcon.current, {
                keyframes: [
                    { scale: 1.3, duration: 0.1 },
                    { scale: 1, duration: 0.1 },
                ],
                duration: '1.8',
                ease: 'elastic.out(0.8,0.9)',
            }, 'a2')  
            .to(optionsBox.current, {
                filter: 'blur(12px)',
                opacity: 0,
                duration: '2',
                ease: 'elastic.out(0.8,0.9)',
            }, 'a2')     
            .to(iconXBox.current, {
                filter: 'blur(0px)',
                opacity: 1,
                transformOrigin: 'left center',
                keyframes: [
                    { width: 28, duration: 0.1 },
                    { width: 36, duration: 0.1 },
                ],
                delay: '0.1',
                duration: '2',
                pointerEvents: 'auto',
                ease: 'elastic.out(0.8,0.9)',
            }, 'a2');
    };

    const handleXClick = () => {  
        gsap.killTweensOf([iconX.current, iconXBox.current, searchBox.current, optionsBox.current]);

        const gtl = gsap.timeline({});
        gtl
            .to(iconX.current, {
                keyframes: [
                    { scale: 1.3, duration: 0.1 },
                    { scale: 1, duration: 0.1 },
                ],
                duration: '0.8',
                ease: 'power2.out',
            }, 'a3')
            .to(searchBox.current, {
                width: '36px',
                duration: '0.6',
                ease: 'elastic.out(0.8,0.9)',
            }, 'a3')
            .to(iconXBox.current, {
                filter: 'blur(2px)',
                opacity: 0,
                duration: '0.4',
                ease: 'power2.out',
                pointerEvents: 'none',
            }, 'a3')     
            .to(optionsBox.current, {
                filter: 'blur(0px)',
                opacity: 1,
                duration: '0.5',
                ease: 'power2.out',
            }, 'a3');
    };

    return (
        <div className="absolute left-[50%] -translate-x-[130px] md:-translate-x-[98px]">
            <div className="flex relative gap-[12px] h-fit">
                <div
                    onClick={handleSearchClick}
                    ref={searchBox}
                    className="h-[36px] z-[1] absolute left-0 cursor-pointer w-[36px] flex justify-start pl-[9px] items-center rounded-full bg-zinc-100 shadow-zinc-400/50 shadow-[0px_0px_8px] ">
                    <svg ref={searchIcon} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                        <path d="M21 21l-6 -6" />
                    </svg>
                </div>
                <div ref={optionsBox} className="h-[36px] w-fit flex justify-center items-center gap-[8px] rounded-full p-[2px] bg-zinc-100 shadow-zinc-400/70 shadow-[0px_0px_8px] absolute left-[48px] ">
                    <div
                        onClick={() => handleOptionClick(0)}
                        className="h-full px-[8px] cursor-pointer w-fit flex justify-center items-center gap-[6px] rounded-full">
                        <svg ref={iconFire} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-flame">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 10.941c2.333 -3.308 .167 -7.823 -1 -8.941c0 3.395 -2.235 5.299 -3.667 6.706c-1.43 1.408 -2.333 3.621 -2.333 5.588c0 3.704 3.134 6.706 7 6.706s7 -3.002 7 -6.706c0 -1.712 -1.232 -4.403 -2.333 -5.588c-2.084 3.353 -3.257 3.353 -4.667 2.235" />
                        </svg>
                        <span ref={textPopular} className="font-sans font-[600] ">
                            Popular
                        </span>
                    </div>
                    <div
                        onClick={() => handleOptionClick(1)}
                        className="h-full w-fit cursor-pointer px-[8px] flex justify-center gap-[6px] items-center rounded-full">
                        <svg ref={iconHeart} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-heart">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                        </svg>
                        <span ref={textFavorites} className="font-sans font-[600] ">
                            Favorites
                        </span>
                    </div>
                    <div
                        ref={optionsOverlay}
                        style={{
                            height: 'calc(100% - 4px)',
                            left: '2px',
                        }}
                        className=" w-[96px] opacity-20 bg-red-600 absolute top-[2px] rounded-full cursor-pointer"
                    />
                </div>
                <div
                    onClick={handleXClick}
                    ref={iconXBox}
                    className="h-[36px] opacity-0 pointer-events-none blur-[2px] z-[1] absolute right-[-265px] cursor-pointer w-[36px] flex justify-start pl-[9px] items-center rounded-full bg-zinc-100 shadow-zinc-400/70 shadow-[0px_0px_8px] ">
                    <svg ref={iconX} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SearchBar