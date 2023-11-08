import messages_en from "./translations/en.json";
import messages_fr from "./translations/fr.json"
import CsuActivitiesReport from "./reports/CsuActivitiesReport";


const DEFAULT_CONFIG = {
  "translations": [
    { key: "en", messages: messages_en },
    {key : "fr", messages: messages_fr}
  ],
  "reports": [
    {
      key: "invoice_fosa_csu",
      component: CsuActivitiesReport,
      isValid: (values) => values.dateFrom && values.dateTo && values.district,
      getParams: (values) => ({
        date_from: values.dateFrom,
        date_to: values.dateTo,
        hflocation: values.hflocation?.code ? values.hflocation.code : 0,
        district: values.district?.district ? values.district.code : 0
      })
    },
    {
      key: "invoice_hiv",
      component: CsuActivitiesReport,
      isValid: (values) => values.dateFrom && values.dateTo && values.district,
      getParams: (values) => ({
        date_from: values.dateFrom,
        date_to: values.dateTo,
        hflocation: values.hflocation?.code ? values.hflocation.code : 0,
        district: values.district?.district ? values.district.code : 0
      })
    },
  ],
}

export const CsuModule = (cfg) => {
  return { ...DEFAULT_CONFIG, ...cfg };
}