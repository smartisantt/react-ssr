export const actionTypes = {
  setDatas: 'movies/setDatas',
};

export function setDatas(datas) {
  return {
    action: actionType.setDatas,
    payload: datas,
  };
}
