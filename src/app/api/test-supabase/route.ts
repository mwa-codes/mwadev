import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function GET() {
    try {
        console.log('Testing Supabase connection...');

        // Test environment variables
        const hasUrl = !!process.env.NEXT_PUBLIC_SUPABASE_URL;
        const hasAnonKey = !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
        const hasServiceKey = !!process.env.SUPABASE_SERVICE_ROLE_KEY;

        console.log('Environment check:', { hasUrl, hasAnonKey, hasServiceKey });

        if (!hasUrl || !hasAnonKey || !hasServiceKey) {
            return NextResponse.json({
                error: 'Missing environment variables',
                details: { hasUrl, hasAnonKey, hasServiceKey }
            }, { status: 500 });
        }

        // Test database connection by checking if contacts table exists
        const { error } = await supabaseAdmin
            .from('contacts')
            .select('count')
            .limit(1);

        if (error) {
            console.error('Supabase connection error:', error);
            return NextResponse.json({
                error: 'Database connection failed',
                details: error.message,
                hint: error.hint,
                code: error.code
            }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            message: 'Supabase connection working!',
            timestamp: new Date().toISOString()
        });

    } catch (error) {
        console.error('Test error:', error);
        return NextResponse.json({
            error: 'Test failed',
            details: error instanceof Error ? error.message : 'Unknown error'
        }, { status: 500 });
    }
}
