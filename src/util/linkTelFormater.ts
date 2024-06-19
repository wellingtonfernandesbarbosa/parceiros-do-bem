const linkTelFormatter = (number: string) => {
  return `tel:${number.replace("(", "").replace(")", "").replace("-", "").replace(" ", "")}`;
}

export default linkTelFormatter;