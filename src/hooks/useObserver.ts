import {MutableRefObject, useEffect, useRef} from "react"

 export const useObserver = (
    ref: React.RefObject<HTMLDivElement>, 
    canLoad: boolean, isLoading: boolean, onIntersecting: () => void) => {
    let observer: MutableRefObject<IntersectionObserver> = useRef(new IntersectionObserver(() => {}));
    useEffect(
        () => {
          if(isLoading) return;
          if(!ref.current) return;
          if(observer.current) 
           observer.current.disconnect()
          var callback: IntersectionObserverCallback = (entries, observer) => {
            if(entries[0].isIntersecting && canLoad){
              onIntersecting()
            }  
          };
          observer.current = new IntersectionObserver(callback);
          observer.current.observe(ref.current);
        }, [isLoading]
      )
 }