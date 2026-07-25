export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function isPlaceholder(value: string) {
  return value.startsWith("[ADD ");
}

export function absoluteUrl(path: string, siteUrl: string) {
  if (path.startsWith("http")) return path;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
