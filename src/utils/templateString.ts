const templateString = (str: string, obj: any) => {
  const parts = str.split(/\$\{(?!\d)[\wæøåÆØÅ]*\}/);
  const args = str.match(/[^{}]+(?=})/g) || [];
  const parameters = args.map((argument: any) => obj[argument] || "");
  return String.raw({ raw: parts }, ...parameters);
}

export default templateString;