export const scaleOutAnimation = {
  offscreen: {
    scale: 0.5,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 12,
      //   bounce: 0.5,
      stiffness: 100,
      duration: 0.5,
    },
  },
};

export const scaleInAnimation = {
  offscreen: {
    scale: 2,
    opacity: 1,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

export const slideOutAnimation = {
  offscreen: {
    y: 40,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};
