const resolvedCounterValue = (value: number): string => {
    const stringifiedValue = value.toString();
    const lengthOfValue = stringifiedValue.length;

    if (lengthOfValue >= 4 && lengthOfValue < 7) {
      const preffix = stringifiedValue.slice(0, lengthOfValue - 3);
      const suffix = stringifiedValue.slice(-3);

      return `${preffix},${suffix}+`;
    } else {
      return stringifiedValue;
    }
};


export { resolvedCounterValue };
