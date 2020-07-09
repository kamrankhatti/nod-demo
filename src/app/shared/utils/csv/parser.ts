import { saveAs } from 'file-saver';
import { unparse } from 'papaparse';

export const createSpreadSheet = (
  data: any[],
  fields: Array<string>,
  filename = 'download' // default file name if not passed
) => {
  const parseData = unparse({
    fields,
    data: [...data]
  });

  const file = new Blob([parseData], { type: 'text/csv;charset=utf-8' });

  saveAs(file, `${filename}.csv`);
};
