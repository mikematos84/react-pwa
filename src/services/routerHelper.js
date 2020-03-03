const currentPage = (location = null) => {
  const { pathname } = location;
  return pathname.substring(pathname.lastIndexOf('/') + 1).split('?')[0];
}

export {
  currentPage
}