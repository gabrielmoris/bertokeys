import { Resend } from "resend";

export default async function handler(
  req: { method: string; body: any },
  res: {
    setHeader: (arg0: string, arg1: string) => void;
    status: (arg0: number) => { (): any; new (): any; json: { (arg0: { message: string }): void; new (): any } };
  }
) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.status(200);
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ message: "Only POST requests allowed" });
    return;
  }

  const dataUrl = req.body;
  const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

  try {
    if (dataUrl.length) {
      const imageb64 = await dataUrl.replace(/^data:(image\/(png|x-icon|svg\+xml|jpeg|gif));base64,/, "");

      let attachments = [
        {
          content: imageb64,
          filename: "attachment.jpg",
          type: "image/*",
          disposition: "attachment",
        },
      ];

      await resend.emails
        .send({
          from: "onboarding@resend.dev",
          to: "gabrielcmoris@gmail.com",
          subject: "Nuevo Presupuesto",
          html: `<p>Tienes un nuevo presupuesto.</p>`,
          attachments,
        })
        .catch((e) => {
          throw new Error(e);
        });
    } else {
      throw new Error("No Image");
    }
  } catch (e) {
    res.status(400).json({ message: `ERROR: ${e}` });
  }

  res.status(200).json({ message: "SENT" });
}
