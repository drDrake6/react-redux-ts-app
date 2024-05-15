import Loader from "../components/UI/Loader/Loader"
import { PostFilterType } from "../types/utils"

export const getPagesCount = (totalCount: number, limit: number) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages: number) => {
    let result = []
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)       
    }
    return result;
}

export const isPrevPage = (page: number, postsLenght: number, totalPages: number): boolean => {
  return page < 1 + postsLenght / totalPages;
}

export const isFiltered = (filter: PostFilterType): boolean => {
  return filter.query !== '' || filter.sort !== undefined;
}

export const HandleRequest = (
  isPostLoading: boolean, 
  error: string | null, 
  callback: () => JSX.Element | string,
  showLoader: boolean = true
) => {
  if(error)
    return <h1>Error occured {error}</h1>
  else
  return (<div>
    {callback()}
    {isPostLoading && showLoader &&
        (<div style={{
        display: 'flex', 
        justifyContent: 'center',
        marginTop: '40%'}}>
          <Loader></Loader>
      </div>)}
  </div>)
    // if(isPostLoading) 
    //   return (<div style={{
    //     display: 'flex', 
    //     justifyContent: 'center',
    //     marginTop: '40%'}}>
    //       <Loader></Loader>
    //   </div>)
    // if(error){
    //   return `Error occured "${error}"`
    // }
    // return callback()
    // if (posts.length === 0) return "No posts"
    // return "Posts list"
  }