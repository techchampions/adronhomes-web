  interface FormatOptions {
    defaultText?: string;
    showPlus?: boolean;
    decimals?: number;
    thresholds?: {
      thousand: number;
      million: number;
      billion: number;
    };
  }

  export const formatCompactNumber = (
    value: { toString: () => string },
    options: FormatOptions = {},
  ) => {
    const {
      defaultText = "20+",
      showPlus = true,
      decimals = 1,
      thresholds = {
        thousand: 10000,
        million: 1000000,
        billion: 1000000000,
      },
    } = options;

    // If value is undefined or null, return default
    if (!value) return defaultText;

    // Extract numeric part from the value
    const numericValue = parseInt(value.toString().replace(/[^0-9]/g, ""));

    // Check if it's a valid number
    if (isNaN(numericValue)) return value;

    // Check if original had a plus sign
    const hadPlus = value.toString().includes("+");
    const shouldShowPlus =
      showPlus && (hadPlus || numericValue >= thresholds.thousand);

    // Helper function to format with suffix
    const formatWithSuffix = (
      value: number,
      divisor: number,
      suffix: string,
    ) => {
      const formatted = (value / divisor).toFixed(decimals);
      const cleanFormatted = formatted.endsWith(".0")
        ? formatted.slice(0, -2)
        : formatted;
      return `${cleanFormatted}${suffix}${shouldShowPlus ? "+" : ""}`;
    };

    // Format based on the value
    if (numericValue >= thresholds.billion) {
      return formatWithSuffix(numericValue, 1000000000, "B");
    } else if (numericValue >= thresholds.million) {
      return formatWithSuffix(numericValue, 1000000, "M");
    } else if (numericValue >= thresholds.thousand) {
      return formatWithSuffix(numericValue, 1000, "K");
    } else {
      return shouldShowPlus ? `${numericValue}+` : numericValue.toString();
    }
  };