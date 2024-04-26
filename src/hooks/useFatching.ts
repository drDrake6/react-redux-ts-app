import { useState } from "react"

export const useFetching = (callback: (arg: string | undefined) => void) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const fetching = async (args: string | undefined) => {
        try {
            setIsLoading(true)
            await callback(args)
        } catch (err: any){
            setError(err)
        } finally {
            setIsLoading(false)
        }
    }

    return {fetching, isLoading, error}
}