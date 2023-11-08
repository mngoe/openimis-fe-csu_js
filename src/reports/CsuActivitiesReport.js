import { Grid } from "@material-ui/core";
import { PublishedComponent } from "@openimis/fe-core";
import React from "react";
import { injectIntl } from "react-intl";
import { useSelector } from "react-redux";

const CsuActivitiesReport = (props) => {
  const { values, setValues } = props;
  const userHealthFacility = useSelector((state) => state.loc.userHealthFacilityFullPath);

  if (userHealthFacility?.code) {
    values.hflocation = userHealthFacility
  };

  const onHealtFacilityChange = (hflocation)=>{
    if(!values.district || values.district==null){
      let District = hflocation.location
      setValues({...values, hflocation, district:District})
    }else{
      setValues({...values, hflocation})
    }
    
  }
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
          onChange={((district)=>{ setValues({...values, district})})}
        />
      </Grid>
      <Grid item>
        <PublishedComponent
          pubRef="location.HealthFacilityPicker"
          district={values.district}
          onChange={(hflocation) =>
            onHealtFacilityChange(hflocation)
          }
          value={userHealthFacility?.code ? userHealthFacility.code : values.hflocation}
        />
      </Grid>
      <Grid item>
        <PublishedComponent
          pubRef="core.DatePicker"
          value={values.dateFrom}
          module="Csu"
          required
          label="csu.dateFrom"
          onChange={(dateFrom) => setValues({ ...values, dateFrom })}
        />
      </Grid>
      <Grid item>
        <PublishedComponent
          pubRef="core.DatePicker"
          value={values.dateTo}
          module="Csu"
          required
          label="csu.dateTo"
          onChange={(dateTo) => setValues({ ...values, dateTo })}
        />
      </Grid>
    </Grid>
  );
};


export default injectIntl(CsuActivitiesReport);
