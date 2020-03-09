const currentPage = (location = {}) => {
  const { pathname } = location;
  if (!pathname) return;
  return pathname.substring(pathname.lastIndexOf('/') + 1).split('?')[0];
}

const getBreadCrumbs = (match = {}) => {
  const { path } = match;
  if (!path) return [];
  return path.split('/').filter(x => x !== "" && !x.includes(':'));
}

export {
  currentPage,
  getBreadCrumbs
}