import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendContactNotification(formData: ContactFormData) {
    if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY is not set');
        return { error: 'Email service not configured' };
    }

    if (!process.env.PERSONAL_EMAIL) {
        console.error('PERSONAL_EMAIL is not set');
        return { error: 'Personal email not configured' };
    }

    try {
        // Send notification email to you
        const { data, error } = await resend.emails.send({
            from: 'noreply@mwadev.me', // This will need to be your verified domain
            to: [process.env.PERSONAL_EMAIL],
            subject: `New Contact Form Message: ${formData.subject}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                        New Contact Form Submission
                    </h2>
                    
                    <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="margin-top: 0; color: #495057;">Contact Details</h3>
                        <p><strong>Name:</strong> ${formData.name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
                        <p><strong>Subject:</strong> ${formData.subject}</p>
                    </div>
                    
                    <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
                        <h3 style="margin-top: 0; color: #495057;">Message</h3>
                        <p style="line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
                    </div>
                    
                    <div style="margin-top: 20px; padding: 15px; background-color: #e7f3ff; border-radius: 8px;">
                        <p style="margin: 0; font-size: 14px; color: #0066cc;">
                            💡 You can reply directly to this email to respond to ${formData.name}.
                        </p>
                    </div>
                    
                    <hr style="margin: 30px 0; border: none; border-top: 1px solid #dee2e6;">
                    
                    <p style="font-size: 12px; color: #6c757d; text-align: center;">
                        This email was sent from the contact form on mwadev.me
                    </p>
                </div>
            `,
            replyTo: formData.email, // This allows you to reply directly to the sender
        });

        if (error) {
            console.error('Failed to send email:', error);
            return { error: 'Failed to send email notification' };
        }

        console.log('Email notification sent successfully:', data);
        return { success: true, data };

    } catch (error) {
        console.error('Email service error:', error);
        return { error: 'Email service error' };
    }
}
