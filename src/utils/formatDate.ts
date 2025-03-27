import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export function formatDate(isoString: string, timeZone: string = "America/Bogota"): string {
    try {
        const zonedDate = toZonedTime(isoString, timeZone);
        return format(zonedDate, "yyyy-MM-dd HH:mm:ss");
    } catch (error) {
        console.error("Error formatting date:", error);
        return isoString;
    }
}