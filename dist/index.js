'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _defineProperty = require('@babel/runtime/helpers/defineProperty');
var core = require('@material-ui/core');
var feCore = require('@openimis/fe-core');
var React = require('react');
var reactIntl = require('react-intl');
var reactRedux = require('react-redux');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var messages_en = {
	"csu.dateFrom": "From",
	"csu.dateTo": "To"
};

var messages_fr = {
	"csu.dateFrom": "Du",
	"csu.dateTo": "Au: "
};

function ownKeys$4(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$4(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$4(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$4(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CsuActivitiesReport = function CsuActivitiesReport(props) {
  var values = props.values,
    setValues = props.setValues;
  var userHealthFacility = reactRedux.useSelector(function (state) {
    return state.loc.userHealthFacilityFullPath;
  });
  if (userHealthFacility !== null && userHealthFacility !== void 0 && userHealthFacility.code) {
    values.hflocation = userHealthFacility;
  }
  var onHealtFacilityChange = function onHealtFacilityChange(hflocation) {
    setValues(_objectSpread$4(_objectSpread$4({}, values), {}, {
      hflocation: hflocation
    }));
  };
  console.log(values);
  return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "location.HealthFacilityPicker",
    district: values.district,
    onChange: function onChange(hflocation) {
      return onHealtFacilityChange(hflocation);
    },
    value: userHealthFacility !== null && userHealthFacility !== void 0 && userHealthFacility.code ? userHealthFacility.code : values.hflocation
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "core.DatePicker",
    value: values.dateFrom,
    module: "Csu",
    required: true,
    label: "csu.dateFrom",
    onChange: function onChange(dateFrom) {
      return setValues(_objectSpread$4(_objectSpread$4({}, values), {}, {
        dateFrom: dateFrom
      }));
    }
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "core.DatePicker",
    value: values.dateTo,
    module: "Csu",
    required: true,
    label: "csu.dateTo",
    onChange: function onChange(dateTo) {
      return setValues(_objectSpread$4(_objectSpread$4({}, values), {}, {
        dateTo: dateTo
      }));
    }
  })));
};
var CsuActivitiesReport$1 = reactIntl.injectIntl(CsuActivitiesReport);

function ownKeys$3(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$3(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$3(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$3(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CsuBirthPaymentStatusReport = function CsuBirthPaymentStatusReport(props) {
  var values = props.values,
    setValues = props.setValues;
  var userHealthFacility = reactRedux.useSelector(function (state) {
    return state.loc.userHealthFacilityFullPath;
  });
  if (userHealthFacility !== null && userHealthFacility !== void 0 && userHealthFacility.code) {
    values.hflocation = userHealthFacility;
  }
  var onHealtFacilityChange = function onHealtFacilityChange(hflocation) {
    setValues(_objectSpread$3(_objectSpread$3({}, values), {}, {
      hflocation: hflocation
    }));
  };
  console.log(values);
  return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "location.HealthFacilityPicker",
    district: values.district,
    onChange: function onChange(hflocation) {
      return onHealtFacilityChange(hflocation);
    },
    required: true,
    value: userHealthFacility !== null && userHealthFacility !== void 0 && userHealthFacility.code ? userHealthFacility.code : values.hflocation
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "core.DatePicker",
    value: values.dateFrom,
    module: "Csu",
    required: true,
    label: "csu.dateFrom",
    onChange: function onChange(dateFrom) {
      return setValues(_objectSpread$3(_objectSpread$3({}, values), {}, {
        dateFrom: dateFrom
      }));
    }
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "core.DatePicker",
    value: values.dateTo,
    module: "Csu",
    required: true,
    label: "csu.dateTo",
    onChange: function onChange(dateTo) {
      return setValues(_objectSpread$3(_objectSpread$3({}, values), {}, {
        dateTo: dateTo
      }));
    }
  })));
};
var CsuBirthPaymentStatusReport$1 = reactIntl.injectIntl(CsuBirthPaymentStatusReport);

