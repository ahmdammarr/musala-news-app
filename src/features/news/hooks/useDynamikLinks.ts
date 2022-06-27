import dynamicLinks, {
    FirebaseDynamicLinksTypes,
} from "@react-native-firebase/dynamic-links";
import { useNavigation } from "@react-navigation/native";
import { ENewsRoutes } from "shared/enums/ERoutes.enum";
import { INewsNavigate } from "../types";

export const useDynamicLinks = () => {
    const { navigate } = useNavigation<INewsNavigate['navigation']>()
    const handleDynamicLink = (
        link: FirebaseDynamicLinksTypes.DynamicLink | null
    ) => {
        if (!!link?.url) {
            let getparams = link.url?.split("/=");
            setTimeout(() => {
                navigate(ENewsRoutes.article, {
                    author: getparams[0],
                    description: getparams[1],
                    image: getparams[2],
                    published_at: getparams[3],
                    title: getparams[4],
                    url: getparams[5],
                });
            }, 1000);
        }
    };

    return { handleDynamicLink }
}