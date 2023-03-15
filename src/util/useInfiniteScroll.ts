import { useEffect, useState } from 'react';


const useInfiniteScroll = () => {
    const [bottom, setBottom] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const isBottom = 
            window.innerHeight + document.documentElement.scrollTop 
            === document.documentElement.offsetHeight;
            setBottom(isBottom);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [bottom]);

    return bottom;
}

export default useInfiniteScroll;