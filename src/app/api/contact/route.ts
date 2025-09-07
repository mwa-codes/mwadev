import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { supabaseAdmin } from '@/lib/supabase';

// Contact form validation schema
const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email address'),
    subject: z.string().min(5, 'Subject must be at least 5 characters'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate the form data
        const validatedData = contactSchema.parse(body);

        console.log('Attempting to save to Supabase:', validatedData);

        // Verify service role key is loaded
        if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
            console.error('SUPABASE_SERVICE_ROLE_KEY is not set');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Save to Supabase database using admin client (bypasses RLS)
        const { data, error } = await supabaseAdmin
            .from('contacts')
            .insert([validatedData])
            .select();

        if (error) {
            console.error('Supabase error details:', {
                message: error.message,
                details: error.details,
                hint: error.hint,
                code: error.code
            });
            return NextResponse.json(
                {
                    error: 'Failed to save contact form. Please try again.',
                    details: error.message
                },
                { status: 500 }
            );
        }

        console.log('Contact form saved successfully:', data);

        // TODO: Send email notification
        // await sendEmailNotification(validatedData);

        return NextResponse.json(
            { message: 'Thank you for your message! I\'ll get back to you soon.' },
            { status: 200 }
        );

    } catch (error) {
        if (error instanceof z.ZodError) {
            // Extract the first error message for user-friendly response
            const firstError = error.issues[0];
            return NextResponse.json(
                {
                    error: firstError.message,
                    field: firstError.path[0],
                    details: error.issues
                },
                { status: 400 }
            );
        }

        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Something went wrong. Please try again later.' },
            { status: 500 }
        );
    }
}
