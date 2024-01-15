import { memo } from "react";
// My import type.
type CompanyIconProps = {
  width: number;
  height: number;
  fill: string;
};

/**
 * Cart Icon to display for our button.
 * Icon by svgrepo.com https://www.svgrepo.com/svg/75540/hot-coffee-cup-with-hearts
 * @returns SVG element.
 */
function CompanyIcon(props: CompanyIconProps) {
  return (
    <svg
      width={props.width}
      height={props.height}
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25.468 25.468"
    >
      <path
        d="M19.417,16.694c-0.096,0-0.188,0.02-0.282,0.028c0.096-0.59,0.16-0.658,0.172-1.28
		c0.006-0.051,0.016-0.101,0.019-0.154c-0.149-3.101-3.876-4.877-8.076-4.915c-4.203,0.036-7.929,1.813-8.079,4.914
		c0.003,0.058,0.016,0.112,0.019,0.168c0-0.002,0-0.002,0-0.002c0.125,5.557,3.681,10.015,8.06,10.015
		c2.397,0,4.543-1.344,6.019-3.465c0.526,0.599,1.289,0.98,2.149,0.98c1.588,0,2.878-1.823,2.878-3.412
		C22.295,17.982,21.006,16.694,19.417,16.694z M16.465,17.433c-1.289,0.735-3.167,1.224-5.253,1.22
		c-2.088,0.004-3.967-0.485-5.257-1.22c-1.309-0.744-1.926-1.656-1.916-2.463c-0.011-0.814,0.609-1.726,1.916-2.469
		c1.291-0.736,3.17-1.222,5.257-1.22c2.085-0.003,3.964,0.484,5.253,1.22c1.309,0.743,1.929,1.655,1.918,2.469
		C18.393,15.775,17.774,16.689,16.465,17.433z M19.417,21.423c-0.61-0.001-1.101-0.424-1.251-0.985
		c0.208-0.451,0.392-1.46,0.548-1.951c0.206-0.132,0.438-0.231,0.702-0.234c0.724,0.003,1.314,0.592,1.317,1.318
		C20.731,20.3,20.142,21.422,19.417,21.423z M14.704,13.794c0.001-0.035,0-0.069-0.004-0.101c-0.059-0.454-0.276-0.771-0.662-0.97
		c-0.382-0.197-0.937-0.274-1.654-0.231c-1.557,0.095-4.638,1.85-5.65,2.506c0.958,0.728,3.896,2.307,5.453,2.525
		c0.711,0.1,1.271,0.066,1.667-0.099c0.398-0.169,0.64-0.469,0.735-0.914c0.008-0.033,0.012-0.067,0.012-0.101
		c0.017-0.41-0.303-0.835-0.812-1.086l-0.568-0.276l0.587-0.235C14.337,14.602,14.689,14.203,14.704,13.794z M12.872,14.854
		l-0.404,0.161l0.39,0.191c0.351,0.171,0.571,0.464,0.559,0.745c-0.001,0.024-0.003,0.048-0.008,0.071
		c-0.067,0.307-0.233,0.513-0.507,0.629c-0.272,0.114-0.657,0.137-1.145,0.069c-1.072-0.15-3.201-1.179-3.86-1.679
		c0.695-0.451,2.924-1.716,3.995-1.781c0.493-0.029,0.874,0.024,1.137,0.16c0.264,0.136,0.414,0.353,0.454,0.667
		c0.004,0.021,0.004,0.046,0.004,0.069C13.476,14.436,13.236,14.711,12.872,14.854z M9.444,7.298c-0.109-0.35-0.039-0.787,0.2-1.095
		c0.236-0.307,0.56-0.494,0.879-0.638c0.172-0.069,0.306-0.12,0.447-0.191c0.14-0.071,0.27-0.153,0.386-0.244
		c0.236-0.182,0.378-0.43,0.363-0.715c-0.017-0.285-0.166-0.58-0.35-0.844c-0.006-0.011-0.016-0.019-0.022-0.029
		c-0.003,0.002-0.005,0.005-0.006,0.007c-0.17,0.138-0.391,0.174-0.533-0.009c-0.056-0.071-0.111-0.14-0.165-0.21
		c-0.252-0.326-0.5-0.662-0.684-1.032c-0.208-0.413-0.36-0.891-0.22-1.347c0.167-0.553,0.809-1.119,1.417-0.904
		c0.352,0.125,0.61,0.434,0.799,0.762c0.273-0.191,0.593-0.344,0.92-0.273c0.333,0.073,0.423,0.434,0.43,0.724
		c0.008,0.352-0.121,0.718-0.283,1.026c-0.205,0.389-0.502,0.716-0.876,0.947c-0.172,0.106-0.423,0.055-0.462-0.165
		c-0.043-0.239,0.129-0.452,0.317-0.573c0.003-0.002,0.007-0.005,0.01-0.007c0.001,0,0.001,0,0.002-0.001
		c0.023-0.014,0.046-0.032,0.011-0.009c0.001-0.001,0.002-0.001,0.003-0.002c0.032-0.023,0.063-0.048,0.092-0.074
		c0.004-0.005,0.01-0.01,0.015-0.015c0.02-0.021,0.04-0.044,0.058-0.066c0.026-0.03,0.05-0.061,0.073-0.092
		c0.038-0.059,0.073-0.12,0.104-0.182c0.008-0.016,0.017-0.034,0.025-0.05c0.009-0.02,0.021-0.053,0.027-0.067
		c0.021-0.064,0.043-0.128,0.058-0.192c0.002-0.006,0.004-0.013,0.005-0.019c0.004-0.024,0.008-0.049,0.011-0.072
		c0.004-0.04,0.007-0.079,0.008-0.12c-0.002-0.016-0.003-0.035-0.004-0.045c-0.004-0.022-0.007-0.043-0.012-0.065
		c-0.002,0-0.002-0.002-0.004-0.003c-0.006-0.011-0.012-0.022-0.019-0.034c-0.004-0.003-0.007-0.006-0.01-0.008
		c-0.003-0.001-0.005-0.002-0.007-0.004C12.438,1.37,12.428,1.37,12.42,1.371c-0.006,0.001-0.013,0.003-0.021,0.006
		c-0.007,0.002-0.014,0.004-0.021,0.006c-0.026,0.012-0.05,0.024-0.075,0.038c-0.023,0.012-0.089,0.056-0.092,0.057
		c-0.015,0.011-0.031,0.021-0.045,0.033c-0.089,0.066-0.174,0.138-0.254,0.213c-0.128,0.116-0.438,0.201-0.531-0.01
		c-0.087-0.195-0.193-0.386-0.323-0.555c-0.01-0.012-0.022-0.026-0.025-0.031c-0.019-0.021-0.037-0.041-0.056-0.06
		c-0.038-0.038-0.077-0.076-0.12-0.109c-0.02-0.016-0.041-0.031-0.063-0.045c-0.007-0.005-0.026-0.014-0.036-0.021
		c-0.035-0.015-0.068-0.027-0.105-0.036c0,0,0,0-0.001,0c-0.017,0-0.032-0.001-0.049,0c-0.008,0-0.015,0.002-0.019,0.004
		c-0.003,0-0.005,0.001-0.007,0.002c-0.015,0.008-0.034,0.02-0.041,0.024c-0.005,0.004-0.01,0.009-0.015,0.015
		c-0.005,0.003-0.008,0.01-0.012,0.017c-0.003,0.009-0.007,0.02-0.011,0.03c-0.003,0.025-0.008,0.062-0.009,0.078
		c0,0.014-0.001,0.027-0.001,0.041c0,0.004,0,0.007,0,0.009c0.01,0.093,0.027,0.182,0.054,0.272
		c0.003,0.015,0.008,0.028,0.012,0.042c0.005,0.012,0.009,0.026,0.012,0.032c0.018,0.047,0.037,0.095,0.058,0.141
		c0.086,0.19,0.19,0.373,0.303,0.549c0.188,0.29,0.4,0.561,0.613,0.832c0.058,0.075,0.038,0.216,0.012,0.298
		c-0.019,0.058-0.047,0.112-0.081,0.162c0.016,0.015,0.035,0.027,0.05,0.043c0.23,0.252,0.447,0.551,0.505,0.935
		c0.073,0.393-0.148,0.801-0.428,1.033c-0.273,0.242-0.626,0.397-0.919,0.514C10.391,6.052,10.12,6.214,9.94,6.434
		C9.753,6.65,9.693,6.934,9.746,7.23c0.053,0.297,0.197,0.592,0.369,0.866c0.17,0.28,0.383,0.537,0.604,0.788
		C10.181,8.497,9.657,8.007,9.444,7.298z M12.024,2.478c-0.005,0.003-0.009,0.006-0.013,0.009c-0.001,0-0.001,0.001-0.002,0.001
		C12.024,2.478,12.017,2.483,12.024,2.478z M12.297,3.98c-0.078,0.259,0.006,0.529,0.123,0.76c0.104,0.207,0.243,0.398,0.385,0.581
		c0.03,0.04,0.061,0.079,0.092,0.118c0.075,0.097,0.186,0.083,0.278,0.019c0.019,0.027,0.042,0.051,0.058,0.079
		c0.143,0.21,0.253,0.445,0.262,0.663c0.007,0.215-0.099,0.396-0.283,0.536c-0.09,0.07-0.191,0.134-0.3,0.189
		c-0.112,0.056-0.214,0.093-0.354,0.151c-0.257,0.118-0.521,0.268-0.715,0.523c-0.196,0.253-0.252,0.617-0.159,0.902
		c0.178,0.577,0.607,0.958,1.048,1.258c-0.34-0.406-0.657-0.861-0.747-1.326c-0.096-0.471,0.27-0.807,0.731-0.991
		c0.229-0.094,0.519-0.221,0.74-0.417c0.228-0.191,0.412-0.532,0.348-0.856c-0.05-0.316-0.231-0.557-0.42-0.755
		c-0.029-0.029-0.064-0.054-0.096-0.082c0.011-0.019,0.022-0.036,0.029-0.056c0.014-0.047,0.026-0.127-0.007-0.168
		c-0.12-0.153-0.239-0.306-0.345-0.468c-0.065-0.099-0.123-0.203-0.171-0.31c-0.011-0.026-0.023-0.052-0.033-0.08
		c-0.002-0.004-0.004-0.011-0.006-0.018c-0.002-0.008-0.004-0.016-0.007-0.023c-0.014-0.05-0.025-0.101-0.03-0.154
		c-0.002-0.002-0.002-0.004-0.002-0.005c0-0.009,0-0.016,0.001-0.024c0-0.009,0.003-0.028,0.005-0.044
		c0.003-0.004,0.004-0.011,0.006-0.016c0.003-0.005,0.005-0.008,0.006-0.012c0.004-0.002,0.006-0.004,0.01-0.008
		c0.004-0.001,0.015-0.009,0.023-0.013c0.001,0,0.003-0.002,0.004-0.002c0.004-0.002,0.007-0.002,0.012-0.002
		c0.009,0,0.019,0,0.027,0h0.001c0.02,0.004,0.04,0.012,0.058,0.021c0.006,0.003,0.017,0.008,0.021,0.011
		c0.012,0.009,0.023,0.017,0.035,0.025c0.024,0.019,0.046,0.04,0.066,0.06c0.012,0.012,0.021,0.024,0.033,0.035
		c0.002,0.003,0.009,0.011,0.015,0.018c0.073,0.095,0.132,0.203,0.182,0.313c0.052,0.119,0.228,0.071,0.299,0.005
		c0.047-0.043,0.093-0.083,0.143-0.12c0.008-0.007,0.017-0.013,0.026-0.019c0.002-0.002,0.039-0.025,0.052-0.032
		c0.014-0.008,0.028-0.014,0.043-0.021c0.004-0.001,0.009-0.003,0.011-0.004c0.004-0.001,0.009-0.001,0.013-0.003
		c0.005,0,0.01-0.002,0.015-0.002c0.002,0,0.003,0.002,0.004,0.002c0.002,0.002,0.004,0.003,0.005,0.004
		c0.003,0.006,0.007,0.014,0.01,0.019c0.001,0.002,0.001,0.002,0.001,0.002c0.004,0.012,0.004,0.024,0.006,0.036
		c0.002,0.006,0.003,0.018,0.004,0.027c-0.001,0.02-0.003,0.043-0.005,0.066c0,0.013-0.003,0.027-0.005,0.042
		c-0.001,0.002-0.002,0.006-0.002,0.01c-0.008,0.037-0.02,0.073-0.034,0.109c-0.003,0.009-0.011,0.027-0.015,0.039
		c-0.005,0.009-0.009,0.019-0.014,0.027c-0.019,0.035-0.037,0.069-0.058,0.103c-0.012,0.018-0.027,0.035-0.04,0.051
		c-0.012,0.013-0.022,0.025-0.035,0.038c-0.003,0.004-0.006,0.005-0.009,0.008c-0.016,0.015-0.034,0.029-0.052,0.042
		c-0.004,0.004-0.009,0.007-0.014,0.012c-0.106,0.066-0.203,0.187-0.179,0.322c0.022,0.123,0.164,0.151,0.26,0.092
		c0.211-0.129,0.377-0.314,0.493-0.534c0.092-0.172,0.165-0.379,0.159-0.577c-0.003-0.164-0.054-0.367-0.241-0.407
		c-0.183-0.04-0.364,0.045-0.518,0.152c-0.106-0.185-0.252-0.358-0.45-0.428C12.753,3.351,12.393,3.67,12.297,3.98z M13.577,4.847
		c-0.001,0.001-0.002,0.001-0.003,0.002C13.623,4.814,13.593,4.837,13.577,4.847z"
      />
    </svg>
  );
}

export default memo(CompanyIcon);
