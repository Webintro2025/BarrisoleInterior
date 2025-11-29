const nodemailer = require("nodemailer");

export async function POST(req) {
  try {
    const { fullName, phoneNumber, email, message } = await req.json();

 const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,         // smtp.gmail.com
  port: Number(process.env.SMTP_PORT), // 465
  secure: Number(process.env.SMTP_PORT) === 465, // true for 465
  auth: {
    user: process.env.SMTP_USER,       // test123@gmail.com
    pass: process.env.SMTP_PASS,       // App Password (NOT normal Gmail password)
  },
});
    await transporter.verify(); // optional

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || "Residencynewaparna@gmail.com",
      replyTo: email, // 👈 useful so you can reply directly
      subject: `New Inquiry from ${fullName}`,
      text: `Name: ${fullName}\nPhone: ${phoneNumber}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>New Inquiry</h2>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Phone:</b> ${phoneNumber}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
