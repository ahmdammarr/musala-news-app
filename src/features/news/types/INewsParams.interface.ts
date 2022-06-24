import { RouteProp } from "@react-navigation/native";
import { ENewsRoutes } from "shared/enums/ERoutes.enum";
import { TNews } from "./TNews.type";

export interface INewsParams {
    routeParams: RouteProp<{
        [ENewsRoutes.article]:TNews
    }>
}