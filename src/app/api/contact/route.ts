import { NextResponse } from 'next/server';

// A simple map to hold email addresses, keeping them on the server.
const emailMap: { [key: string]: string } = {
  privacy: 'privacy@reviewlution.com',
  support: 'support@reviewlution.com',
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const emailKey = searchParams.get('email');

  if (emailKey && emailMap[emailKey]) {
    return NextResponse.json({ email: emailMap[emailKey] });
  }

  return new NextResponse('Email not found', { status: 404 });
}