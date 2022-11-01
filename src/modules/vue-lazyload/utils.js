export function getScrollParent (el) {
  let _parent = el.parentNode;

  while (_parent) {
    const styleOverflow = getComputedStyle(_parent)['overflow'];

    if (/(scroll)|(auto)/.test(styleOverflow)) {
      return _parent;
    }

    _parent = _parent.parentNode;
  }
}

export function imgLoad (src) {
  return new Promise((resolve, reject) => {
    const oImg = new Image();
    oImg.src = src;
    oImg.onload = resolve;
    oImg.onerror = reject;
  })
}