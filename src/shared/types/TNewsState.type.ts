import { TNews } from "features/news/types"
import { ENewsState } from "shared/enums"

export type TNewsState = {
    news: TNews[]
    status: ENewsState
}