import type { NextApiRequest, NextApiResponse } from 'next';
import pdfParse from 'pdf-parse';
import mammoth from 'mammoth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      let textContent = '';

      if (req.body.file) {
        const fileBuffer = Buffer.from(req.body.file, 'base64');
        const fileType = req.body.fileType;

        if (fileType === 'application/pdf') {
          const pdfData = await pdfParse(fileBuffer);
          textContent = pdfData.text;
        } else if (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
          const result = await mammoth.extractRawText({ buffer: fileBuffer });
          textContent = result.value;
        } else {
          return res.status(400).json({ error: 'Unsupported file type' });
        }
      } else if (req.body.text) {
        textContent = req.body.text;
      } else {
        return res.status(400).json({ error: 'No content provided' });
      }

      // TODO: Process textContent with AI
      res.status(200).json({
        message: 'Assessment received',
        content: textContent
      });
    } catch (error) {
      console.error('Error processing assessment:', error);
      res.status(500).json({ error: 'Failed to process assessment' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}