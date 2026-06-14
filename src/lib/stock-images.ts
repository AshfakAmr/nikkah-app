type StockImageOptions = {
  width?: number;
  height?: number;
  quality?: number;
};

/** High-resolution Unsplash URL tuned for crisp card/avatar rendering. */
export function stockImage(
  photoId: string,
  { width = 1600, height, quality = 90 }: StockImageOptions = {},
): string {
  const params = new URLSearchParams({
    auto: "format",
    fit: "crop",
    w: String(width),
    q: String(quality),
  });

  if (height) {
    params.set("h", String(height));
  }

  return `https://images.unsplash.com/${photoId}?${params.toString()}`;
}

/** Hijabi / modest Muslim women portraits (Unsplash, free license). */
export const muslimWomenPortraits = [
  "photo-1772876159855-47fcb39862a9",
  "photo-1770802675212-3a604a2852b2",
  "photo-1772714601002-fbb0fea8a911",
  "photo-1584339312444-6952d098e152",
  "photo-1627378228978-a62f71edff15",
  "photo-1542380841-5eef57349ca1",
  "photo-1550546094-9835463f9f71",
  "photo-1613447895817-e617a4093f50",
  "photo-1558027309-0844844295f7",
  "photo-1547527392-bd5d50305ca0",
  "photo-1530797195762-6e542a0f1843",
  "photo-1654729504239-8c2abeb26d96",
] as const;

/** Muslim men portraits — bearded, thobe, and professional styles. */
export const muslimMenPortraits = [
  "photo-1758874574397-e56dfcfc116d",
  "photo-1651646781428-18b47ae1e17b",
  "photo-1627091908405-30bd51eec537",
  "photo-1570206913724-17f67ed3a6d6",
  "photo-1626079128487-ae1175be3e54",
  "photo-1677899656324-7c8aa1f19f8d",
  "photo-1560601575-29dc7d25ff3b",
  "photo-1598698230199-f7f08ed4234b",
  "photo-1680692138250-9dfcbd9c67be",
  "photo-1544723795-3fb6469f5b39",
  "photo-1616268279285-6867fa49b329",
  "photo-1637518026117-9d1ac5e73f07",
] as const;

/** Muslim wedding / nikah couple photos — single image, bride + groom together. */
export const muslimCouplePhotos = [
  "photo-1765812928228-cfd253be0e69",
  "photo-1771478703113-467f8df7f3db",
] as const;

export function muslimWomanPortrait(index: number): string {
  const photoId =
    muslimWomenPortraits[index % muslimWomenPortraits.length] ??
    muslimWomenPortraits[0];
  return stockImage(photoId, { width: 1200, height: 1500 });
}

export function muslimManPortrait(index: number): string {
  const photoId =
    muslimMenPortraits[index % muslimMenPortraits.length] ??
    muslimMenPortraits[0];
  return stockImage(photoId, { width: 1200, height: 1500 });
}

export function muslimCouplePhoto(index: number): string {
  const photoId =
    muslimCouplePhotos[index % muslimCouplePhotos.length] ??
    muslimCouplePhotos[0];
  return stockImage(photoId, { width: 1400, height: 1400 });
}

/** Circular team headshots — slightly tighter crop for avatars. */
export function muslimTeamPortrait(
  photoId: (typeof muslimWomenPortraits)[number] | (typeof muslimMenPortraits)[number],
): string {
  return stockImage(photoId, { width: 800, height: 800 });
}
