declare module 'pdf-parse' {
  interface PDFParseOptions {
    max?: number;
    version?: string;
  }

  interface PDFParseResult {
    text: string;
    version: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    info: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    metadata: any;
  }

  function pdfParse(dataBuffer: Buffer, options?: PDFParseOptions): Promise<PDFParseResult>;
  export = pdfParse;
}