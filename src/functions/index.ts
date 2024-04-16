
export function get_key_value(
  obj: { [key in string] : string | Object }, 
  prefered_keys: string[]
): string {
  let value = "";
  const prefered_key = prefered_keys.find(pfk => obj && obj[pfk]) || "";
  if (obj[prefered_key]) {
    value = `${obj[prefered_key]}`;
  } else {
    const key = Object.keys(obj).find(k => obj[k]);
    if (key)  {
      if (typeof obj[key] == "string") {
        value = `${obj[key]}`;
      } else if (typeof obj[key] == "object") {
        value = get_key_value(Object(obj[key]), prefered_keys);
      }
    }
  }

  return value
}