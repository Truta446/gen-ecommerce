export function leftPad(value: any, totalWidth: number, paddingChar?: any): string {
  const length = totalWidth - value.toString().length + 1;
  return Array(length).join(paddingChar || '0') + value;
}

export function shortenName(value: string): string {
  const spl = value ? value.split(' ') : '';

  return spl.length > 1 ? spl[0] + ' ' + spl[spl.length - 1] : value;
}

export function removeWhiteSpace(_value: string): string {
  if (!_value) {
    return '';
  }

  return _value.replace(/ /g, '');
}

export function removeSpecialCharacters(_value: string): string {
  if (!_value) {
    return '';
  }

  return _value.replace(/[^a-z0-9]/gi, '');
}

export function removeCharacters(_value: string): string {
  if (!_value) {
    return '';
  }

  return _value.replace(/[^\d]+/g, '');
}

export function ignoreNumbers(event: any): void {
  const keyCode = event.keyCode ? event.keyCode : event.wich;

  if (keyCode > 47 && keyCode < 58) {
    return event.preventDefault(true);
  }
}

export function onlyNumbers(event: any): void {
  const keyCode = event.keyCode ? event.keyCode : event.wich;
  if (event.shiftKey) {
    return event.preventDefault(true);
  } else {
    if (keyCode > 31 && (keyCode < 48 || keyCode > 57)) {
      return event.preventDefault(true);
    }
  }
}

export function ignoreHotkeys(event: any): void {
  if (event.shiftKey) {
    return event.preventDefault(true);
  }
}

export function getSmallModalWidth(): string {
  const width = window.innerWidth;

  if (width <= 1300) {
    return '50%';
  } else if (width <= 1500) {
    return '40%';
  } else {
    return '30%';
  }
}

export function getBigModalWidth(): string {
  const width = window.innerWidth;

  if (width <= 1300) {
    return '70%';
  } else if (width <= 1500) {
    return '60%';
  } else {
    return '50%';
  }
}

export function trimData(data: any): any {
  Object.keys(data).forEach((k) => (data[k] = typeof data[k] === 'string' ? data[k].trim() : data[k]));
  return data;
}
