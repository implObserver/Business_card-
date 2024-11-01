import { useTitleContext } from "../lib/context/Context"

export const Title = () => {
    const text = useTitleContext();
    return (
        <div>
            {text}
        </div>
    )
}