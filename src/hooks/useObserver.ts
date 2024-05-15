import {MutableRefObject, useEffect, useRef} from "react"
import { PostFilterType } from "../types/utils";
import { isFiltered } from "../utils/pages";

 export const useObserver = (
    ref: React.RefObject<HTMLDivElement>, 
    canLoad: boolean, filter: PostFilterType, isLoading: boolean, onIntersecting: () => void) => {
    let observer: MutableRefObject<IntersectionObserver> = useRef(new IntersectionObserver(() => {}));
    useEffect(
        () => {
          if(isFiltered(filter)) return;
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
        }, [isLoading, filter]
      )
 }