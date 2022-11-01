import Lazyimg from "./Lazyimg";
import { getScrollParent } from "./utils";

export default function Lazyload (Vue) {

  return class Lazy {
    constructor (options) {
      this.options = options;
      this.lazyImgPool = [];
    }

    bindLazy (el, bindings) {
        const scrollParent = getScrollParent(el);
        if (scrollParent) {
          console.log(scrollParent)
          scrollParent.addEventListener(
            'scroll', 
            this.handleScroll.bind(this), 
            false
          );
        }

        const lazyImg = new Lazyimg({
          el,
          src: bindings.value,
          options: this.options,
          imgRender: this.imgRender.bind(this)
        });

        this.lazyImgPool.push(lazyImg);
        this.handleScroll();
    }

    handleScroll () {
      let isVisible = false;
      console.log(isVisible)

      this.lazyImgPool.forEach(lazyImg => {
        
        if (!lazyImg.loaded) {

          isVisible = lazyImg.checkIsVisible();
          isVisible && lazyImg.loadImg();
        }
      })

    }

    imgRender (lazyImg, state) {
      const { el, options } = lazyImg;
      const { loading, error } = options;
      let src = '';

      switch (state) {
        case 'loading':
          src = loading || '';
          break;
        case 'error':
          src = error || '';
          break;
        default:
          src = lazyImg.src;
          break;
      }
      console.log(src);
      el.setAttribute('src', src);
    }
  }
}