function ownKeys$2(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$2(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$2(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$2(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CsuStateDiscritPaymentReport = function CsuStateDiscritPaymentReport(props) {
  var values = props.values,
    setValues = props.setValues;
  var userHealthFacility = reactRedux.useSelector(function (state) {
    return state.loc.userHealthFacilityFullPath;
  });
  if (userHealthFacility !== null && userHealthFacility !== void 0 && userHealthFacility.code) {
    values.hflocation = userHealthFacility;
  }
  console.log(values);
  return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "location.DistrictPicker",
    healtfacilityDistrict: values.hflocation,
    required: true,
    value: values.district,
    withNull: true,
    onChange: function onChange(district) {
      setValues(_objectSpread$2(_objectSpread$2({}, values), {}, {
        district: district
      }));
    }
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "core.MonthYearPicker",
    value: values.dateFrom,
    module: "Csu",
    required: true,
    label: "csu.dateFrom",
    onChange: function onChange(dateFrom) {
      return setValues(_objectSpread$2(_objectSpread$2({}, values), {}, {
        dateFrom: dateFrom
      }));
    }
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "core.MonthYearPicker",
    value: values.dateTo,
    module: "Csu",
    required: true,
    label: "csu.dateTo",
    onChange: function onChange(dateTo) {
      return setValues(_objectSpread$2(_objectSpread$2({}, values), {}, {
        dateTo: dateTo
      }));
    },
    min: 2010,
    max: 2040
  })));
};
var CsuStateDiscritPaymentReport$1 = reactIntl.injectIntl(CsuStateDiscritPaymentReport);

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var CsuFagepReport = function CsuFagepReport(props) {
  var values = props.values,
    setValues = props.setValues;
  var userHealthFacility = reactRedux.useSelector(function (state) {
    return state.loc.userHealthFacilityFullPath;
  });
  if (userHealthFacility !== null && userHealthFacility !== void 0 && userHealthFacility.code) {
    values.hflocation = userHealthFacility;
  }
  var onHealtFacilityChange = function onHealtFacilityChange(hflocation) {
    setValues(_objectSpread$1(_objectSpread$1({}, values), {}, {
      hflocation: hflocation
    }));
  };
  console.log(values);
  return /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    container: true,
    direction: "column",
    spacing: 1
  }, /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "location.HealthFacilityPicker",
    district: values.district,
    onChange: function onChange(hflocation) {
      return onHealtFacilityChange(hflocation);
    },
    value: userHealthFacility !== null && userHealthFacility !== void 0 && userHealthFacility.code ? userHealthFacility.code : values.hflocation
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "core.DatePicker",
    value: values.dateFrom,
    module: "Csu",
    required: true,
    label: "csu.dateFrom",
    onChange: function onChange(dateFrom) {
      return setValues(_objectSpread$1(_objectSpread$1({}, values), {}, {
        dateFrom: dateFrom
      }));
    }
  })), /*#__PURE__*/React__default["default"].createElement(core.Grid, {
    item: true
  }, /*#__PURE__*/React__default["default"].createElement(feCore.PublishedComponent, {
    pubRef: "core.DatePicker",
    value: values.dateTo,
    module: "Csu",
    required: true,
    label: "csu.dateTo",
    onChange: function onChange(dateTo) {
      return setValues(_objectSpread$1(_objectSpread$1({}, values), {}, {
        dateTo: dateTo
      }));
    }
  })));
};
var CsuFagepReport$1 = reactIntl.injectIntl(CsuFagepReport);

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty__default["default"](e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var DEFAULT_CONFIG = {
  "translations": [{
    key: "en",
    messages: messages_en
  }, {
    key: "fr",
    messages: messages_fr
  }],
  "reports": [{
    key: "invoice_fosa_csu",
    component: CsuActivitiesReport$1,
    isValid: function isValid(values) {
      return values.dateFrom && values.dateTo;
    },
    getParams: function getParams(values) {
      var _values$hflocation, _values$district;
      return {
        date_from: values.dateFrom,
        date_to: values.dateTo,
        hflocation: (_values$hflocation = values.hflocation) !== null && _values$hflocation !== void 0 && _values$hflocation.code ? values.hflocation.code : 0,
        district: (_values$district = values.district) !== null && _values$district !== void 0 && _values$district.district ? values.district.code : 0
      };
    }
  }, {
    key: "invoice_hiv",
    component: CsuActivitiesReport$1,
    isValid: function isValid(values) {
      return values.dateFrom && values.dateTo;
    },
    getParams: function getParams(values) {
      var _values$hflocation2, _values$district2;
      return {
        date_from: values.dateFrom,
        date_to: values.dateTo,
        hflocation: (_values$hflocation2 = values.hflocation) !== null && _values$hflocation2 !== void 0 && _values$hflocation2.code ? values.hflocation.code : 0,
        district: (_values$district2 = values.district) !== null && _values$district2 !== void 0 && _values$district2.district ? values.district.code : 0
      };
    }
  }, {
    key: "invoice_fosa_DNBD",
    component: CsuBirthPaymentStatusReport$1,
    isValid: function isValid(values) {
      return values.dateFrom && values.dateTo && values.hflocation;
    },
    getParams: function getParams(values) {
      var _values$hflocation3;
      return {
        date_from: values.dateFrom,
        date_to: values.dateTo,
        hflocation: (_values$hflocation3 = values.hflocation) !== null && _values$hflocation3 !== void 0 && _values$hflocation3.code ? values.hflocation.code : 0
      };
    }
  }, {
    key: "invoice_district_csu",
    component: CsuStateDiscritPaymentReport$1,
    isValid: function isValid(values) {
      return values.dateFrom && values.dateTo && values.district;
    },
    getParams: function getParams(values) {
      return {
        date_from: values.dateFrom,
        date_to: values.dateTo,
        district: values.district ? values.district.code : 0
      };
    }
  }, {
    key: "invoice_fosa_FAGEP",
    component: CsuFagepReport$1,
    isValid: function isValid(values) {
      return values.dateFrom && values.dateTo;
    },
    getParams: function getParams(values) {
      var _values$hflocation4, _values$district3;
      return {
        date_from: values.dateFrom,
        date_to: values.dateTo,
        hflocation: (_values$hflocation4 = values.hflocation) !== null && _values$hflocation4 !== void 0 && _values$hflocation4.code ? values.hflocation.code : 0,
        district: (_values$district3 = values.district) !== null && _values$district3 !== void 0 && _values$district3.district ? values.district.code : 0
      };
    }
  }]
};
var CsuModule = function CsuModule(cfg) {
  return _objectSpread(_objectSpread({}, DEFAULT_CONFIG), cfg);
};

exports.CsuModule = CsuModule;
//# sourceMappingURL=index.js.map
