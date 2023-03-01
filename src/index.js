import messages_en from "./translations/en.json";
import CsuActivitiesReport from "./reports/CsuActivitiesReport";


const DEFAULT_CONFIG = {
  "translations": [
    { key: "en", messages: messages_en },
  ],
  "reports": [
    {
      key: "invoice_fosa_csu",
      component: CsuActivitiesReport,
      isValid: (values) => values.dateFrom && values.dateTo,
      getParams: (values) => ({
        date_from: values.dateFrom,
        date_to: values.dateTo,
        hflocation: values.hflocation?.code ? values.hflocation.code : 0
      })
    },
  ],
}

export const CsuModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}