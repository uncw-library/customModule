import { UncwHeaderComponent } from "../uncw-header/uncw-header.component";
// import { LibAnswersChatComponent } from "../libanswers-chat/libanswers-chat.component";
import { HideLoginSnackbarComponent } from "../hide-login-snackbar/hide-login-snackbar.component";
import { TwilioSMSComponent } from "../twilio-sms/twilio-sms.component";

// Define the map
export const selectorComponentMap = new Map<string, any>([
    ['nde-header-top', UncwHeaderComponent],
    // ['nde-header-after', LibAnswersChatComponent],
    ['nde-header-before', HideLoginSnackbarComponent],
    ['nde-location-after', TwilioSMSComponent],

]);
