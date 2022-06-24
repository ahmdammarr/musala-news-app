import { NativeStackScreenProps} from '@react-navigation/native-stack';
import { ENewsRoutes } from "shared/enums/ERoutes.enum";
import { TNews } from "./TNews.type";

export interface INewsNavigate {
    navigation: NativeStackScreenProps<{
        [ENewsRoutes.article]:TNews
    }>['navigation']
}