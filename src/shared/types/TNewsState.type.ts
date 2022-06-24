import { TNews } from "features/news/types"
import { ENewsState } from "shared/enums"

export type TNewsState = {
    news: TNews[]
    page:0
    status: ENewsState
}

export type TSearchNewsState = {
    searchNews: TNews[]
    page:0
    status: ENewsState
}