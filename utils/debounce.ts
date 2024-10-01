export default function debounce(
  callback: (value: string) => void
): (value: string) => void {
  let time: NodeJS.Timeout | null = null;

  return function (value: string): void {
    if (time) {
      clearTimeout(time);
    }

    time = setTimeout(() => {
      callback(value);
      time = null;
    }, 1000);
  };
}
