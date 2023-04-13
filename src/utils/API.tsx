export const getToken = (): any => {
  const data = fetch('http://84.201.188.117:5021/api/v3/clients/accesstoken', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
      AccessKey: import.meta.env.VITE_ACCESS_KEY,
    },
    body: JSON.stringify({
      idClient: import.meta.env.VITE_CLIENT_ID,
      accessToken: '',
      paramName: 'device',
      paramValue: import.meta.env.VITE_DEVICE_ID,
      latitude: 0,
      longitude: 0,
      sourceQuery: 0,
    }),
  }).then((response) => {
    return response.json();
  });
  return data;
};

export const getBonusData = (token: string): any => {
  const bonusData = fetch(
    `http://84.201.188.117:5003/api/v3/ibonus/generalinfo/${token}`,
    {
      headers: {
        AccessKey: import.meta.env.VITE_ACCESS_KEY,
      },
    }
  ).then((response) => {
    return response.json();
  });
  return bonusData;
};
