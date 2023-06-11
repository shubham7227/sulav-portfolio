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
      duration: 1,
    },
  },
};

export const scaleInAnimation = {
  offscreen: {
    scale: 1.8,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
      delay: 1,
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

export const slideRightAnimation = {
  offscreen: {
    x: -60,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const slideLeftAnimation = {
  offscreen: {
    x: 60,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

export const wordsContainer = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      // delay: 0.2,
      staggerChildren: 0.06,
      delayChildren: 0.5 * i,
    },
  }),
};

export const wordsContainerNoDelay = {
  hidden: {
    opacity: 0,
  },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      // delay: 0.2,
      staggerChildren: 0.06,
      // delayChildren: 0.5 * i,
    },
  }),
};

export const letterAnimation = {
  hidden: {
    opacity: 0,
    x: -20,
    y: 20,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};
