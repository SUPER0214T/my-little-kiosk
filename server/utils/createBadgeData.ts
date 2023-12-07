const BADGE = {
  RECOMMEND: "https://picsum.photos/id/980/400/400",
  NEW: "https://picsum.photos/id/204/400/400",
  BEST: "https://picsum.photos/id/103/400/400",
};

export const createBadgeData = () => {
  return [...Object.values(BADGE)];
};
