import { UncwHeaderComponent } from "../uncw-header/uncw-header.component";
import { LibAnswersChatComponent } from "../libanswers-chat/libanswers-chat.component";

// Define the map
export const selectorComponentMap = new Map<string, any>([
    ['nde-header-top', UncwHeaderComponent],
    ['nde-header-after', LibAnswersChatComponent],
]);
