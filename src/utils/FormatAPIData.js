import { handleRequest } from "../api/api";
import { DataError, handleError } from "../utils/errorHandler";
// import { fillElements } from "../models/fillElements";

export async function formatAPIdata (ipInput) {
            try {
                let reply = await handleRequest(ipInput);
                if (reply  !== "undefined") {
                    let coordinates = {
                        lat: reply.location.lat,
                        lng: reply.location.lng
                        };
                    let pageFillInfo = (coordinates, reply.isp, reply.ip, reply.location.city, reply.location.region, reply.location.timezone, reply.location.postalcode);
                    if (pageFillInfo !== "undefined") {
                    return pageFillInfo;
                    } else {
                        throw (new DataError("API data could not be formatted"));
                    }
                } else {
                    throw (new DataError("API data is undefined"));
                }
            }
            catch(e) {
                handleError("API Formatting", e)
            };
        };