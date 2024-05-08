export const LinkTelFormatter = (number: string) => {
  return `tel:${number.replace("(", "").replace(")", "").replace("-", "").replace(" ", "")}`;
}