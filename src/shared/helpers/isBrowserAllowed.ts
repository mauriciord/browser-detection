export default function isBrowserAllowed(): boolean {
  const {
    navigator: { userAgent },
  } = window;

  // @ts-ignore
  const isChromium = !!window.chrome;
  const isIOSChrome = userAgent.includes("CriOS");
  const isFirefox = userAgent.includes("Firefox");

  return isChromium || isIOSChrome || isFirefox;
}
