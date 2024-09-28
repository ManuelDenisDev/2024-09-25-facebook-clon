import EmblaCarousel, { type EmblaOptionsType } from "embla-carousel";
import { addPrevNextBtnsClickHandlers } from "./EmblaCarouselArrowButtons";

const OPTIONS: EmblaOptionsType = {
  dragFree: true,
  loop: true,
};

const emblaNode = <HTMLElement>document.querySelector(".embla");
const viewportNode = <HTMLElement>emblaNode.querySelector(".embla__viewport");
const prevBtnNode = <HTMLElement>(
  emblaNode.querySelector(".embla__button--prev")
);
const nextBtnNode = <HTMLElement>(
  emblaNode.querySelector(".embla__button--next")
);

const emblaApi = EmblaCarousel(viewportNode, OPTIONS);

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi,
  prevBtnNode,
  nextBtnNode,
);

emblaApi.on("destroy", removePrevNextBtnsClickHandlers);
