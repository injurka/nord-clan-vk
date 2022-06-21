interface SizeConverted {
  value: string;
  type: string;
}

export const calculateSize = (size: number): SizeConverted => {
  if (size < 1024) {
    return {
      value: size.toFixed(2),
      type: 'B'
    };
  }
  if (size < 1048576) {
    return {
      value: (size / 1024).toFixed(2),
      type: 'KB'
    };
  }
  return {
    value: (size / 1024 / 1024).toFixed(2),
    type: 'MB'
  };
};
