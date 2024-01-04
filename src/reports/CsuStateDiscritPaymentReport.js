import { Grid } from "@material-ui/core";
import { PublishedComponent } from "@openimis/fe-core";
import React from "react";
import { injectIntl } from "react-intl";
import { useSelector } from "react-redux";

const CsuStateDiscritPaymentReport = (props) => {
  const { values, setValues } = props;
  const userHealthFacility = useSelector((state) => state.loc.userHealthFacilityFullPath);

  if (userHealthFacility?.code) {
    values.hflocation = userHealthFacility
  };

  console.log(values);
  return (
    <Grid container direction="column" spacing={1}>
      <Grid item>
        <PublishedComponent
          pubRef="location.DistrictPicker"
          healtfacilityDistrict={values.hflocation}
          required
          value={values.district}
          withNull={true}
          onChange={((district) => { setValues({ ...values, district }) })}
        />
      </Grid>

      <Grid item>
        <PublishedComponent
          pubRef="core.MonthYearPicker"
          value={values.dateFrom}
          module="Csu"
          required
          label="csu.dateFrom"
          onChange={(dateFrom) => setValues({ ...values, dateFrom })}
        />
      </Grid>
      <Grid item>
        <PublishedComponent
          pubRef="core.MonthYearPicker"
          value={values.dateTo}
          module="Csu"
          required
          label="csu.dateTo"
          onChange={(dateTo) => setValues({ ...values, dateTo })}
          min={2010}
          max={2040}
        />
      </Grid>
    </Grid>
  );
};


export default injectIntl(CsuStateDiscritPaymentReport);
